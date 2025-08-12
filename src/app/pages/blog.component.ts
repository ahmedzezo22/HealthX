
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2>التحديثات</h2>
    <div class="card">سجل التحديثات وورش العمل سيُعرض هنا.</div>
  </div>
  `
})
export class BlogComponent {}
