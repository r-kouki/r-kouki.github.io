import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      [class.bg-gray-800]="themeService.isDarkMode()"
      [class.text-yellow-400]="themeService.isDarkMode()"
      [class.bg-white]="!themeService.isDarkMode()"
      [class.text-gray-800]="!themeService.isDarkMode()"
      [class.border-2]="!themeService.isDarkMode()"
      [class.border-gray-200]="!themeService.isDarkMode()"
      [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
      title="{{ themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode' }}"
    >
      <div class="relative w-6 h-6 flex items-center justify-center">
        <!-- Sun icon (light mode) -->
        <i 
          class="fas fa-sun absolute transition-all duration-300"
          [class.opacity-0]="themeService.isDarkMode()"
          [class.rotate-180]="themeService.isDarkMode()"
          [class.scale-0]="themeService.isDarkMode()"
          [class.opacity-100]="!themeService.isDarkMode()"
          [class.rotate-0]="!themeService.isDarkMode()"
          [class.scale-100]="!themeService.isDarkMode()"
        ></i>
        
        <!-- Moon icon (dark mode) -->
        <i 
          class="fas fa-moon absolute transition-all duration-300"
          [class.opacity-100]="themeService.isDarkMode()"
          [class.rotate-0]="themeService.isDarkMode()"
          [class.scale-100]="themeService.isDarkMode()"
          [class.opacity-0]="!themeService.isDarkMode()"
          [class.-rotate-180]="!themeService.isDarkMode()"
          [class.scale-0]="!themeService.isDarkMode()"
        ></i>
      </div>
    </button>
  `,
  styles: [`
    button {
      backdrop-filter: blur(10px);
    }
    
    button:hover {
      transform: scale(1.1) rotate(10deg);
    }
    
    button:active {
      transform: scale(0.95);
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
