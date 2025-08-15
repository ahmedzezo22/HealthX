import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { id: 1, title: 'AI-Powered Diagnosis System', team: 'Team Alpha', track: 'AI in Healthcare', status: 'in-progress', progress: 75 },
    { id: 2, title: 'Smart Learning Platform', team: 'Team Beta', track: 'Smart Medical Education', status: 'completed', progress: 100 },
    { id: 3, title: 'Community Health App', team: 'Team Gamma', track: 'Community Health', status: 'planning', progress: 25 },
    { id: 4, title: 'Mental Health Tracker', team: 'Team Delta', track: 'Digital Mental Health', status: 'in-progress', progress: 60 }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-progress';
      case 'planning': return 'status-planning';
      default: return 'status-default';
    }
  }

  getProgressColor(progress: number): string {
    if (progress >= 80) return '#10b981';
    if (progress >= 50) return '#f59e0b';
    return '#ef4444';
  }
}
