import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'HPC Sprint Hackathon';
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBodyClass();
      // Initialize animations after route change
      setTimeout(() => {
        this.initializeAnimations();
      }, 100);
    });
    
    // Initial check
    this.updateBodyClass();
    
    // Initialize animations
    this.initializeAnimations();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.animationService.cleanup();
  }

  get isDashboardRoute(): boolean {
    return this.router.url.startsWith('/dashboard');
  }

  private updateBodyClass() {
    if (this.isDashboardRoute) {
      document.body.classList.add('dashboard-route');
    } else {
      document.body.classList.remove('dashboard-route');
    }
  }

  private initializeAnimations() {
    if (!this.isDashboardRoute) {
      // Only initialize animations for main website, not dashboard
      this.animationService.initScrollAnimations();
      this.animationService.addAnimationClasses();
      this.animationService.triggerEntranceAnimations();
      this.animationService.addFloatingAnimations();
      this.animationService.addPulseAnimations();
    }
  }
}