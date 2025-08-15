import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent {
  participants = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', track: 'AI in Healthcare', status: 'active', registrationDate: '2025-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', track: 'Smart Medical Education', status: 'active', registrationDate: '2025-01-14' },
    { id: 3, name: 'محمد علي', email: 'mohammed@example.com', track: 'Community Health', status: 'pending', registrationDate: '2025-01-13' },
    { id: 4, name: 'Emily Chen', email: 'emily@example.com', track: 'Digital Mental Health', status: 'active', registrationDate: '2025-01-12' },
    { id: 5, name: 'عبدالله أحمد', email: 'abdullah@example.com', track: 'AI in Healthcare', status: 'active', registrationDate: '2025-01-11' }
  ];

  getStatusClass(status: string): string {
    return status === 'active' ? 'status-active' : 'status-pending';
  }
}
