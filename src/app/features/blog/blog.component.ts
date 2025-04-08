import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articles: Article[] = [
    {
      title: 'Implementing Real-time Object Detection with YOLO v8',
      summary: 'A step-by-step guide to implementing YOLO v8 for real-time object detection in computer vision applications.',
      date: 'March 15, 2023',
      category: 'Computer Vision',
      image: 'https://placeholder.co/800x600',
      link: '#'
    },
    {
      title: 'Building Scalable Data Pipelines with Apache Airflow',
      summary: 'Learn how to design and implement scalable ETL workflows using Apache Airflow for data processing.',
      date: 'February 28, 2023',
      category: 'Data Engineering',
      image: 'https://placeholder.co/800x600',
      link: '#'
    },
    {
      title: 'Optimizing Angular Applications for Performance',
      summary: 'Best practices and techniques for improving the performance of your Angular web applications.',
      date: 'January 20, 2023',
      category: 'Web Development',
      image: 'https://placeholder.co/800x600',
      link: '#'
    },
    {
      title: 'Introduction to Transformer Models in NLP',
      summary: 'Understanding the architecture and applications of transformer models in natural language processing.',
      date: 'December 10, 2022',
      category: 'NLP',
      image: 'https://placeholder.co/800x600',
      link: '#'
    },
    {
      title: 'Docker Containerization for Machine Learning Projects',
      summary: 'A practical guide to containerizing your machine learning applications with Docker for deployment.',
      date: 'November 5, 2022',
      category: 'DevOps',
      image: 'https://placeholder.co/800x600',
      link: '#'
    },
    {
      title: 'Implementing CI/CD for Data Science Projects',
      summary: 'How to set up continuous integration and deployment pipelines for data science applications.',
      date: 'October 18, 2022',
      category: 'DevOps',
      image: 'https://placeholder.co/800x600',
      link: '#'
    }
  ];
} 