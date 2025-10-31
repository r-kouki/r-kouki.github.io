import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal for reactive theme state
  isDarkMode = signal<boolean>(true);

  constructor() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    this.isDarkMode.set(isDark);

    // Apply theme on initialization
    this.applyTheme(isDark);

    // Auto-save theme changes
    effect(() => {
      const dark = this.isDarkMode();
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      this.applyTheme(dark);
    });
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
