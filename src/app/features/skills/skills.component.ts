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
      name: 'AI & Data Science',
      skills: [
        { name: 'Machine Learning', level: 95 },
        { name: 'Deep Learning', level: 90 },
        { name: 'NLP & RAG', level: 85 },
        { name: 'Data Analytics', level: 95 }
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      name: 'MLOps & Automation',
      skills: [
        { name: 'MLflow', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Azure ML', level: 80 }
      ]
    },
    {
      name: 'AI Automation Tools',
      skills: [
        { name: 'LangGraph', level: 90 },
        { name: 'CrewAI', level: 90 },
        { name: 'n8n', level: 85 },
        { name: 'FastAPI', level: 90 }
      ]
    },
    {
      name: 'Data Visualization',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'R (ggplot2)', level: 85 },
        { name: 'Pandas', level: 95 },
        { name: 'Matplotlib/Seaborn', level: 90 }
      ]
    },
    {
      name: 'Web & Software Development',
      skills: [
        { name: 'MERN Stack', level: 85 },
        { name: 'Angular', level: 90 },
        { name: 'GraphQL', level: 80 },
        { name: '.NET', level: 75 }
      ]
    },
    {
      name: 'Databases & Big Data',
      skills: [
        { name: 'SQL/PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Apache Kafka', level: 80 },
        { name: 'Apache Spark', level: 85 }
      ]
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        { name: 'Azure', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git/GitHub/GitLab', level: 95 },
        { name: 'Kubernetes', level: 75 }
      ]
    }
  ];

  tools: Tool[] = [
    { name: 'LangChain', icon: 'fas fa-link' },
    { name: 'LangGraph', icon: 'fas fa-project-diagram' },
    { name: 'CrewAI', icon: 'fas fa-users-cog' },
    { name: 'n8n', icon: 'fas fa-robot' },
    { name: 'MLflow', icon: 'fas fa-flask' },
    { name: 'TensorFlow', icon: 'fab fa-python' },
    { name: 'PyTorch', icon: 'fab fa-python' },
    { name: 'Power BI', icon: 'fas fa-chart-line' },
    { name: 'R (tidyverse)', icon: 'fas fa-chart-bar' },
    { name: 'FastAPI', icon: 'fas fa-bolt' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Kafka', icon: 'fas fa-stream' },
    { name: 'GraphQL', icon: 'fas fa-code-branch' },
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
    },
    {
      name: 'Getting Started with Diffusion Models',
      issuer: 'NVIDIA',
      date: '2024',
      icon: 'fas fa-brain'
    },
    {
      name: 'PMI Management Ready',
      issuer: 'Project Management Institute',
      date: '2024',
      icon: 'fas fa-tasks'
    },
    {
      name: 'DELF B2 (French Language)',
      issuer: 'French Ministry of Education',
      date: '2023',
      icon: 'fas fa-language'
    },
    {
      name: 'AI Automation with LangGraph & CrewAI',
      issuer: 'Self-Directed Learning',
      date: '2024',
      icon: 'fas fa-cogs'
    },
    {
      name: 'n8n Workflow Automation',
      issuer: 'Self-Directed Learning',
      date: '2024',
      icon: 'fas fa-sitemap'
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