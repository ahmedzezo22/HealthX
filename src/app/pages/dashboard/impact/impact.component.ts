import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface ImpactSection {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent {
  impactData = {
    title: 'الأثر المتوقّع',
    sections: [
      {
        id: 1,
        title: 'إنشاء مركز أبحاث وابتكار صحي متكامل',
        description: 'يكون منصة حاضنة دائمة للأفكار البحثية، يوفر الدعم الفني والمالي والإداري لتحويل المخرجات إلى مشاريع قابلة للتطبيق.',
        isActive: true
      },
      {
        id: 2,
        title: 'تأسيس وحدات سريرية بحثية رشيقة داخل المستشفيات',
        description: 'تعمل على تطبيق الأبحاث مباشرة في بيئة سريرية، ومتابعة نتائجها مع الممارسين تحت إشراف لجان أخلاقيات البحث العلمي.',
        isActive: true
      },
      {
        id: 3,
        title: 'تنظيم برامج تدريبية مستمرة',
        description: 'تطوير برامج معتمدة لأفضل الكوادر الصحية والبحثية تشمل مهارات تصميم الأبحاث، تحليل البيانات، وإدارة المشاريع البحثية.',
        isActive: true
      },
      {
        id: 4,
        title: 'تعزيز مكانة المؤتمر والهاكاثون كمُنصّة سنوية',
        description: 'بفضل النجاح والمخرجات المتقدمة، نتوقع أن يصبح المشروع فعالية دورية تستقطب المزيد من العقول المبتكرة وتساهم في رفع مستوى البحث والابتكار الصحي.',
        isActive: true
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.impactData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.impactData));
  }

  saveChanges() {
    this.impactData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Impact data updated:', this.impactData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.impactData));
  }

  addSection() {
    const newSection: ImpactSection = {
      id: this.editedData.sections.length + 1,
      title: '',
      description: '',
      isActive: true
    };
    this.editedData.sections.push(newSection);
  }

  removeSection(index: number) {
    this.editedData.sections.splice(index, 1);
  }

  toggleSectionStatus(section: ImpactSection) {
    section.isActive = !section.isActive;
  }
}
