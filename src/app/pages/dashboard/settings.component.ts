import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  settings :any= {
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      profileVisibility: 'public',
      dataSharing: false,
      analytics: true
    },
    preferences: {
      language: 'en',
      theme: 'light',
      timezone: 'UTC+3'
    }
  };

  updateSetting(category: string, key: string, value: any) {
    this.settings[category][key] = value;
    console.log(`Updated ${category}.${key} to ${value}`);
  }
}
