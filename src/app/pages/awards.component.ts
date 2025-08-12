
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2>الجوائز والمميزات</h2>
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <div class="card" style="flex:1"><h3>المركز الأول</h3><p>15,000 SAR + احتضان</p></div>
      <div class="card" style="flex:1"><h3>المركز الثاني</h3><p>10,000 SAR</p></div>
      <div class="card" style="flex:1"><h3>المركز الثالث</h3><p>5,000 SAR</p></div>
    </div>
  </div>
  `
})
export class AwardsComponent {}
