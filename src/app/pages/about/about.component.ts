import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  features = [
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'Build cutting-edge HPC solutions that solve real-world problems and push technological boundaries.'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Work with brilliant minds from diverse backgrounds to create something extraordinary together.'
    },
    {
      icon: '🏆',
      title: 'Amazing Prizes',
      description: 'Compete for a $50,000 prize pool with rewards for innovation, technical excellence, and impact.'
    },
    {
      icon: '📚',
      title: 'Learning Experience',
      description: 'Learn from industry experts, attend workshops, and gain hands-on experience with HPC technologies.'
    },
    {
      icon: '🌐',
      title: 'Global Network',
      description: 'Connect with professionals, researchers, and students from around the world in the HPC community.'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Access state-of-the-art computing resources and cloud platforms for your hackathon projects.'
    }
  ];
}