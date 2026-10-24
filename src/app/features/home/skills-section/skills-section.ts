import { Component, inject } from '@angular/core';
import { I18nService } from '../../../i18n/i18n.service';
import { SKILL_GROUPS, Skill } from '../skills.data';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  protected readonly i18n = inject(I18nService);
  protected readonly groups = SKILL_GROUPS;

  /** Arabic text when the page is Arabic and a translation exists; otherwise the English name. */
  protected label(skill: Skill): string {
    return this.isTranslated(skill) ? skill.ar! : skill.en;
  }

  protected isTranslated(skill: Skill): boolean {
    return this.i18n.lang() === 'ar' && !!skill.ar;
  }
}
