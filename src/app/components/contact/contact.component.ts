import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SectionSpyDirective } from '../../core/directives/section-spy.directive';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective, SectionSpyDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = PROFILE;

  name = '';
  email = '';
  message = '';
  readonly sent = signal(false);

  submit(form: { valid: boolean | null }): void {
    if (!form.valid) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${this.name}`);
    const body = encodeURIComponent(`${this.message}\n\n— ${this.name} (${this.email})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
