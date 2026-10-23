import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { THEME_CHOICES, isThemeChoice } from '../../../core/theme/theme.model';
import { ThemeService } from '../../../core/theme/theme.service';
import { I18nService } from '../../../i18n/i18n.service';

@Component({
  selector: 'app-theme-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  protected readonly theme = inject(ThemeService);
  protected readonly i18n = inject(I18nService);
  protected readonly choices = THEME_CHOICES;

  protected onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (isThemeChoice(value)) {
      this.theme.select(value);
    }
  }
}
