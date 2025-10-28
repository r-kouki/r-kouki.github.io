import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  github?: string;
  status?: string;
  achievements?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  filters = ['All', 'AI/ML', 'Automation', 'Web Dev', 'Mobile', 'Desktop'];
  currentFilter = 'All';

  projects: Project[] = [
    {
      title: 'MLOps Automation Pipeline',
      description: 'Developed end-to-end MLOps pipeline automating model retraining, versioning, and deployment using industry-standard tools.',
      category: 'Automation',
      techStack: ['MLflow', 'Docker', 'Azure', 'Python', 'CI/CD', 'FastAPI'],
      image: 'assets/bigdata.jpg',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Automated ML model retraining and deployment pipeline reducing deployment time by 70%.',
        'Integrated MLflow for experiment tracking and model versioning.',
        'Deployed scalable inference API using FastAPI and Docker on Azure.'
      ]
    },
    {
      title: 'Multi-Agent Debating Simulation Game',
      description: 'Designed and built a gamified multi-agent AI system where intelligent agents engage in structured debates using advanced reasoning.',
      category: 'AI/ML',
      techStack: ['CrewAI', 'LangGraph', 'Python', 'LLM', 'State Management'],
      image: 'assets/try-on.jpg',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Implemented complex multi-agent orchestration using CrewAI and LangGraph.',
        'Designed state management system for maintaining debate context and flow.',
        'Created engaging gameplay mechanics combining AI reasoning with user interaction.'
      ]
    },
    {
      title: 'RAG Knowledge Bot with Automation',
      description: 'Built context-aware chatbot leveraging RAG (Retrieval Augmented Generation) with automated workflow orchestration.',
      category: 'Automation',
      techStack: ['LangChain', 'n8n', 'Python', 'Vector DB', 'RAG', 'FastAPI'],
      image: 'assets/water.avif',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Integrated LangChain for advanced RAG implementation with custom retrieval strategies.',
        'Automated knowledge base updates and query routing using n8n workflows.',
        'Achieved 85% answer accuracy on domain-specific queries through fine-tuned embeddings.'
      ]
    },
    {
      title: 'Real-Time Dating App with GraphQL & Kafka',
      description: 'Engineered high-performance matchmaking platform with real-time messaging and intelligent recommendation engine.',
      category: 'Web Dev',
      techStack: ['GraphQL', 'Apache Kafka', 'Node.js', 'React', 'MongoDB', 'WebSockets'],
      image: 'assets/grocery.jpg',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Designed GraphQL API supporting real-time subscriptions for instant messaging.',
        'Implemented event-driven architecture using Apache Kafka for scalable matchmaking.',
        'Built ML-based recommendation system analyzing user preferences and behavior patterns.'
      ]
    },
    {
      title: 'R Data Analytics & Visualization Project',
      description: 'Conducted comprehensive statistical analysis and created publication-ready visualizations using R for business intelligence.',
      category: 'AI/ML',
      techStack: ['R', 'tidyverse', 'ggplot2', 'dplyr', 'Statistical Analysis', 'Power BI'],
      image: 'assets/stock.jpg',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Performed advanced statistical analysis on datasets with 100K+ records using tidyverse.',
        'Created interactive dashboards and custom visualizations with ggplot2.',
        'Developed predictive models identifying key business trends with 92% accuracy.'
      ]
    },
    {
      title: 'Big Data & Machine Learning Pipeline',
      description: 'Architected scalable big data processing system with predictive analytics capabilities for large-scale datasets.',
      category: 'AI/ML',
      techStack: ['Hadoop', 'Apache Spark', 'Python', 'Machine Learning', 'MLflow'],
      image: 'assets/bigdata.jpg',
      github: 'https://github.com',
      status: 'In Progress',
      achievements: [
        'Implemented distributed data processing pipeline using Hadoop and Apache Spark.',
        'Developed ML models for predictive analysis processing 10M+ records efficiently.',
        'Optimized data cleaning workflows reducing processing time by 60%.'
      ]
    },
    {
      title: 'Water Footprint Reduction Advisory Platform',
      description: 'Developed interactive sustainability platform featuring AI-powered chatbot providing personalized environmental recommendations.',
      category: 'Web Dev',
      techStack: ['Angular', 'TypeScript', 'LLM', 'Node.js', 'NLP'],
      image: 'assets/water.avif',
      achievements: [
        'Built Angular-based advisory platform promoting sustainable water usage practices.',
        'Integrated LLM-powered chatbot delivering context-aware environmental advice.',
        'Designed intuitive UI/UX achieving 90% user satisfaction in testing.'
      ]
    },
    {
      title: 'Industrial Machinery Company Website',
      description: 'Designed and deployed professional corporate website showcasing industrial machinery products with modern design.',
      category: 'Web Dev',
      techStack: ['React', 'JavaScript', 'CSS', 'Responsive Design', 'SEO'],
      image: 'assets/machinery .png',
      achievements: [
        'Developed and deployed full-featured company website using React.',
        'Implemented responsive design ensuring optimal viewing across all devices.',
        'Optimized SEO resulting in 40% increase in organic traffic.'
      ]
    },
    {
      title: 'Virtual Try-On AI for Fashion E-Commerce',
      description: 'Implemented cutting-edge computer vision solution enabling real-time virtual clothing visualization for mobile shopping.',
      category: 'AI/ML',
      techStack: ['PyTorch', 'OOTDiffusion', 'Computer Vision', 'Mobile Integration', 'Deep Learning'],
      image: 'assets/try-on.jpg',
      github: 'https://github.com',
      achievements: [
        'Deployed OOTDiffusion model for virtual try-on feature as part of IEEE technical challenges.',
        'Integrated solution into mobile application enabling real-time clothing visualization.',
        'Achieved 85% user engagement rate with the virtual try-on feature.'
      ]
    },
    {
      title: 'Restaurant Stock Management System',
      description: 'Developed comprehensive inventory management solution automating stock tracking and supplier management for restaurants.',
      category: 'Desktop',
      techStack: ['Java', 'JavaFX', 'MySQL', 'Inventory Management', 'Reporting'],
      image: 'assets/stock.jpg',
      github: 'https://github.com',
      achievements: [
        'Built full-stack inventory system using JavaFX, Java, and MySQL.',
        'Implemented automated stock alerts reducing waste by 30%.',
        'Designed supplier management module streamlining procurement processes.'
      ]
    },
    {
      title: 'Grocery Delivery Mobile Application',
      description: 'Created user-centric mobile app for grocery ordering featuring seamless authentication and intuitive shopping experience.',
      category: 'Mobile',
      techStack: ['Android', 'Java', 'Material UI', 'SQLite', 'REST API'],
      image: 'assets/grocery.jpg',
      achievements: [
        'Developed Android grocery delivery app with Java and Material Design principles.',
        'Implemented secure user authentication and session management.',
        'Designed intuitive UI achieving 4.5+ rating in user testing.'
      ]
    },
    {
      title: 'Comprehensive School Management System',
      description: 'Engineered all-in-one educational platform managing student records, schedules, and library operations efficiently.',
      category: 'Desktop',
      techStack: ['Python', 'Tkinter', 'MySQL', 'Education Software', 'Database Design'],
      image: 'assets/school.jpg',
      achievements: [
        'Developed comprehensive school management system using Python, Tkinter, and MySQL.',
        'Integrated modules for calendar, class, and library management.',
        'Streamlined administrative tasks reducing manual workload by 50%.'
      ]
    }
  ];

  get filteredProjects() {
    return this.currentFilter === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.currentFilter);
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }
} 