
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracks',
  template: `
    <div class="container">
      <h2>المجالات والتحديات</h2>
      <div class="tracks-grid">
        <div *ngFor="let t of tracks" class="card">
          <h4>{{t.title}}</h4>
          <p>{{t.desc}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class TracksComponent implements OnInit{
  tracks: any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(){ this.http.get('assets/data/content.json').subscribe((d:any)=> this.tracks = d.tracks); }
}
