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
      company: 'DS Informatique, Paris (Remote)',
      position: 'Python Developer Intern',
      duration: 'July–August 2025',
      description: 'Developed automated systems for factory operations and intelligent reporting, reducing payroll workload by 85%',
      achievements: [
        'Automated factory timeclock integration system connected to the company\'s accounting software, cutting payroll processing time by 85%.',
        'Built automated workflows for payroll calculation, attendance tracking, and comprehensive reporting.',
        'Created a Retrieval-Augmented Generation (RAG) system for intelligent business report generation and data querying.'
      ],
      skills: ['Python', 'RAG', 'Automation', 'Accounting Software', 'Workflow Design', 'Report Generation']
    },
    {
      company: 'Data Soft, Sousse, Tunisia',
      position: 'Software Development Intern',
      duration: 'June–July 2024',
      description: 'ERP extension development and financial compliance automation, reducing compliance errors by 70%',
      achievements: [
        'Built an ERP extension for automated financial data transfer aligned with Tunisian tax laws.',
        'Implemented automated validation and reporting, reducing compliance errors by 70%.',
        'Optimized system functionality and debugging using WinDev 25.'
      ],
      skills: ['WinDev', 'ERP Systems', 'Financial Compliance', 'Tax Laws', 'Data Validation', 'UML']
    },
    {
      company: 'Bureau Expert-Comptable Moncef Zayani, Tunisia',
      position: 'Accounting & IT Intern',
      duration: 'July 2023',
      description: 'Financial reporting, database optimization, and compliance systems',
      achievements: [
        'Generated compliance reports for tax regulations and financial audits.',
        'Enhanced data visualization and anomaly detection pipelines.',
        'Improved database connectivity and system performance.'
      ],
      skills: ['Accounting Software', 'Database Management', 'Compliance Reporting', 'Financial Systems', 'Data Visualization']
    }
  ];
} 