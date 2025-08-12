
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2>الأسئلة الشائعة</h2>
    <div class="card" *ngFor="let f of faqs">
      <h4>{{f.q}}</h4>
      <p>{{f.a}}</p>
    </div>
  </div>
  `
})
export class FaqComponent {
  faqs = [
    {q:'من يستطيع المشاركة؟', a:'أي شخص مهتم بالابتكار الصحي.'},
    {q:'هل المشاركة فردية أم جماعية؟', a:'فردياً أو حتى فريق 4 أفراد.'},
    {q:'هل يمكن تقديم فكرة مسبقة؟', a:'نعم مع توضيح ما تم إنجازه مسبقاً.'}
  ];
}
