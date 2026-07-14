import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionSpyDirective } from '../../core/directives/section-spy.directive';
import { AWARDS, EDUCATION } from '../../data/portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective, SectionSpyDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly education = EDUCATION;
  readonly awards = AWARDS;
}
