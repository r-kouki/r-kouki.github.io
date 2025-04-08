import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  private texts = [
    'Machine Learning',
    'Data Pipelines',
    'ERP Systems',
    'Full-Stack Dev'
  ];
  currentText = this.texts[0];
  private currentIndex = 0;

  ngOnInit() {
    this.startTypewriterEffect();
  }

  private startTypewriterEffect() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.currentIndex];
    }, 3000);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 