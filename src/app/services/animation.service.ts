import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private animationTriggered = new BehaviorSubject<boolean>(false);
  private observer: IntersectionObserver | null = null;
  private initialized = false;

  constructor(private ngZone: NgZone) {}

  /**
   * Initialize scroll-triggered animations
   */
  initScrollAnimations(): void {
    if (this.initialized) return;
    
    this.ngZone.runOutsideAngular(() => {
      // Create intersection observer for scroll animations
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.triggerAnimation(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      this.initialized = true;
    });
  }

  /**
   * Observe elements that need scroll animations
   */
  private observeAnimationElements(): void {
    if (!this.observer) return;
    
    // Wait for DOM to be ready
    setTimeout(() => {
      const elements = document.querySelectorAll('section, .animate-on-scroll, .feature-card, .stat-item, .testimonial-card, .scroll-trigger');
      elements.forEach(element => {
        this.observer?.observe(element);
      });
    }, 100);
  }

  /**
   * Trigger animation on a specific element
   */
  private triggerAnimation(element: Element): void {
    this.ngZone.run(() => {
      if (element.classList.contains('animate-on-scroll')) {
        element.classList.add('animated');
      } else if (element.classList.contains('feature-card') || 
                 element.classList.contains('stat-item') || 
                 element.classList.contains('testimonial-card')) {
        element.classList.add('animated');
      } else if (element.classList.contains('scroll-trigger')) {
        element.classList.add('triggered');
      } else {
        // For sections, add entrance animations
        this.addSectionEntranceAnimation(element);
      }
    });
  }

  /**
   * Add entrance animation to sections
   */
  private addSectionEntranceAnimation(element: Element): void {
    if (element.tagName === 'SECTION' || element.classList.contains('section')) {
      element.classList.add('section-animated');
      
      // Add staggered animations to children
      const children = element.querySelectorAll('h1, h2, h3, p, img, .card, .btn');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('element-animated');
        }, index * 100);
      });
    }
  }

  /**
   * Add animation classes to elements
   */
  addAnimationClasses(): void {    
    // Wait for DOM to be ready
    setTimeout(() => {
      this.addHeroAnimations();
      this.addSectionAnimations();
      this.addInteractiveAnimations();
      this.observeAnimationElements();
    }, 200);
  }

  /**
   * Add hero section animations
   */
  private addHeroAnimations(): void {
    const heroSection = document.querySelector('app-hero, .hero-section, .hero');
    if (heroSection) {
      const title = heroSection.querySelector('h1, .hero-title');
      const subtitle = heroSection.querySelector('p, .hero-subtitle');
      const cta = heroSection.querySelector('.btn-primary, .btn-secondary, button');
      const illustration = heroSection.querySelector('img, .hero-illustration');

      if (title) {
        title.classList.add('hero-title', 'animate-on-scroll');
        setTimeout(() => title.classList.add('animated'), 100);
      }
      if (subtitle) {
        subtitle.classList.add('hero-subtitle', 'animate-on-scroll');
        setTimeout(() => subtitle.classList.add('animated'), 300);
      }
      if (cta) {
        cta.classList.add('hero-cta', 'animate-on-scroll');
        setTimeout(() => cta.classList.add('animated'), 500);
      }
      if (illustration) {
        illustration.classList.add('hero-illustration', 'animate-on-scroll');
        setTimeout(() => illustration.classList.add('animated'), 200);
      }
    } else {
    }
  }

  /**
   * Add section animations
   */
  private addSectionAnimations(): void {
    const sections = document.querySelectorAll('section, app-about, app-vision, app-audience, app-identity, app-pillars, app-tracks, app-participate, app-impact, app-awards, app-registration, app-faq, app-contact');
    
    sections.forEach((section, index) => {
      
      // Add animation classes based on section type
      if (section.tagName === 'APP-ABOUT' || section.classList.contains('about')) {
        section.classList.add('about-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'about-content', 'about-image');
      } else if (section.tagName === 'APP-VISION' || section.classList.contains('vision')) {
        section.classList.add('vision-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'vision-content', 'vision-image');
      } else if (section.tagName === 'APP-AUDIENCE' || section.classList.contains('audience')) {
        section.classList.add('audience-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'audience-content', 'audience-image');
      } else if (section.tagName === 'APP-IDENTITY' || section.classList.contains('identity')) {
        section.classList.add('identity-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'identity-content', 'identity-image');
      } else if (section.tagName === 'APP-PILLARS' || section.classList.contains('pillars')) {
        section.classList.add('pillars-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'pillars-content', 'pillars-image');
      } else if (section.tagName === 'APP-TRACKS' || section.classList.contains('tracks')) {
        section.classList.add('tracks-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'tracks-content', 'tracks-image');
      } else if (section.tagName === 'APP-PARTICIPATE' || section.classList.contains('participate')) {
        section.classList.add('participate-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'participate-content', 'participate-image');
      } else if (section.tagName === 'APP-IMPACT' || section.classList.contains('impact')) {
        section.classList.add('impact-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'impact-content', 'impact-image');
      } else if (section.tagName === 'APP-AWARDS' || section.classList.contains('awards')) {
        section.classList.add('awards-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'awards-content', 'awards-image');
      } else if (section.tagName === 'APP-REGISTRATION' || section.classList.contains('registration')) {
        section.classList.add('registration-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'registration-content', 'registration-image');
      } else if (section.tagName === 'APP-FAQ' || section.classList.contains('faq')) {
        section.classList.add('faq-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'faq-content', 'faq-image');
      } else if (section.tagName === 'APP-CONTACT' || section.classList.contains('contact')) {
        section.classList.add('contact-section', 'animate-on-scroll');
        this.addContentAnimations(section, 'contact-content', 'contact-image');
      } else {
        // Generic section
        section.classList.add('generic-section', 'animate-on-scroll');
      }
    });
  }

  /**
   * Add content animations to sections
   */
  private addContentAnimations(section: Element, contentClass: string, imageClass: string): void {
    const content = section.querySelector('.content, .section-content, .text-content, h1, h2, h3, p');
    const image = section.querySelector('img, .image, .section-image');
    
    if (content) {
      content.classList.add(contentClass, 'animate-on-scroll');
      setTimeout(() => content.classList.add('animated'), 200);
    }
    if (image) {
      image.classList.add(imageClass, 'animate-on-scroll');
      setTimeout(() => image.classList.add('animated'), 400);
    }
  }

  /**
   * Add interactive animations
   */
  private addInteractiveAnimations(): void {
    // Add hover animations to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, button');
    buttons.forEach(button => {
      button.classList.add('hover-lift', 'hover-glow');
    });

    // Add hover animations to cards
    const cards = document.querySelectorAll('.card, .feature-card, .service-card, .section-card');
    cards.forEach(card => {
      card.classList.add('hover-lift', 'hover-glow');
    });

    // Add hover animations to images
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.classList.add('image-hover');
    });

    // Add navigation animations
    const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
    navLinks.forEach(link => {
      link.classList.add('nav-link');
    });
  }

  /**
   * Trigger entrance animations
   */
  triggerEntranceAnimations(): void {
    // Add entrance animations to sections
    const sections = document.querySelectorAll('section, app-about, app-vision, app-audience, app-identity, app-pillars, app-tracks, app-participate, app-impact, app-awards, app-registration, app-faq, app-contact');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('section-entrance');
      }, index * 200);
    });

    // Add footer animation
    const footer = document.querySelector('footer, .footer, app-footer');
    if (footer) footer.classList.add('footer');
  }

  /**
   * Add floating animations to decorative elements
   */
  addFloatingAnimations(): void {
    const floatingElements = document.querySelectorAll('.floating, .decoration, .icon, .emoji');
    floatingElements.forEach((element, index) => {
      element.classList.add('animate-float');
      // Add different delays for staggered effect
      (element as HTMLElement).style.animationDelay = `${index * 0.5}s`;
    });
  }

  /**
   * Add pulse animations to important elements
   */
  addPulseAnimations(): void {
    const pulseElements = document.querySelectorAll('.cta, .important, .highlight, .btn-primary');
    pulseElements.forEach(element => {
      element.classList.add('animate-pulse');
    });
  }

  /**
   * Add shimmer effect to loading states
   */
  addShimmerEffect(element: Element): void {
    element.classList.add('animate-shimmer');
  }

  /**
   * Remove shimmer effect
   */
  removeShimmerEffect(element: Element): void {
    element.classList.remove('animate-shimmer');
  }

  /**
   * Add rotation animation
   */
  addRotationAnimation(element: Element): void {
    element.classList.add('animate-rotate');
  }

  /**
   * Clean up animations
   */
  cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.initialized = false;
  }

  /**
   * Get animation state
   */
  getAnimationState() {
    return this.animationTriggered.asObservable();
  }
}
