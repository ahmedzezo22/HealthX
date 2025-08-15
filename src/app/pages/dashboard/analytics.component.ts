import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  analyticsData = {
    totalRegistrations: 1250,
    activeParticipants: 980,
    completedProjects: 45,
    totalPrizes: 15000,
    trackDistribution: [
      { track: 'AI in Healthcare', count: 320, percentage: 32 },
      { track: 'Smart Medical Education', count: 280, percentage: 28 },
      { track: 'Community Health', count: 200, percentage: 20 },
      { track: 'Digital Mental Health', count: 200, percentage: 20 }
    ],
    monthlyRegistrations: [
      { month: 'Jan', count: 150 },
      { month: 'Feb', count: 220 },
      { month: 'Mar', count: 180 },
      { month: 'Apr', count: 300 },
      { month: 'May', count: 250 },
      { month: 'Jun', count: 150 }
    ]
  };

  getTrackColor(index: number): string {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
    return colors[index % colors.length];
  }
}
