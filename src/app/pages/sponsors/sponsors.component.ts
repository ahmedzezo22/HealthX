import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sponsor {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
  website?: string;
}

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  sponsors: Sponsor[] = [
    {
      name: 'TechCorp Global',
      logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      tier: 'platinum',
      description: 'Leading cloud computing and HPC solutions provider with cutting-edge infrastructure.',
      website: 'https://techcorp.com'
    },
    {
      name: 'CloudTech Solutions',
      logo: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg',
      tier: 'gold',
      description: 'Innovative cloud platform enabling scalable high-performance computing applications.',
      website: 'https://cloudtech.com'
    },
    {
      name: 'DataFlow Systems',
      logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
      tier: 'gold',
      description: 'Advanced data processing and analytics platform for scientific computing.',
      website: 'https://dataflow.com'
    },
    {
      name: 'AI Innovations',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      tier: 'silver',
      description: 'Machine learning and artificial intelligence solutions for enterprise applications.',
      website: 'https://ai-innovations.com'
    },
    {
      name: 'Quantum Labs',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tier: 'silver',
      description: 'Pioneering quantum computing research and development for next-generation applications.',
      website: 'https://quantumlabs.com'
    },
    {
      name: 'DevTools Pro',
      logo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg',
      tier: 'bronze',
      description: 'Professional development tools and IDEs for high-performance computing developers.',
      website: 'https://devtools.com'
    }
  ];

  getTierTitle(tier: string): string {
    const titles = {
      'platinum': 'Platinum Sponsor',
      'gold': 'Gold Sponsors',
      'silver': 'Silver Sponsors',
      'bronze': 'Bronze Sponsors'
    };
    return titles[tier as keyof typeof titles] || tier;
  }

  getTierClass(tier: string): string {
    const classes = {
      'platinum': 'from-gray-200 to-gray-400',
      'gold': 'from-yellow-300 to-yellow-500',
      'silver': 'from-gray-300 to-gray-500',
      'bronze': 'from-orange-300 to-orange-500'
    };
    return classes[tier as keyof typeof classes] || classes.bronze;
  }

  getSponsorsByTier(tier: string): Sponsor[] {
    return this.sponsors.filter(sponsor => sponsor.tier === tier);
  }

  getUniqueSponsorsLength(): number {
    return this.sponsors.length;
  }
}