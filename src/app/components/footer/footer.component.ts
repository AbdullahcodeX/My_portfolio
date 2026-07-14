import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly links = NAV_LINKS;
  readonly year = new Date().getFullYear();
}
