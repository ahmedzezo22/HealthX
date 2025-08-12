
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participate',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2>آلية المشاركة</h2>
    <ol>
      <li>التسجيل عبر الموقع</li>
      <li>اختيار تحدٍ أو تقديم فكرة</li>
      <li>تشكيل فريق متنوع (صحي + تقني + تصميمي)</li>
      <li>تنفيذ المشروع خلال 48 ساعة</li>
      <li>عرض المشروع أمام لجنة التحكيم + تصويت جماهيري</li>
    </ol>
  </div>
  `
})
export class ParticipateComponent {}
