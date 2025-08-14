
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
  <section id="tracks" class="tracks-section"  data-reveal>
    <div class="tracks-header">
      <h2 class="title">{{ 'TRACKS.TITLE' | translate }}</h2>
      <p class="subtitle">{{ 'TRACKS.SUBTITLE' | translate }}</p>
    </div>

    <div class="tracks-wrap">
      <div class="tracks-grid stagger">
        <div class="track-card tilt" *ngFor="let t of tracks" data-reveal="slide-left">
          <div class="track-icon">{{t.icon}}</div>
          <div class="track-body">
            <h4 class="track-title">{{t.title | translate}}</h4>
            <p class="track-desc">{{t.desc | translate}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    /* Section background to match identity */
    .tracks-section{position:relative;padding:70px 0;background:linear-gradient(180deg,#0a1f43 0,#0d2a5c 65%,#0b1f3f 100%);color:#fff}
    .tracks-section::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 16px,transparent 16px 32px);opacity:.2;pointer-events:none}
    .tracks-header{text-align:center;margin-bottom:30px}
    .tracks-header .title{font-weight:900;font-size:34px;margin:0}
    .tracks-header .subtitle{opacity:.88;margin-top:6px}
    .tracks-wrap{max-width:1150px;margin:0 auto;padding:0 16px}

    /* Cards */
    .tracks-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
    .track-card{display:grid;grid-template-columns:64px 1fr;gap:12px;align-items:center;background:linear-gradient(135deg,rgba(231,240,255,.25),rgba(219,231,255,.2));border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:14px 16px;box-shadow:0 10px 22px rgba(0,0,0,.18)}
    .track-icon{width:64px;height:64px;border-radius:14px;background:linear-gradient(135deg,#2f5fb3,#15336e);display:flex;align-items:center;justify-content:center;font-size:30px}
    .track-body{min-height:80px}
    .track-title{margin:0 0 6px 0;font-weight:800;color:#fff}
    .track-desc{margin:0;color:rgba(255,255,255,.94);line-height:1.7;font-size:14px}

    @media(max-width:720px){
      .tracks-header .title{font-size:28px}
      .tracks-grid{grid-template-columns:1fr}
    }
  `]
})
export class TracksComponent {
  tracks = [
    {icon:'🤖',title:'TRACKS.TRACK1', desc:'TRACKS.TRACK1_DESC'},
    {icon:'🎓',title:'TRACKS.TRACK2', desc:'TRACKS.TRACK2_DESC'},
    {icon:'🛡️',title:'TRACKS.TRACK3', desc:'TRACKS.TRACK3_DESC'},
    {icon:'🧠',title:'TRACKS.TRACK4', desc:'TRACKS.TRACK4_DESC'},
    {icon:'💙',title:'TRACKS.TRACK5', desc:'TRACKS.TRACK5_DESC'},
    {icon:'📊',title:'TRACKS.TRACK6', desc:'TRACKS.TRACK6_DESC'},
    {icon:'👩‍⚕️',title:'TRACKS.TRACK7', desc:'TRACKS.TRACK7_DESC'},
    {icon:'⌚',title:'TRACKS.TRACK8', desc:'TRACKS.TRACK8_DESC'}
  ];
}
