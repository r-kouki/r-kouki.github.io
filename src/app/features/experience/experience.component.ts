import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience: Job[] = [
    {
      company: 'Data Soft Sousse, Tunisia',
      position: 'Software Development Intern',
      duration: 'Summer 2024',
      description: 'Internship focused on ERP system development and optimization',
      achievements: [
        'Developed an ERP extension for financial data transfer and tax compliance using UML.',
        'Debugged and optimized system functionality with WinDev 25.'
      ],
      skills: ['UML', 'WinDev 25', 'ERP Systems', 'Debugging', 'Financial Data']
    },
    {
      company: 'Bureau Expert Comptable Moncef Zayani Tunisia',
      position: 'Accounting & IT Intern',
      duration: 'July 2023',
      description: 'Combined accounting and IT role focusing on financial systems',
      achievements: [
        'Assisted in financial data processing and compliance with tax regulations.',
        'Integrated accounting software with internal financial systems.'
      ],
      skills: ['Accounting Software', 'Financial Systems', 'Tax Compliance', 'System Integration']
    }
  ];
} 