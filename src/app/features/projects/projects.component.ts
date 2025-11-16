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
      title: 'Diabetes Risk Prediction Model',
      description: 'Deployed interactive ML model for diabetes risk prediction with comprehensive data preprocessing and model evaluation.',
      category: 'AI/ML',
      techStack: ['Python', 'Streamlit', 'Spark', 'Hadoop', 'XGBoost', 'Machine Learning', 'Feature Selection'],
      image: 'assets/diabetespred.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Processed CDC BRFSS dataset using Spark and Hadoop for distributed cleaning.',
        'Trained calibrated XGBoost model achieving 85% accuracy.',
        'Deployed Streamlit app delivering personalized diabetes risk insights.'
      ]
    },
    {
      title: 'MLOps Automation Pipeline',
      description: 'Developed end-to-end MLOps pipeline automating model retraining, versioning, and deployment using industry-standard tools.',
      category: 'Automation',
      techStack: ['MLflow', 'DVC', 'Docker', 'Podman', 'Kubernetes', 'GitLab CI/CD', 'Azure', 'Python', 'FastAPI'],
      image: 'assets/mlops.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Automated ML versioning, experiment tracking, and reproducible pipelines with DVC and S3/MinIO.',
        'Containerized models with Podman/Docker and deployed using GitLab CI/CD.',
        'Orchestrated workloads on Kubernetes for scalable inference services.'
      ]
    },
    {
      title: 'Multi-Agent Debating Simulation Game',
      description: 'Designed and built a gamified multi-agent AI system where intelligent agents engage in structured debates using advanced reasoning.',
      category: 'AI/ML',
      techStack: ['CrewAI', 'LangGraph', 'Ollama', 'Python', 'TTS', 'State Management'],
      image: 'assets/debate.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Built interactive multi-agent debating system with AI-vs-AI and Human-vs-AI modes.',
        'Added trending topic generation, expert personas, scoring system, and leaderboard.',
        'Integrated voice input and TTS for natural game-like debate interactions.'
      ]
    },
    {
      title: 'Inferno Gym Management Portal',
      description: 'Comprehensive production-ready gym management system with separate admin and member portals featuring real-time booking, automated payments, and priority-based auto-booking.',
      category: 'Web Dev',
      techStack: ['FastAPI', 'React', 'PostgreSQL', 'Supabase', 'Material-UI', 'JWT Auth', 'Async Python'],
      image: 'assets/gym.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Built full-stack gym platform for memberships, booking, attendance tracking, and payments.',
        'Developed Supabase schema with RLS, authentication, real-time updates, and admin dashboards.',
        'Deployed REST APIs and automation used daily by a local gym.'
      ]
    },
    {
      title: 'RAG Knowledge Bot with Automation',
      description: 'Built context-aware chatbot leveraging RAG (Retrieval Augmented Generation) with automated workflow orchestration.',
      category: 'Automation',
      techStack: ['LangChain', 'FAISS', 'n8n', 'Python', 'Vector DB', 'RAG', 'FastAPI'],
      image: 'assets/rag.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Developed RAG chatbot with FAISS retrieval and automated document ingestion.',
        'Used n8n for scheduled syncing, preprocessing, and workflow automation.',
        'Achieved 85% answer accuracy on domain-specific queries.'
      ]
    },
    {
      title: 'Real-Time Dating App with GraphQL, Kafka & Web Services',
      description: 'Engineered high-performance matchmaking platform with real-time messaging and intelligent recommendation engine.',
      category: 'Web Dev',
      techStack: ['GraphQL', 'Apache Kafka', 'REST APIs', 'Web Services', 'Node.js', 'React', 'MongoDB', 'WebSockets'],
      image: 'assets/dating.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Designed GraphQL API supporting real-time subscriptions for instant messaging.',
        'Implemented event-driven architecture using Apache Kafka for scalable matchmaking.',
        'Integrated asynchronous event-driven communication for user interactions via Web Services.',
        'Built ML-based recommendation system analyzing user preferences and behavior patterns.'
      ]
    },
    {
      title: 'R Data Analytics & Visualization Project',
      description: 'Conducted comprehensive statistical analysis and created publication-ready visualizations using R for business intelligence.',
      category: 'AI/ML',
      techStack: ['R', 'tidyverse', 'ggplot2', 'dplyr', 'Statistical Analysis', 'Power BI'],
      image: 'assets/rdashboard.png',
      github: 'https://github.com',
      status: 'Recent',
      achievements: [
        'Performed advanced statistical analysis on datasets with 100K+ records using tidyverse.',
        'Created interactive dashboards and custom visualizations with ggplot2.',
        'Developed predictive models identifying key business trends with 92% accuracy.'
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
        'Implemented virtual try-on pipeline generating realistic clothing previews using OOTDiffusion.',
        'Integrated the feature into a mobile app for real-time visualization.'
      ]
    },
    {
      title: 'C# Stock Management System for Restaurants',
      description: 'Developed comprehensive inventory management solution automating stock tracking and supplier management for restaurants.',
      category: 'Desktop',
      techStack: ['C#', '.NET', 'SQL Server', 'Inventory Management', 'Real-time Reporting', 'ERP'],
      image: 'assets/stockmage.png',
      github: 'https://github.com',
      achievements: [
        'Built desktop ERP system for restaurant stock tracking and supplier management in .NET.',
        'Added automated alerts for low inventory and real-time reporting.',
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
      image: 'assets/school.png',
      achievements: [
        'Developed comprehensive school management system using Python, Tkinter, and MySQL.',
        'Integrated modules for calendar, class, and library management.',
        'Streamlined administrative tasks reducing manual workload by 50%.'
      ]
    },
    {
      title: 'MEAN Car Sales Website',
      description: 'Developed a car listing and management web application for sales analytics with interactive UI.',
      category: 'Web Dev',
      techStack: ['MongoDB', 'Express', 'Angular', 'Node.js', 'REST API', 'Authentication'],
      image: 'assets/car.png',
      github: 'https://github.com',
      achievements: [
        'Built full-stack car sales platform using MEAN stack architecture.',
        'Implemented vehicle listing management with advanced search and filters.',
        'Created sales analytics dashboard for tracking performance metrics.'
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