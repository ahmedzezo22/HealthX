import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent {
  challenges = [
    { 
      id: 1, 
      title: 'AI-Powered Medical Diagnosis', 
      description: 'Develop an AI system that can assist doctors in diagnosing common diseases',
      track: 'AI in Healthcare',
      prize: 5000,
      participants: 45,
      deadline: '2025-03-15',
      status: 'active'
    },
    { 
      id: 2, 
      title: 'Smart Learning Platform', 
      description: 'Create an interactive learning platform for medical students',
      track: 'Smart Medical Education',
      prize: 3000,
      participants: 32,
      deadline: '2025-03-20',
      status: 'active'
    },
    { 
      id: 3, 
      title: 'Community Health Monitoring', 
      description: 'Build a system for monitoring community health indicators',
      track: 'Community Health',
      prize: 4000,
      participants: 28,
      deadline: '2025-03-10',
      status: 'completed'
    },
    { 
      id: 4, 
      title: 'Mental Health Tracker', 
      description: 'Develop an app for tracking and improving mental health',
      track: 'Digital Mental Health',
      prize: 3500,
      participants: 38,
      deadline: '2025-03-25',
      status: 'active'
    }
  ];

  getStatusClass(status: string): string {
    return status === 'active' ? 'status-active' : 'status-completed';
  }

  getDaysRemaining(deadline: string): number {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }
}
