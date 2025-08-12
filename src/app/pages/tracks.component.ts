
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2>المجالات والتحديات</h2>
    <div class="tracks-grid">
      <div class="track-card" *ngFor="let t of tracks">
        <h4>{{t.title}}</h4>
        <p>{{t.desc}}</p>
      </div>
    </div>
  </div>
  `
})
export class TracksComponent {
  tracks = [
    {title:'الذكاء الاصطناعي في الرعاية الصحية', desc:'حلول تعتمد على AI لتحسين التشخيص.'},
    {title:'التعليم الطبي الذكي', desc:'منصات تعليم وتدريب ذكيّة.'},
    {title:'صحة المجتمع والوقاية', desc:'تحسين الوقاية المجتمعية.'},
    {title:'الصحة النفسية الرقمية', desc:'تطبيقات دعم نفسي.'},
    {title:'تجربة المريض', desc:'تحسين رحلة المريض.'},
    {title:'تحليل البيانات الصحية', desc:'رؤى من البيانات.'},
    {title:'تمكين صحة المرأة والطفل', desc:'حلول خاصة.'},
    {title:'الأجهزة الذكية والمتابعة', desc:'أجهزة ومتابعة عن بُعد.'}
  ];
}
