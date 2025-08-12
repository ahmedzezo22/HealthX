import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports:[FormsModule,CommonModule],
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    // In-memory credentials
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'بيانات الدخول غير صحيحة';
    }
  }
}
