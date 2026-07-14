import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrollSpyService } from '../services/scroll-spy.service';

@Directive({
  selector: '[appSectionSpy]',
  standalone: true,
})
export class SectionSpyDirective implements OnInit, OnDestroy {
  @Input('appSectionSpy') sectionId = '';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private spy: ScrollSpyService) {}

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.spy.setActive(this.sectionId);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-15% 0px -55% 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
