import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section 
    id="impact" 
    class="impact-section" 
    data-reveal
  >
    <div class="impact-header">
      <h2 class="title">{{ 'IMPACT.TITLE' | translate }}</h2>
    </div>

    <div class="impact-wrap">
      <div class="impact-grid">
        <div class="impact-text">
          <h3>{{ 'IMPACT.SECTION1_TITLE1' | translate }}</h3>
          <p>{{ 'IMPACT.SECTION1_DESC1' | translate }}</p>

          <h3>{{ 'IMPACT.SECTION1_TITLE2' | translate }}</h3>
          <p>{{ 'IMPACT.SECTION1_DESC2' | translate }}</p>
        </div>

        <div class="impact-counters">
          <div class="counter">01</div>
          <div class="counter">02</div>
          <div class="counter">03</div>
          <div class="counter">04</div>
        </div>

        <div class="impact-text">
          <h3>{{ 'IMPACT.SECTION2_TITLE1' | translate }}</h3>
          <p>{{ 'IMPACT.SECTION2_DESC1' | translate }}</p>

          <h3>{{ 'IMPACT.SECTION2_TITLE2' | translate }}</h3>
          <p>{{ 'IMPACT.SECTION2_DESC2' | translate }}</p>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .impact-section{background:#eef2f7;padding:60px 0}
    .impact-header{text-align:center;margin-bottom:24px}
    .title{font-size:36px;font-weight:900;color:#0b1f3f;margin:0}
    .impact-wrap{max-width:1150px;margin:0 auto;padding:0 16px}
    .impact-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:24px;align-items:center}
    .impact-text h3{margin:0 0 8px 0;color:#0b1f3f}
    .impact-text p{margin:0 0 18px 0;color:#334155;line-height:1.9}
    .impact-counters{display:grid;grid-template-columns:repeat(2,110px);gap:14px}
    .counter{display:flex;align-items:center;justify-content:center;height:90px;border-radius:10px;background:linear-gradient(135deg,#2f5fb3,#15336e);color:#fff;font-weight:900;font-size:34px;box-shadow:0 10px 22px rgba(0,0,0,.1)}
    @media(max-width:900px){.impact-grid{grid-template-columns:1fr}.impact-counters{grid-template-columns:repeat(4,1fr)}}
  `]
})
export class ImpactComponent {
  constructor() {}
}
