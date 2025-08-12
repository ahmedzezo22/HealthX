import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  currentStep = 1;
  totalSteps = 3;

  registrationData = {
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    studyLevel: '',
    major: '',

    // Step 2: Experience
    programmingExperience: '',
    hpcExperience: '',
    preferredLanguages: [] as string[],
    previousHackathons: '',
    
    // Step 3: Team & Preferences
    teamPreference: '',
    teamName: '',
    teamMembers: [''],
    interests: [] as string[],
    dietaryRestrictions: '',
    tshirtSize: '',
    agreesToTerms: false
  };

  programmingLanguages = [
    'Python', 'C++', 'Java', 'JavaScript', 'C', 'R', 
    'MATLAB', 'CUDA', 'OpenMP', 'MPI', 'Go', 'Rust'
  ];

  interestAreas = [
    'Machine Learning', 'Scientific Computing', 'Data Analytics',
    'Parallel Algorithms', 'Cloud Computing', 'Bioinformatics',
    'Financial Computing', 'Climate Modeling', 'Quantum Computing'
  ];

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  addTeamMember() {
    if (this.registrationData.teamMembers.length < 4) {
      this.registrationData.teamMembers.push('');
    }
  }

  removeTeamMember(index: number) {
    if (this.registrationData.teamMembers.length > 1) {
      this.registrationData.teamMembers.splice(index, 1);
    }
  }

  toggleLanguage(language: string) {
    const index = this.registrationData.preferredLanguages.indexOf(language);
    if (index > -1) {
      this.registrationData.preferredLanguages.splice(index, 1);
    } else {
      this.registrationData.preferredLanguages.push(language);
    }
  }

  toggleInterest(interest: string) {
    const index = this.registrationData.interests.indexOf(interest);
    if (index > -1) {
      this.registrationData.interests.splice(index, 1);
    } else {
      this.registrationData.interests.push(interest);
    }
  }

  isLanguageSelected(language: string): boolean {
    return this.registrationData.preferredLanguages.includes(language);
  }

  isInterestSelected(interest: string): boolean {
    return this.registrationData.interests.includes(interest);
  }

  submitRegistration() {
    // Handle form submission
    console.log('Registration submitted:', this.registrationData);
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
  }

  getStepTitle(): string {
    const titles = {
      1: 'Personal Information',
      2: 'Experience & Skills',
      3: 'Team & Preferences'
    };
    return titles[this.currentStep as keyof typeof titles] || '';
  }
}