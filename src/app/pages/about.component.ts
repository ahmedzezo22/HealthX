
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>عن الهاكاثون</h2>
      <p>HealthX Hackathon منصة تسرّع الابتكار الصحي وتجمع الممارسين والمطورين والمصممين.</p>
      <div style="display:flex;gap:1rem;margin-top:1rem;flex-wrap:wrap">
        <div class="card" style="flex:1"><h4>لماذا HealthX؟</h4><p>دعم حلول رقميّة مبتكرة تتوافق مع رؤية 2030.</p></div>
        <div class="card" style="flex:1"><h4>لماذا حائل؟</h4><p>حائل كمركز طاقات شبابيّة وتعليميّة.</p></div>
      </div>
    </div>
  `
})
export class AboutComponent {}
