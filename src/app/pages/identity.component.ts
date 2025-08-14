import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section id="identity" class="identity-section"  data-reveal>
    <div class="identity-grid">
      <!-- Left: logo and title -->
      <div class="identity-left" data-reveal="slide-right">
        <img src="assets/logo.png" alt="Inceptia" class="brand-logo"/>
        <h2 class="identity-title">{{ 'IDENTITY.TITLE' | translate }}</h2>
        <p class="identity-tag">{{ 'IDENTITY.LOGO_TAGLINE' | translate }}</p>
      </div>

      <!-- Right: stacked cards -->
      <div class="identity-right stagger">
        <article class="id-card tilt" data-reveal="fade-up">
          <div class="icon-box atom">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <circle cx="12" cy="12" r="2" stroke-width="2"/>
              <ellipse cx="12" cy="12" rx="9" ry="4.5" stroke-width="2"/>
              <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke-width="2" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke-width="2" transform="rotate(-60 12 12)"/>
            </svg>
          </div>
          <div class="id-content">
            <h3 class="id-heading">{{ 'IDENTITY.SYMBOL' | translate }}</h3>
            <p>
              {{ 'IDENTITY.SYMBOL_DESC' | translate }}
            </p>
          </div>
        </article>

        <article class="id-card tilt" data-reveal="fade-up">
          <div class="icon-box map">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 7l6-3 5 3 5-3v13l-5 3-5-3-6 3V7z"></path>
            </svg>
          </div>
          <div class="id-content">
            <h3 class="id-heading">{{ 'IDENTITY.ADDRESS' | translate }}</h3>
            <p>
              {{ 'IDENTITY.ADDRESS_DESC' | translate }}
            </p>
          </div>
        </article>

        <article class="id-card tilt" data-reveal="fade-up">
          <div class="icon-box bars">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 20h3V9H5v11zm5 0h3V4h-3v16zm5 0h3v-7h-3v7z"></path>
            </svg>
          </div>
          <div class="id-content">
            <h3 class="id-heading">{{ 'IDENTITY.COLORS' | translate }}</h3>
            <p>
              {{ 'IDENTITY.COLORS_DESC' | translate }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .identity-section{background:#f3f6fb;position:relative;overflow:hidden;padding:40px 0}
    .identity-section::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-45deg, rgba(49,76,121,.07) 0 18px, transparent 18px 36px);opacity:.6;pointer-events:none}
    .identity-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1.3fr;gap:24px;align-items:start;position:relative;z-index:1;padding:0 16px}
    .identity-left{text-align:right}
    .brand-logo{max-width:380px;width:100%;filter:drop-shadow(0 6px 20px rgba(0,0,0,.08))}
    .identity-title{font-size:40px;margin:14px 0 6px 0;color:#2f5fb3;font-weight:900}
    .identity-tag{color:#6b7280;margin:0}

    .identity-right{display:grid;gap:16px}
    .id-card{display:grid;grid-template-columns:84px 1fr;align-items:center;background:linear-gradient(135deg,#e7f0ff,#dbe7ff);border-radius:14px;padding:12px;border:1px solid #c9dcff;box-shadow:0 10px 20px rgba(0,0,0,.06)}
    .icon-box{width:84px;height:84px;border-radius:14px;background:#15336e;color:white;display:flex;align-items:center;justify-content:center}
    .icon-box svg{width:52px;height:52px}
    .id-content{padding:6px 10px}
    .id-heading{margin:0 0 6px 0;font-size:18px;color:#0b1f3f}
    .id-content p{margin:0;color:#1f2937;line-height:1.85}

    @media(max-width:1000px){
      .identity-grid{grid-template-columns:1fr}
      .identity-left{text-align:center}
      .brand-logo{max-width:300px}
    }
  `]
})
export class IdentityComponent {}


