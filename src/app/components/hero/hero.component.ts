import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE, TERMINAL_LINES } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly renderedLines = signal<string[]>([]);
  private timer?: ReturnType<typeof setTimeout>;
  private reduceMotion = false;

  ngOnInit(): void {
    this.reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (this.reduceMotion) {
      this.renderedLines.set([...TERMINAL_LINES]);
      return;
    }
    this.typeNextLine(0);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private typeNextLine(index: number): void {
    if (index >= TERMINAL_LINES.length) return;
    const full = TERMINAL_LINES[index];
    let charIndex = 0;
    const current = [...this.renderedLines(), ''];

    const typeChar = () => {
      charIndex++;
      current[current.length - 1] = full.slice(0, charIndex);
      this.renderedLines.set([...current]);
      if (charIndex < full.length) {
        this.timer = setTimeout(typeChar, 18 + Math.random() * 22);
      } else {
        this.timer = setTimeout(() => this.typeNextLine(index + 1), 320);
      }
    };
    typeChar();
  }
}
