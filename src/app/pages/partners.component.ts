
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2>الشركاء</h2>
    <div class="partners-scroll" style="display:flex;gap:1rem;overflow:auto;padding:1rem 0">
      <div class="card" *ngFor="let p of partners">{{p}}</div>
    </div>
  </div>
  `
})
export class PartnersComponent {
  partners = ['وزارة الصحة','هيئة التخصصات','سدايا','STC Health','كلاسيرا','الجامعات الطبية'];
}
