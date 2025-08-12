
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-awards',
  template: `
    <div class="container">
      <h2>الجوائز والدعم</h2>
      <p>مجموع الجوائز: {{awards?.total}}</p>
      <ul>
        <li *ngFor="let d of awards?.details">{{d}}</li>
      </ul>
    </div>
  `
})
export class AwardsComponent implements OnInit{
  awards:any=null;
  constructor(private http: HttpClient){}
  ngOnInit(){ this.http.get('assets/data/content.json').subscribe((d:any)=> this.awards = d.awards); }
}
