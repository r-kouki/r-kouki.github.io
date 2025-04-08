import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  impact?: string;
}

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent {
  leadershipRoles: LeadershipRole[] = [
    {
      title: 'Member',
      organization: 'IEEE EPS Student Branch Tunisia',
      period: '2023 - Present',
      description: 'Active member of the IEEE Electron Packaging Society student branch, participating in technical projects and competitions.',
      skills: ['Technical Projects', 'Team Collaboration', 'Competition', 'Engineering'],
      impact: 'Ranked 2nd in the IEEE Xtreme Hub Competition with team members.'
    },
    {
      title: 'Event Coordinator & Founding Member',
      organization: 'IT Lab, Paris Dauphine University Tunis',
      period: '2022 - 2023',
      description: 'As a founding member of the university IT lab, took on the responsibility of event coordination and workshop facilitation.',
      skills: ['Event Management', 'Workshop Facilitation', 'Leadership', 'Organization'],
      impact: 'Led event management efforts and facilitated tech workshops for students to enhance technical skills and knowledge sharing.'
    },
    {
      title: 'Member',
      organization: 'ACM Membership Tunisia',
      period: '2021 - Present',
      description: 'Active member of the Association for Computing Machinery (ACM) chapter in Tunisia, focused on advancing computing as a science and profession.',
      skills: ['Competitive Programming', 'Algorithm Development', 'Problem Solving', 'Technical Challenges'],
      impact: 'Participated in numerous competitive programming contests and algorithmic challenges to enhance problem-solving skills.'
    }
  ];
} 