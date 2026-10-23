import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from './i18n/i18n.service';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { ThemeSwitcher } from './shared/components/theme-switcher/theme-switcher';

@Component({
  imports: [RouterOutlet, LanguageSwitcher, ThemeSwitcher],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly i18n = inject(I18nService);
}
