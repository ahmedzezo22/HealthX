import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section id="audience" class="audience-section" data-reveal>
    <div class="audience-header">
      <h2 class="audience-title">{{ 'AUDIENCE.TITLE' | translate }}</h2>
    </div>

    <div class="container audience-grid stagger">
      <!-- Right card -->
      <article class="aud-card  tilt" data-reveal="slide-right">
        <div class="aud-circle"></div>
        <h3 class="aud-card-title">{{ 'AUDIENCE.CARD1_TITLE' | translate }}</h3>
        <p>
          {{ 'AUDIENCE.CARD1_DESC' | translate }}
        </p>
      </article>

      <!-- Center card -->
      <article class="aud-card  tilt" data-reveal="fade-up">
        <div class="aud-circle"></div>
        <h3 class="aud-card-title">{{ 'AUDIENCE.CARD2_TITLE' | translate }}</h3>
        <p>
          {{ 'AUDIENCE.CARD2_DESC' | translate }}
        </p>
      </article>

      <!-- Left card -->
      <article class="aud-card tilt" data-reveal="slide-left">
        <div class="aud-circle"></div>
        <h3 class="aud-card-title">{{ 'AUDIENCE.CARD3_TITLE' | translate }}</h3>
        <p>
          {{ 'AUDIENCE.CARD3_DESC' | translate }}
        </p>
      </article>
    </div>
  </section>
  `,
  styles: [`
    .audience-section{padding:0 0 70px 0;background:#eef2f7}
    .audience-header{background:linear-gradient(135deg,#15336e,#2f5fb3);color:#fff;text-align:center;padding:34px 16px 46px;position:relative;border-bottom:1px solid #d7e2f3;box-shadow:0 6px 18px rgba(0,0,0,.08)}
    .audience-header::before,.audience-header::after{content:'';position:absolute;opacity:.25;background:#fff;clip-path:polygon(0 0,100% 50%,0 100%)}
    .audience-header::before{width:180px;height:180px;top:-40px;right:18%;transform:rotate(20deg)}
    .audience-header::after{width:130px;height:130px;bottom:-20px;left:16%;transform:rotate(-25deg)}
    .audience-title{margin:0;font-weight:900;font-size:42px;letter-spacing:.5px}

    .audience-grid{max-width:1100px;margin:56px auto 0;display:grid;grid-template-columns:repeat(3,1fr);gap:22px;position:relative;z-index:1}
    .aud-card{position:relative;background:#fff;border-radius:12px;padding:56px 18px 24px 18px;box-shadow:0 10px 22px rgba(0,0,0,.08);border:1px solid #dbe7ff}
    .aud-card-center{transform:translateY(-20px)}
    .aud-card-title{font-size:20px;font-weight:800;color:#0b1f3f;margin:0 0 8px 0;text-align:center}
    .aud-card p{color:#334155;line-height:1.9;margin:0;text-align:center}

    .aud-circle{position:absolute;inset:auto;top:-64px;left:50%;transform:translateX(-50%);width:120px;height:120px;border-radius:50%;background:linear-gradient(145deg,#e6eefc,#c7d9ff);border:6px solid #f0f5ff;box-shadow:0 10px 20px rgba(0,0,0,.12);z-index:2}
    .aud-circle.center{width:160px;height:160px;top:-82px}

    @media(max-width:1024px){.aud-card-center{transform:none}}
    @media(max-width:900px){.audience-grid{grid-template-columns:1fr}.aud-circle{top:-58px}.aud-circle.center{top:-72px}}
  `]
})
export class AudienceComponent {}


