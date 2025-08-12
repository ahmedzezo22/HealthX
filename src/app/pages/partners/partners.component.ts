
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partners',
  template: `
    <div class="container">
      <h2>الشركاء</h2>
      <div class="partners-scroll">
        <div *ngFor="let p of partners" class="card">{{p}}</div>
      </div>
    </div>
  `
})
export class PartnersComponent implements OnInit{
  partners:any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(){ this.http.get('assets/data/content.json').subscribe((d:any)=> this.partners = d.partners); }
}
