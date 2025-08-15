
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { TranslationService } from './app/services/translation.service';
import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslations,
      deps: [TranslationService],
      multi: true
    }
  ]
});

// Global IntersectionObserver to add 'is-revealed' when elements enter viewport
const initRevealObserver = () => {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal]')
    .forEach(el => observer.observe(el));
};

window.addEventListener('load', initRevealObserver);

// Lightweight hover tilt effect for elements with class 'tilt'
const initHoverTilt = () => {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.tilt'));
  const onMove = (el: HTMLElement, e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const maxRotate = 8; // deg
    el.style.setProperty('--tilt-rotate-x', `${-py * maxRotate}deg`);
    el.style.setProperty('--tilt-rotate-y', `${px * maxRotate}deg`);
  };
  const onLeave = (el: HTMLElement) => {
    el.style.setProperty('--tilt-rotate-x', '0deg');
    el.style.setProperty('--tilt-rotate-y', '0deg');
  };
  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => onMove(el, e as MouseEvent));
    el.addEventListener('mouseleave', () => onLeave(el));
  });
};


window.addEventListener('load', initHoverTilt);

function initTranslations(translationService: TranslationService) {
  return () => translationService.init();
}