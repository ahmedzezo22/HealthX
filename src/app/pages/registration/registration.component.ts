import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationData = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    agreesToTerms: false
  };

  constructor(private translation: TranslationService) {}

  submitRegistration() {
    console.log('Registration submitted:', this.registrationData);
    alert(this.translation.translate('REG_SIMPLE.SUBMIT_SUCCESS'));
  }
}