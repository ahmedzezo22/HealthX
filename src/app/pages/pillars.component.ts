import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-pillars',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section id="pillars" class="pillars-section" dir="rtl" data-reveal>
    <div class="pillars-hero">
      <div class="hero-content" data-reveal="fade-up">
        <h2 class="title">{{ 'PILLARS.TITLE' | translate }}</h2>
        <p class="subtitle">
          {{ 'PILLARS.SUBTITLE' | translate }}
        </p>
      </div>
      <div class="hero-art" aria-hidden="true"></div>
    </div>

    <div class="pillars-grid stagger">
      <article class="pillar-card tilt" data-reveal="slide-right">
        <h3 class="pillar-title">{{ 'PILLARS.PILLAR1' | translate }}</h3>
        <div class="divider"></div>
        <p class="pillar-sub">{{ 'PILLARS.PILLAR1_DESC' | translate }}</p>
      </article>

      <article class="pillar-card tilt" data-reveal="fade-up">
        <h3 class="pillar-title">{{ 'PILLARS.PILLAR2' | translate }}</h3>
        <div class="divider"></div>
        <p class="pillar-sub">{{ 'PILLARS.PILLAR2_DESC' | translate }}</p>
      </article>

      <article class="pillar-card tilt" data-reveal="slide-left">
        <h3 class="pillar-title">{{ 'PILLARS.PILLAR3' | translate }}</h3>
        <div class="divider"></div>
        <p class="pillar-sub">{{ 'PILLARS.PILLAR3_DESC' | translate }}</p>
      </article>
    </div>
  </section>
  `,
  styles: [`
    .pillars-section{position:relative;background:#0a1f43;color:#fff;overflow:hidden}
    .pillars-hero{position:relative;display:grid;grid-template-columns:1.2fr .8fr;align-items:center;padding:48px 20px 24px;gap:12px;background:linear-gradient(135deg,#0d2a5c 0%, #143a7a 60%, #0d2a5c 100%)}
    .hero-content{max-width:820px;margin-inline:auto}
    .title{margin:0;font-size:42px;font-weight:900}
    .subtitle{margin:10px 0 0 0;opacity:.92;line-height:1.9}
    .hero-art{height:260px;background:radial-gradient(ellipse at center, rgba(255,255,255,.08), transparent 60%), url('../../assets/banner.jpg') center/cover no-repeat;border-radius:18px;filter:brightness(.95);box-shadow:inset 0 0 80px rgba(0,0,0,.35)}

    .pillars-grid{max-width:1150px;margin:0 auto;padding:28px 20px 60px;display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
    .pillar-card{background:rgba(255,255,255,.07);border:2px dashed rgba(255,255,255,.5);border-radius:22px;padding:18px 16px 20px;text-align:center;box-shadow:0 14px 26px rgba(0,0,0,.18)}
    .pillar-title{margin:0 0 10px 0;color:#fff;font-size:20px;font-weight:900}
    .divider{height:2px;background:linear-gradient(90deg,transparent,#9ae6b4,transparent);margin:8px auto;width:70%}
    .pillar-sub{margin:8px 0 0 0;color:#e6f0ff;opacity:.95}

    @media(max-width:992px){
      .pillars-hero{grid-template-columns:1fr}
      .hero-art{height:200px}
      .pillars-grid{grid-template-columns:1fr}
    }
  `]
})
export class PillarsComponent {}


