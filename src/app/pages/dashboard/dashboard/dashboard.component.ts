import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardStats = {
    totalParticipants: 1250,
    activeProjects: 45,
    completedChallenges: 23,
    totalPrizes: 15000
  };

  recentActivities = [
    { type: 'registration', message: 'New participant registered', time: '2 hours ago' },
    { type: 'submission', message: 'Project submission received', time: '4 hours ago' },
    { type: 'review', message: 'Project review completed', time: '6 hours ago' },
    { type: 'winner', message: 'Challenge winner announced', time: '1 day ago' }
  ];

  quickActions = [
    { title: 'View Participants', icon: '👥', route: '/dashboard/participants' },
    { title: 'Review Projects', icon: '📋', route: '/dashboard/projects' },
    { title: 'Manage Challenges', icon: '🏆', route: '/dashboard/challenges' },
    { title: 'Analytics', icon: '📊', route: '/dashboard/analytics' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
