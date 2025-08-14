
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-participate',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section id="participate" class="participate-section"  data-reveal>
      <div class="container">
        <h2 class="section-title">{{ 'PARTICIPATE.TITLE' | translate }}</h2>
        <div class="process-grid">
          <!-- Step 1: Announcement and Registration -->
          <div class="process-card" data-reveal="slide-right">
            <div class="icon-circle"><span class="text-number">01</span></div>
            <h3 class="card-title">{{ 'PARTICIPATE.STEP1_TITLE' | translate }}</h3>
            <p class="card-description">{{ 'PARTICIPATE.STEP1_DESC' | translate }}</p>
          </div>

          <!-- Step 2: Receiving Research Proposals -->
          <div class="process-card" data-reveal="slide-left">
            <div class="icon-circle"><span class="text-number">02</span></div>
            <h3 class="card-title">{{ 'PARTICIPATE.STEP2_TITLE' | translate }}</h3>
            <p class="card-description">{{ 'PARTICIPATE.STEP2_DESC' | translate }}</p>
          </div>

          <!-- Step 3: Initial Screening of Proposals -->
          <div class="process-card" data-reveal="slide-right">
            <div class="icon-circle"><span class="text-number">03</span></div>
            <h3 class="card-title">{{ 'PARTICIPATE.STEP3_TITLE' | translate }}</h3>
            <p class="card-description">{{ 'PARTICIPATE.STEP3_DESC' | translate }}</p>
          </div>

          <!-- Step 4: Evaluation and Selection of Winners -->
          <div class="process-card" data-reveal="slide-left">
            <div class="icon-circle"><span class="text-number">04</span></div>
            <h3 class="card-title">{{ 'PARTICIPATE.STEP4_TITLE' | translate }}</h3>
            <p class="card-description">{{ 'PARTICIPATE.STEP4_DESC' | translate }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .participate-section {
      padding: 80px 0;
      background: linear-gradient(180deg, #f0f4f8 0%, #e0e7ed 100%);
      color: #333;
      text-align: center;
      overflow: hidden;
    }

    .participate-section .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-title {
      font-size: 2.8rem;
      font-weight: 700;
      color: #0a2351;
      margin-bottom: 60px;
      position: relative;
      display: inline-block;
      padding-bottom: 15px;
    }

    .section-title::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #2563eb, #1d4ed8);
      border-radius: 2px;
    }

    .process-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      justify-content: center;
      align-items: stretch;
    }

    @media (min-width: 768px) {
      .process-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .process-card {
      background: #ffffff;
      border-radius: 15px;
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      text-align: right; /* Default for RTL */
      display: flex;
      flex-direction: column;
      align-items: flex-end; /* Align content to the right for RTL */
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .process-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }

    .icon-circle {
      width: 50px;
      height: 50px;
      background-color: #2563eb; /* Blue color from the image */
      border-radius: 50%;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      position: absolute;
      top: 30px;
      right: 30px; /* Position for RTL */
    }

    .card-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: #0a2351;
      margin-bottom: 15px;
      padding: 8px 15px;
      background-color: #e0e7ed; /* Light grey/blue background for title */
      border-radius: 8px;
      display: inline-block; /* To make background fit content */
      text-align: center;
      max-width: 80%; /* Adjust as needed */
      margin-right: auto; /* Push to left for RTL */
      margin-left: 0;
    }

    .card-description {
      font-size: 1rem;
      line-height: 1.8;
      color: #555;
      text-align: justify; /* Justify text for better readability */
      margin-top: 10px;
    }

    /* RTL adjustments */
    [dir="rtl"] .process-card {
      text-align: right;
      align-items: flex-end;
    }

    [dir="rtl"] .icon-circle {
      right: 30px;
      left: auto;
    }

    [dir="rtl"] .card-title {
      margin-right: auto;
      margin-left: 0;
    }

    /* LTR adjustments */
    [dir="ltr"] .process-card {
      text-align: left;
      align-items: flex-start;
    }

    [dir="ltr"] .icon-circle {
      left: 30px;
      right: auto;
    }

    [dir="ltr"] .card-title {
      margin-left: auto;
      margin-right: 0;
    }
      .text-number {
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
  `]
})
export class ParticipateComponent {}
