import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface ContactInfo {
  id: number;
  title: string;
  value: string;
  type: 'text' | 'email' | 'phone' | 'address' | 'hours';
  isActive: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    title: 'تواصل معنا',
    subtitle: 'يسعدنا تواصلك — اترك رسالتك وسنعود إليك قريباً',
    contactInfo: [
      {
        id: 1,
        title: 'العنوان',
        value: 'حي النقرة، طريق الملك عبدالعزيز، حائل، المملكة العربية السعودية',
        type: 'address',
        isActive: true
      },
      {
        id: 2,
        title: 'البريد الإلكتروني - الاستفسارات العامة',
        value: 'info@inceptiahail.com',
        type: 'email',
        isActive: true
      },
      {
        id: 3,
        title: 'البريد الإلكتروني - رعاة ودعم',
        value: 'sponsors@inceptiahail.com',
        type: 'email',
        isActive: true
      },
      {
        id: 4,
        title: 'الهاتف - الرقم الرئيسي',
        value: '+966 50 123 4567',
        type: 'phone',
        isActive: true
      },
      {
        id: 5,
        title: 'ساعات الدعم',
        value: 'من الإثنين إلى الجمعة: 9:00 ص – 6:00 م | عطلة نهاية الأسبوع: 10:00 ص – 4:00 م',
        type: 'hours',
        isActive: true
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.contactData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.contactData));
  }

  saveChanges() {
    this.contactData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Contact data updated:', this.contactData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.contactData));
  }

  addContactInfo() {
    const newInfo: ContactInfo = {
      id: this.editedData.contactInfo.length + 1,
      title: '',
      value: '',
      type: 'text',
      isActive: true
    };
    this.editedData.contactInfo.push(newInfo);
  }

  removeContactInfo(index: number) {
    this.editedData.contactInfo.splice(index, 1);
  }

  toggleContactInfoStatus(info: ContactInfo) {
    info.isActive = !info.isActive;
  }
}
