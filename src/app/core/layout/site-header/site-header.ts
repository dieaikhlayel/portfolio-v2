import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { I18nService } from '../../../i18n/i18n.service';
import { LanguageSwitcher } from '../../../shared/components/language-switcher/language-switcher';
import { ThemeSwitcher } from '../../../shared/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, LanguageSwitcher, ThemeSwitcher],
  host: { '(document:keydown.escape)': 'onEscape()' },
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly i18n = inject(I18nService);
  protected readonly links = ['projects', 'about', 'contact'] as const;
  protected readonly menuOpen = signal(false);

  private readonly toggle = viewChild<ElementRef<HTMLButtonElement>>('toggle');

  constructor() {
    // Going to another page always closes the mobile menu.
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected onEscape(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.toggle()?.nativeElement.focus();
    }
  }
}
