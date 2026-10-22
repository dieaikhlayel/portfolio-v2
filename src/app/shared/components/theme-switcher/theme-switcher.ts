import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { THEME_OPTIONS, isThemeChoice } from '../../../core/theme/theme.model';
import { ThemeService } from '../../../core/theme/theme.service';

@Component({
  selector: 'app-theme-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  protected readonly theme = inject(ThemeService);
  protected readonly options = THEME_OPTIONS;

  protected onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (isThemeChoice(value)) {
      this.theme.select(value);
    }
  }
}
