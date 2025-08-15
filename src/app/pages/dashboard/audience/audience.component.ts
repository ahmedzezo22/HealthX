import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface AudienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
}

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent {
  audienceData = {
    title: 'الفئة المستهدفة',
    description: 'نستهدف مجموعة متنوعة من المواهب والكفاءات',
    cards: [
      {
        id: 1,
        title: 'الممارسون الصحيون (أطباء – صيدلة – تمريض – تقنيون صحيون)',
        description: 'يتيح لهم المشروع والهاكاثون الفرصة للمساهمة في طرح التحديات الواقعية التي يواجهونها في الميدان الصحي، والمشاركة في إيجاد حلول بحثية مبتكرة قابلة للتطبيق وتطوير الخدمات المقدمة.',
        icon: '👨‍⚕️',
        isActive: true
      },
      {
        id: 2,
        title: 'الطلاب والطالبات في التخصصات الصحية والعلمية',
        description: 'يستهدف المشروع الطلاب الطموحين من جميع الجامعات والدراسات العليا لتطوير مهاراتهم البحثية والعملية، وتحفيزهم للمشاركة في المشاريع الرائدة.',
        icon: '🎓',
        isActive: true
      },
      {
        id: 3,
        title: 'الجهات الصحية والهيئات الداعمة للبحث والابتكار',
        description: 'يعد المشروع فرصة للجهات الاستراتيجية لبناء المخرجات البحثية الناجحة ودعمها ماديًا أو لوجستيًا؛ بما يضمن استثمار الأفكار وتحويلها إلى مبادرات أو منتجات تخدم المجتمع والصحة.',
        icon: '🏢',
        isActive: true
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.audienceData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.audienceData));
  }

  saveChanges() {
    this.audienceData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Audience data updated:', this.audienceData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.audienceData));
  }

  addCard() {
    const newCard: AudienceCard = {
      id: this.editedData.cards.length + 1,
      title: '',
      description: '',
      icon: '👥',
      isActive: true
    };
    this.editedData.cards.push(newCard);
  }

  removeCard(index: number) {
    this.editedData.cards.splice(index, 1);
  }

  toggleCardStatus(card: AudienceCard) {
    card.isActive = !card.isActive;
  }
}
