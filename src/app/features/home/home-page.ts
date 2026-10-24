import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { SkillsSection } from './skills-section/skills-section';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, SkillsSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  protected readonly i18n = inject(I18nService);
}
