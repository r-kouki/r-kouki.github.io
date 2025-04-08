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
  filters = ['All', 'AI/ML', 'Web Dev', 'Mobile', 'Desktop'];
  currentFilter = 'All';

  projects: Project[] = [
    {
      title: 'PFA - Big Data & Machine Learning Project',
      description: 'Advanced data processing and predictive analysis using big data technologies.',
      category: 'AI/ML',
      techStack: ['Hadoop', 'Apache Spark', 'Python', 'Machine Learning'],
      image: 'assets/bigdata.jpg',
      github: 'https://github.com',
      status: 'In Progress',
      achievements: [
        'Implemented Hadoop for large-scale data cleaning and processing.',
        'Developed a machine learning model using Apache Spark for predictive analysis.'
      ]
    },
    {
      title: 'Water Footprint Reduction Advisory Website',
      description: 'Interactive platform for sustainable water usage with AI-powered recommendations.',
      category: 'Web Dev',
      techStack: ['Angular', 'TypeScript', 'LLM', 'Node.js'],
      image: 'assets/water.avif',
      achievements: [
        'Built an Angular-based advisory website for sustainable water usage.',
        'Integrated an LLM chatbot for personalized environmental advice.'
      ]
    },
    {
      title: 'React Website for Industrial Machinery Company',
      description: 'Company website showcasing industrial machinery products and services.',
      category: 'Web Dev',
      techStack: ['React', 'JavaScript', 'CSS', 'Hosting'],
      image: 'assets/machinery .png',
      achievements: [
        'Designed, developed, and hosted a company website using React.'
      ]
    },
    {
      title: 'Virtual Try-On Feature for Zen Clothing Brand',
      description: 'Advanced computer vision solution for virtual clothing visualization.',
      category: 'AI/ML',
      techStack: ['PyTorch', 'OOTDiffusion', 'Computer Vision', 'Mobile Integration'],
      image: 'assets/try-on.jpg',
      github: 'https://github.com',
      achievements: [
        'Implemented a virtual try-on feature using the OOTDiffusion model as part of IEEE challenges.',
        'Integrated the feature into Zen\'s mobile app, enabling users to visualize clothing in real-time.'
      ]
    },
    {
      title: 'Stock Management System for Restaurants',
      description: 'Comprehensive inventory solution for restaurant operations.',
      category: 'Desktop',
      techStack: ['Java', 'JavaFX', 'MySQL', 'Inventory Management'],
      image: 'assets/stock.jpg',
      github: 'https://github.com',
      achievements: [
        'Developed a stock management system using JavaFX, Java, and MySQL.',
        'Features include inventory tracking, supplier management, and automated stock alerts.'
      ]
    },
    {
      title: 'Grocery Delivery App',
      description: 'Mobile application for ordering groceries with user-friendly interface.',
      category: 'Mobile',
      techStack: ['Android', 'Java', 'Material UI', 'SQLite'],
      image: 'assets/grocery.jpg',
      achievements: [
        'Developed an Android grocery delivery application using Java and Material UI.',
        'Implemented user authentication and a seamless UI/UX.'
      ]
    },
    {
      title: 'School Management System',
      description: 'All-in-one solution for educational institution management.',
      category: 'Desktop',
      techStack: ['Python', 'Tkinter', 'MySQL', 'Education Software'],
      image: 'assets/school.jpg',
      achievements: [
        'Developed a comprehensive school management system using Python, Tkinter, and MySQL.',
        'Features include student calendar management, class management, and a library module.'
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