import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  type: 'event' | 'workshop' | 'break' | 'presentation';
}

interface DaySchedule {
  date: string;
  day: string;
  events: ScheduleItem[];
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  schedule: DaySchedule[] = [
    {
      date: 'March 15, 2025',
      day: 'Day 1',
      events: [
        {
          time: '09:00',
          title: 'Registration & Welcome',
          description: 'Check-in, breakfast, and opening ceremony',
          type: 'event'
        },
        {
          time: '10:30',
          title: 'Keynote: Future of HPC',
          description: 'Industry expert presentation on HPC trends and innovations',
          type: 'presentation'
        },
        {
          time: '11:30',
          title: 'Team Formation',
          description: 'Meet other participants and form your dream team',
          type: 'event'
        },
        {
          time: '12:30',
          title: 'Lunch Break',
          description: 'Networking lunch with sponsors and mentors',
          type: 'break'
        },
        {
          time: '14:00',
          title: 'Hackathon Kickoff',
          description: 'Challenge announcement and coding begins!',
          type: 'event'
        },
        {
          time: '16:00',
          title: 'HPC Workshop',
          description: 'Introduction to parallel computing and distributed systems',
          type: 'workshop'
        },
        {
          time: '19:00',
          title: 'Dinner',
          description: 'Fuel up for the night coding session',
          type: 'break'
        }
      ]
    },
    {
      date: 'March 16, 2025',
      day: 'Day 2',
      events: [
        {
          time: '08:00',
          title: 'Breakfast',
          description: 'Start your day with energy',
          type: 'break'
        },
        {
          time: '10:00',
          title: 'Cloud Computing Workshop',
          description: 'Leveraging cloud resources for HPC applications',
          type: 'workshop'
        },
        {
          time: '12:00',
          title: 'Mentor Check-ins',
          description: 'Get guidance from industry experts',
          type: 'event'
        },
        {
          time: '13:00',
          title: 'Lunch',
          description: 'Midday refuel',
          type: 'break'
        },
        {
          time: '15:00',
          title: 'Tech Talks',
          description: 'Lightning talks on cutting-edge HPC technologies',
          type: 'presentation'
        },
        {
          time: '17:00',
          title: 'Sponsor Showcase',
          description: 'Learn about career opportunities and technologies',
          type: 'event'
        },
        {
          time: '19:00',
          title: 'Dinner & Entertainment',
          description: 'Relax and recharge with your fellow hackers',
          type: 'break'
        }
      ]
    },
    {
      date: 'March 17, 2025',
      day: 'Day 3',
      events: [
        {
          time: '08:00',
          title: 'Breakfast',
          description: 'Final day fuel',
          type: 'break'
        },
        {
          time: '10:00',
          title: 'Final Sprint',
          description: 'Last chance to perfect your solution',
          type: 'event'
        },
        {
          time: '14:00',
          title: 'Submission Deadline',
          description: 'All projects must be submitted',
          type: 'event'
        },
        {
          time: '15:00',
          title: 'Project Presentations',
          description: 'Teams present their solutions to judges',
          type: 'presentation'
        },
        {
          time: '17:30',
          title: 'Judging & Deliberation',
          description: 'Expert panel evaluates all submissions',
          type: 'event'
        },
        {
          time: '18:30',
          title: 'Awards Ceremony',
          description: 'Winner announcement and prize distribution',
          type: 'event'
        },
        {
          time: '19:30',
          title: 'Closing & Networking',
          description: 'Final celebration and future connections',
          type: 'event'
        }
      ]
    }
  ];

  selectedDay = 0;

  selectDay(index: number) {
    this.selectedDay = index;
  }

  getEventTypeClass(type: string): string {
    const classes = {
      'event': 'border-primary-500 bg-primary-50',
      'workshop': 'border-accent-500 bg-accent-50',
      'break': 'border-gray-400 bg-gray-50',
      'presentation': 'border-purple-500 bg-purple-50'
    };
    return classes[type as keyof typeof classes] || classes.event;
  }

  getEventTypeIcon(type: string): string {
    const icons = {
      'event': '🎯',
      'workshop': '🛠️',
      'break': '🍽️',
      'presentation': '🎤'
    };
    return icons[type as keyof typeof icons] || icons.event;
  }
}