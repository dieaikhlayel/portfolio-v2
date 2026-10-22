import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcher } from './shared/components/theme-switcher/theme-switcher';

@Component({
  imports: [RouterOutlet, ThemeSwitcher],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
