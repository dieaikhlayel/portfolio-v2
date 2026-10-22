import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { THEME_STORAGE_KEY, ThemeChoice, isThemeChoice } from './theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly choice = signal<ThemeChoice>(this.readStoredChoice());

  constructor() {
    effect(() => this.applyToDocument(this.choice()));
  }

  select(choice: ThemeChoice): void {
    this.choice.set(choice);
    this.storeChoice(choice);
  }

  private applyToDocument(choice: ThemeChoice): void {
    const root = this.document.documentElement;
    if (choice === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', choice);
    }
  }

  private readStoredChoice(): ThemeChoice {
    if (!this.isBrowser) return 'system';
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      return isThemeChoice(stored) ? stored : 'system';
    } catch {
      return 'system'; // storage can be blocked (private mode, strict settings)
    }
  }

  private storeChoice(choice: ThemeChoice): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, choice);
    } catch {
      // Ignore: the theme still applies for this visit.
    }
  }
}
