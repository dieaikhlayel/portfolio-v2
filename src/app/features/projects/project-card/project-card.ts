import { Component, inject, input } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';
import { Localized, resolveLocalized } from '../../../i18n/localized';
import { Project } from '../projects.data';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  protected readonly i18n = inject(I18nService);

  protected view(value: Localized) {
    return resolveLocalized(value, this.i18n.lang());
  }
}
