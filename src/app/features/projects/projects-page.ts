import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { ProjectCard } from './project-card/project-card';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  protected readonly i18n = inject(I18nService);
  protected readonly featured = FEATURED_PROJECTS;
  protected readonly others = OTHER_PROJECTS;
}
