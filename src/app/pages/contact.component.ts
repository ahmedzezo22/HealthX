
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="container">
    <h2>تواصل معنا</h2>
    <form [formGroup]="form" (ngSubmit)="send()" style="max-width:700px">
      <label>الاسم<input formControlName="name" /></label>
      <label>البريد<input formControlName="email" /></label>
      <label>الرسالة<textarea formControlName="message"></textarea></label>
      <div style="margin-top:1rem"><button class="btn-primary" type="submit">إرسال</button></div>
    </form>
  </div>
  `
})
export class ContactComponent {
  form;
  constructor(private fb: FormBuilder){ this.form = this.fb.group({name:'',email:'',message:''}); }
  send(){ alert('تم الإرسال — سنتواصل معك قريبا'); this.form.reset(); }
}
