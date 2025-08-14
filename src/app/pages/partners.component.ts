
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section id="partners" class="partners-section"  data-reveal>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">الجهات الداعمة والشركاء</h2>
      </div>
      <div class="marquee" data-reveal="fade-in">
        <div class="track">
          <div class="logo" *ngFor="let p of partners">{{p}}</div>
          <div class="logo" *ngFor="let p of partners">{{p}}</div>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .partners-section{padding:60px 0;background:#0b1f3f;color:#fff}
    .marquee{overflow:hidden;position:relative}
    .track{display:flex;gap:24px;animation:scroll 18s linear infinite;will-change:transform}
    .logo{min-width:180px;padding:16px 20px;border-radius:14px;text-align:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15)}
    @keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  `]
})
export class PartnersComponent {
  partners = ['وزارة الصحة','هيئة التخصصات','سدايا','STC Health','كلاسيرا','الجامعات الطبية'];
}
