import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Tool {
  name: string;
  icon: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  icon?: string;
}

interface Award {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'C/C++', level: 75 }
      ]
    },
    {
      name: 'Data Science & ML',
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Data Analysis', level: 95 },
        { name: 'NLP', level: 80 }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Kubernetes', level: 70 }
      ]
    },
    {
      name: 'Data Engineering',
      skills: [
        { name: 'Apache Spark', level: 85 },
        { name: 'ETL Pipelines', level: 90 },
        { name: 'Data Warehousing', level: 80 },
        { name: 'Airflow', level: 75 }
      ]
    }
  ];

  tools: Tool[] = [
    { name: 'TensorFlow', icon: 'fab fa-python' },
    { name: 'PyTorch', icon: 'fab fa-python' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Jupyter', icon: 'fas fa-book-open' }
  ];
  
  certifications: Certification[] = [
    {
      name: 'Microsoft Azure AI-900 (AI Fundamentals)',
      issuer: 'Microsoft',
      date: '2023',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'CCNA 1 & 2 Certification',
      issuer: 'Cisco',
      date: '2022',
      icon: 'fas fa-network-wired'
    },
    {
      name: 'BLS (Basic Life Support) Certification',
      issuer: 'American Heart Association',
      date: '2023',
      icon: 'fas fa-heartbeat'
    },
    {
      name: 'Securinet OSINT Formation',
      issuer: 'Securinet',
      date: '2022',
      icon: 'fas fa-search'
    },
    {
      name: 'Building Transformer-Based NLP Applications',
      issuer: 'NVIDIA',
      date: '2023',
      icon: 'fas fa-robot'
    },
    {
      name: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: '2022',
      icon: 'fas fa-brain'
    }
  ];
  
  awards: Award[] = [
    {
      name: '2nd Place - IEEE Xtreme Hub Competition',
      issuer: 'IEEE',
      date: '2023',
      description: 'Achieved second place with team members in this competitive programming competition.'
    },
    {
      name: 'First Place - Twise Night Challenge',
      issuer: 'Twise',
      date: '2023',
      description: 'Won first place in a technical challenge during Twise Night event.'
    },
    {
      name: 'First Place - OSINT Competition',
      issuer: 'Securinet INSAT Hackathon',
      date: '2023',
      description: 'Secured first place in the Open Source Intelligence (OSINT) competition during the Securinet hackathon.'
    }
  ];
} 