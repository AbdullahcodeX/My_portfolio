import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeSection = signal<string>('home');
  readonly progress = signal<number>(0);

  updateProgress(): void {
    if (typeof document === 'undefined') return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    this.progress.set(Math.min(100, Math.max(0, pct)));
  }

  setActive(id: string): void {
    this.activeSection.set(id);
  }
}
