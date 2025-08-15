import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
}

@Component({
  selector: 'app-pillars',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './pillars.component.html',
  styleUrls: ['./pillars.component.css']
})
export class PillarsComponent {
  pillarsData = {
    title: 'محاور المشروع',
    subtitle: 'يهدف المشروع إلى تسليط الضوء على أبرز الاتجاهات الحديثة في المجالات الصحية والبحثية، من خلال محاور علمية متخصصة.',
    pillars: [
      {
        id: 1,
        title: 'علم الجينوم والتقنيات الوراثية',
        description: 'الطب الحديث والتقنيات الطبية المتقدمة',
        icon: '🧬',
        isActive: true
      },
      {
        id: 2,
        title: 'الذكاء الاصطناعي في الطب والرعاية الصحية',
        description: 'التحول الرقمي في القطاع الصحي',
        icon: '🤖',
        isActive: true
      },
      {
        id: 3,
        title: 'الابتكار في التعليم والبحث الطبي',
        description: 'الطب الوقائي والصحة العامة',
        icon: '📚',
        isActive: true
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.pillarsData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.pillarsData));
  }

  saveChanges() {
    this.pillarsData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Pillars data updated:', this.pillarsData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.pillarsData));
  }

  addPillar() {
    const newPillar: Pillar = {
      id: this.editedData.pillars.length + 1,
      title: '',
      description: '',
      icon: '🏛️',
      isActive: true
    };
    this.editedData.pillars.push(newPillar);
  }

  removePillar(index: number) {
    this.editedData.pillars.splice(index, 1);
  }

  togglePillarStatus(pillar: Pillar) {
    pillar.isActive = !pillar.isActive;
  }
}
