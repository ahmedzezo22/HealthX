import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section id="impact" class="impact-section" data-reveal>
    <div class="impact-header">
      <h2 class="title">{{ 'IMPACT.TITLE' | translate }}</h2>
    </div>

    <div class="impact-wrap">
      <div class="impact-grid">

        <!-- Step 1 -->
        <div class="impact-step" data-reveal="fade-up">
          <div class="counter">01</div>
          <div class="impact-text">
            <h3>{{ 'IMPACT.SECTION1_TITLE1' | translate }}</h3>
            <p>{{ 'IMPACT.SECTION1_DESC1' | translate }}</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="impact-step" data-reveal="fade-up">
          <div class="counter">02</div>
          <div class="impact-text">
            <h3>{{ 'IMPACT.SECTION1_TITLE2' | translate }}</h3>
            <p>{{ 'IMPACT.SECTION1_DESC2' | translate }}</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="impact-step" data-reveal="fade-up">
          <div class="counter">03</div>
          <div class="impact-text">
            <h3>{{ 'IMPACT.SECTION2_TITLE1' | translate }}</h3>
            <p>{{ 'IMPACT.SECTION2_DESC1' | translate }}</p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="impact-step" data-reveal="fade-up">
          <div class="counter">04</div>
          <div class="impact-text">
            <h3>{{ 'IMPACT.SECTION2_TITLE2' | translate }}</h3>
            <p>{{ 'IMPACT.SECTION2_DESC2' | translate }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  `,
  styles: [`
    .impact-section {
      background: #eef2f7;
      padding: 60px 0;
    }
    .impact-header {
      text-align: center;
      margin-bottom: 40px;
    }
    .title {
      font-size: 36px;
      font-weight: 900;
      color: #0b1f3f;
      margin: 0;
    }
    .impact-wrap {
      max-width: 1150px;
      margin: 0 auto;
      padding: 0 16px;
    }

    /* Grid layout for two per row */
    .impact-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    /* Step styling */
    .impact-step {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .impact-step:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    /* Number styling */
    .counter {
      flex-shrink: 0;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: linear-gradient(135deg, #2f5fb3, #15336e);
      color: #fff;
      font-weight: 900;
      font-size: 28px;
      box-shadow: 0 10px 22px rgba(0, 0, 0, .1);
    }

    /* Text styling */
    .impact-text h3 {
      margin: 0 0 8px 0;
      color: #0b1f3f;
      font-weight: 700;
      font-size: 20px;
    }
    .impact-text p {
      margin: 0;
      color: #334155;
      line-height: 1.7;
      font-size: 15px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .impact-grid {
        grid-template-columns: 1fr;
      }
      .impact-step {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `]
})
export class ImpactComponent {}
