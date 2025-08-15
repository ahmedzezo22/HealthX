import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  isSidebarOpen = true;
  currentLang = 'ar';
  isRTL = true;
  
  navigationItems = [
    { label: 'DASHBOARD.OVERVIEW', route: '/dashboard', icon: '📊' },
    { label: 'DASHBOARD.BANNER', route: '/dashboard/banner', icon: '🖼️' },
    { label: 'DASHBOARD.ABOUT', route: '/dashboard/about', icon: 'ℹ️' },
    { label: 'DASHBOARD.VISION', route: '/dashboard/vision', icon: '👁️' },
    { label: 'DASHBOARD.AUDIENCE', route: '/dashboard/audience', icon: '👥' },
    { label: 'DASHBOARD.IDENTITY', route: '/dashboard/identity', icon: '🆔' },
    { label: 'DASHBOARD.PILLARS', route: '/dashboard/pillars', icon: '🏛️' },
    { label: 'DASHBOARD.TRACKS', route: '/dashboard/tracks', icon: '🎯' },
    { label: 'DASHBOARD.PARTICIPATE', route: '/dashboard/participate', icon: '🚀' },
    { label: 'DASHBOARD.IMPACT', route: '/dashboard/impact', icon: '💥' },
    { label: 'DASHBOARD.AWARDS', route: '/dashboard/awards', icon: '🏆' },
    { label: 'DASHBOARD.FAQ', route: '/dashboard/faq', icon: '❓' },
    { label: 'DASHBOARD.CONTACT', route: '/dashboard/contact', icon: '📞' },
    { label: 'DASHBOARD.PARTICIPANTS', route: '/dashboard/participants', icon: '👥' },
    { label: 'DASHBOARD.PROJECTS', route: '/dashboard/projects', icon: '📋' },
    { label: 'DASHBOARD.CHALLENGES', route: '/dashboard/challenges', icon: '🏆' },
    { label: 'DASHBOARD.ANALYTICS', route: '/dashboard/analytics', icon: '📈' },
    { label: 'DASHBOARD.SETTINGS', route: '/dashboard/settings', icon: '⚙️' }
  ];

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.translationService.currentLang$.subscribe((lang:any) => {
      this.currentLang = lang;
      this.isRTL = lang === 'ar';
      this.updateDocumentDirection();
      // Reset sidebar state when language changes to prevent layout issues
      this.isSidebarOpen = true;
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // Force a reflow to ensure proper RTL/LTR positioning
    setTimeout(() => {
      this.updateDocumentDirection();
    }, 10);
  }

  setLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.translationService.setLanguage(newLang);
  }

  updateDocumentDirection() {
    document.documentElement.dir = this.isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
    
    // Update body class for additional RTL support
    if (this.isRTL) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  goToWebsite() {
    this.router.navigate(['/']);
  }

  logout() {
    // Add logout logic here
    console.log('Logout clicked');
  }
}
