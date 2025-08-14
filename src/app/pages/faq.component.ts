
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section id="faq" class="faq-section"  data-reveal>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ 'FAQ.TITLE' | translate }}</h2>
      </div>

      <div class="faq-list stagger">
        <div class="faq-item" *ngFor="let key of faqKeys; let i = index" [class.open]="openIndex===i" data-reveal="fade-up">
          <button class="faq-button" (click)="toggle(i)" [attr.aria-expanded]="openIndex===i">
            <span class="faq-title">{{ (key + '.Q') | translate }}</span>
            <span class="icon" [class.rotate]="openIndex===i" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <div class="faq-panel">
            <p class="faq-answer">{{ (key + '.A') | translate }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .faq-section{padding:72px 0;background:#ffffff}
    .container{max-width:1200px;margin:0 auto;padding:0 24px}
    .section-header{margin-bottom:28px}
    .section-title{font-size:32px;font-weight:800;color:#1e3a8a}

    .faq-list{max-width:1000px;margin:0 auto;display:flex;flex-direction:column;gap:14px}
    .faq-item{background:#fff;border:1.5px solid #c7d2fe;border-radius:12px;box-shadow:0 2px 8px rgba(79,70,229,0.06);overflow:hidden}
    .faq-button{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;background:transparent;border:none;cursor:pointer;padding:18px 22px;color:#111827}
    .faq-title{font-size:18px;font-weight:600;color:#111827}
    .icon{display:inline-flex;align-items:center;justify-content:center;transition:transform .25s ease}
    .icon.rotate{transform:rotate(180deg)}

    .faq-panel{max-height:0;overflow:hidden;transition:max-height .35s ease}
    .faq-item.open .faq-panel{max-height:300px}
    .faq-answer{padding:0 22px 18px 22px;color:#374151;line-height:1.8}
  `]
})
export class FaqComponent {
  faqKeys = [
    'FAQ.ITEM1',
    'FAQ.ITEM2',
    'FAQ.ITEM3',
    'FAQ.ITEM4',
    'FAQ.ITEM5',
    'FAQ.ITEM6',
    'FAQ.ITEM7'
  ];
  openIndex = 0;
  toggle(i:number){ this.openIndex = this.openIndex===i ? -1 : i; }
}
