import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';
interface Award {
  id: number;
  title: string;
  amount: string;
  description: string;
  isActive: boolean;
  order: number;
}

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  awardsData = {
    title: 'الجوائز والمميزات',
    awards: [
      {
        id: 1,
        title: 'الجائزة الأولى',
        amount: '50,000 ريال',
        description: 'أعلى جائزة للفريق الفائز بالمركز الأول',
        isActive: true,
        order: 1
      },
      {
        id: 2,
        title: 'الجائزة الثانية',
        amount: '30,000 ريال',
        description: 'جائزة الفريق الفائز بالمركز الثاني',
        isActive: true,
        order: 2
      },
      {
        id: 3,
        title: 'الجائزة الثالثة',
        amount: '20,000 ريال',
        description: 'جائزة الفريق الفائز بالمركز الثالث',
        isActive: true,
        order: 3
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.awardsData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.awardsData));
  }

  saveChanges() {
    this.awardsData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Awards data updated:', this.awardsData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.awardsData));
  }

  addAward() {
    const newAward: Award = {
      id: this.editedData.awards.length + 1,
      title: '',
      amount: '',
      description: '',
      isActive: true,
      order: this.editedData.awards.length + 1
    };
    this.editedData.awards.push(newAward);
  }

  removeAward(index: number) {
    this.editedData.awards.splice(index, 1);
    // Update order numbers
    this.editedData.awards.forEach((award:any, i:any) => {
      award.order = i + 1;
    });
  }

  toggleAwardStatus(award: Award) {
    award.isActive = !award.isActive;
  }

  moveAward(award: Award, direction: 'up' | 'down') {
    const currentIndex = this.editedData.awards.findIndex((a:any) => a.id === award.id);
    if (direction === 'up' && currentIndex > 0) {
      [this.editedData.awards[currentIndex], this.editedData.awards[currentIndex - 1]] =
      [this.editedData.awards[currentIndex - 1], this.editedData.awards[currentIndex]];
    } else if (direction === 'down' && currentIndex < this.editedData.awards.length - 1) {
      [this.editedData.awards[currentIndex], this.editedData.awards[currentIndex + 1]] =
      [this.editedData.awards[currentIndex + 1], this.editedData.awards[currentIndex]];
    }
    // Update order numbers
    this.editedData.awards.forEach((a:any, i:any) => {
      a.order = i + 1;
    });
  }
}
