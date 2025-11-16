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
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 65 },
        { name: 'C#', level: 65 },
        { name: 'R', level: 80 },
        { name: 'C/C++', level: 60 },
        { name: 'PHP', level: 60 }
      ]
    },
    {
      name: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Deep Learning', level: 70 },
        { name: 'NLP & RAG', level: 85 },
        { name: 'LLM Fine-tuning', level: 80 },
        { name: 'Data Analytics', level: 80 },
        { name: 'Prompt Engineering', level: 85 }
      ]
    },
    {
      name: 'MLOps & Automation',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 70 },
        { name: 'MLflow', level: 70 },
        
        
        { name: 'n8n', level: 85 },
        { name: 'Azure', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Git/GitHub/GitLab CI/CD', level: 95 },
        
        { name: 'MCP Protocols', level: 70 }
      ]
    },
    {
      name: 'Data Engineering',
      skills: [
        { name: 'Apache Spark', level: 80 },
        { name: 'Hadoop', level: 85 },
        { name: 'SQL/PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Apache Kafka', level: 80 },
        { name: 'ETL Pipelines', level: 85 }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'MERN/MEAN Stack', level: 85 },
        { name: 'Angular', level: 90 },
        { name: 'GraphQL', level: 80 },
        { name: '.NET', level: 60 },
        { name: 'Microservices', level: 80 },
        { name: 'FastAPI', level: 85 }
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
    }
  ];

  tools: Tool[] = [
    { name: 'LangChain', icon: 'fas fa-link' },
    { name: 'LangGraph', icon: 'fas fa-project-diagram' },
    { name: 'CrewAI', icon: 'fas fa-users-cog' },
    { name: 'Ollama', icon: 'fas fa-brain' },
    { name: 'n8n', icon: 'fas fa-robot' },
    { name: 'MLflow', icon: 'fas fa-flask' },
    { name: 'DVC', icon: 'fas fa-code-branch' },
    { name: 'TensorFlow', icon: 'fab fa-python' },
    { name: 'PyTorch', icon: 'fab fa-python' },
    { name: 'FAISS', icon: 'fas fa-database' },
    { name: 'XGBoost', icon: 'fas fa-tree' },
    { name: 'Power BI', icon: 'fas fa-chart-line' },
    { name: 'R (tidyverse)', icon: 'fas fa-chart-bar' },
    { name: 'Streamlit', icon: 'fas fa-play' },
    { name: 'FastAPI', icon: 'fas fa-bolt' },
    { name: 'Flask', icon: 'fas fa-fire' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: '.NET', icon: 'fas fa-code' },
    { name: 'WinDev', icon: 'fas fa-desktop' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Podman', icon: 'fas fa-cube' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitLab', icon: 'fab fa-gitlab' },
    { name: 'Kafka', icon: 'fas fa-stream' },
    { name: 'Spark', icon: 'fas fa-fire-alt' },
    { name: 'Hadoop', icon: 'fas fa-database' },
    { name: 'GraphQL', icon: 'fas fa-code-branch' },
    { name: 'MinIO', icon: 'fas fa-box' },
    { name: 'S3', icon: 'fab fa-aws' },
    { name: 'Grafana', icon: 'fas fa-chart-area' },
    { name: 'Prometheus', icon: 'fas fa-fire' },
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