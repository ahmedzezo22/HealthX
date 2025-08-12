
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  template: `
    <div class="container">
      <h2>الأسئلة الشائعة</h2>
      <div *ngFor="let f of faqs" class="card">
        <h4>{{f.q}}</h4>
        <p>{{f.a}}</p>
      </div>
    </div>
  `
})
export class FaqComponent implements OnInit{
  faqs:any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(){ this.http.get('assets/data/content.json').subscribe((d:any)=> this.faqs = d.faq); }
}
