import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { NAV_LINKS, PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly links = NAV_LINKS;
  readonly name = PROFILE.name;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  constructor(public theme: ThemeService, public spy: ScrollSpyService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
    this.spy.updateProgress();
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  isActive(href: string): boolean {
    return this.spy.activeSection() === href;
  }
}
