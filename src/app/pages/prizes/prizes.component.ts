import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Prize {
  rank: string;
  amount: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

@Component({
  selector: 'app-prizes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent {
  prizes: Prize[] = [
    {
      rank: '1st',
      amount: '$25,000',
      title: 'Grand Prize Winner',
      description: 'The ultimate recognition for the most innovative and impactful HPC solution.',
      benefits: [
        'Cash prize of $25,000',
        '1-year cloud computing credits',
        'Mentorship program access',
        'Job interview opportunities',
        'Conference speaking invitation'
      ],
      icon: '👑'
    },
    {
      rank: '2nd',
      amount: '$15,000',
      title: 'Excellence Award',
      description: 'Outstanding achievement in technical excellence and innovation.',
      benefits: [
        'Cash prize of $15,000',
        '6-month cloud computing credits',
        'Mentorship program access',
        'Job interview opportunities',
        'Industry networking events'
      ],
      icon: '🥈'
    },
    {
      rank: '3rd',
      amount: '$10,000',
      title: 'Innovation Prize',
      description: 'Exceptional creativity and problem-solving approach.',
      benefits: [
        'Cash prize of $10,000',
        '3-month cloud computing credits',
        'Mentorship program access',
        'Job interview opportunities',
        'Tech conference tickets'
      ],
      icon: '🥉'
    }
  ];

  specialPrizes = [
    {
      title: 'Best Student Team',
      amount: '$5,000',
      description: 'Recognizing the most impressive solution from student participants.',
      icon: '🎓'
    },
    {
      title: 'Most Scalable Solution',
      amount: '$3,000',
      description: 'For the solution with the highest potential for real-world scaling.',
      icon: '📈'
    },
    {
      title: 'People\'s Choice',
      amount: '$2,000',
      description: 'Voted by all participants as the most interesting project.',
      icon: '❤️'
    },
    {
      title: 'Best Use of Cloud',
      amount: '$2,000',
      description: 'Outstanding utilization of cloud computing resources.',
      icon: '☁️'
    }
  ];
}