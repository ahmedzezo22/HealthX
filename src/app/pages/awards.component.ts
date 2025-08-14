
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section id="awards" class="awards-section" dir="rtl" data-reveal>
    <div class="container">
      <div class="section-header" data-reveal>
        <h2 class="section-title">الجوائز والمميزات</h2>
        <p class="section-subtitle">فرص مالية ومزايا ترافق الفائزين</p>
      </div>
      <div class="awards-grid stagger">
        <div class="award gold tilt" data-reveal="slide-left">
          <div class="emoji">🏆</div>
          <h3>المركز الأول</h3>
          <p class="amount">15,000 SAR</p>
          <ul>
            <li>🚀 احتضان المشروع</li>
            <li>🤝 ربط مع شركاء محتملين</li>
            <li>🌍 فرصة عرض دولية</li>
          </ul>
        </div>
        <div class="award silver tilt" data-reveal="slide-left">
          <div class="emoji">🥈</div>
          <h3>المركز الثاني</h3>
          <p class="amount">10,000 SAR</p>
          <ul>
            <li>استشارات تقنية</li>
            <li>فرصة عرض محلي</li>
          </ul>
        </div>
        <div class="award bronze tilt" data-reveal="slide-left">
          <div class="emoji">🥉</div>
          <h3>المركز الثالث</h3>
          <p class="amount">5,000 SAR</p>
          <ul>
            <li>شهادة مشاركة</li>
            <li>دعم فني وتسويقي مبدئي</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .awards-section{padding:60px 0;background:#0a1e43;color:#fff}
    .awards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
    .award{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:18px;transition:transform .3s ease}
    .award:hover{transform:translateY(-6px)}
    .emoji{font-size:30px}
    .amount{font-weight:800}
    .gold{box-shadow:0 8px 20px rgba(234,179,8,.25)}
    .silver{box-shadow:0 8px 20px rgba(148,163,184,.25)}
    .bronze{box-shadow:0 8px 20px rgba(244,114,182,.2)}
  `]
})
export class AwardsComponent {}
