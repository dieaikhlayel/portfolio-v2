import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { I18nService } from '../../../i18n/i18n.service';
import { LANG_NAME, otherLang } from '../../../i18n/lang';

@Component({
  selector: 'app-language-switcher',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
  private readonly router = inject(Router);
  protected readonly i18n = inject(I18nService);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly target = computed(() => otherLang(this.i18n.lang()));
  protected readonly targetName = computed(() => LANG_NAME[this.target()]);

  /** Same page in the other language: swap the first URL segment (/en/x -> /ar/x). */
  protected readonly link = computed(() => {
    const [path, query = ''] = this.url().split('?');
    const [fragmentFree, fragment] = path.split('#');
    const rest = fragmentFree.replace(/^\/(en|ar)(?=\/|$)/, '');
    return {
      commands: ['/' + this.target() + rest],
      queryParams: query ? Object.fromEntries(new URLSearchParams(query)) : undefined,
      fragment: fragment || undefined,
    };
  });
}
