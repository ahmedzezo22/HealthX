import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface IdentitySection {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent {
  identityData = {
    logoTitle: 'Inceptia HAIL',
    logoTagline: 'حيث يبدأ البحث والابتكار',
    sections: [
      {
        id: 1,
        title: 'الرمز',
        description: 'عنصر بصري يُشبه الذرة أو مدارات الإلكترونات، يُمثّل البحث باعتبار الذرة رمزًا للعلوم الأساسية والتقنية والابتكار في مجالات الصحة. يعبّر عن التكامل بين التخصصات والتعاون البحثي، من خلال تداخل المدارات وتعدد محاورها.',
        isActive: true
      },
      {
        id: 2,
        title: 'العنوان',
        description: 'تعكس التسمية هوية من حائل، حيث البحث والابتكار من قلب المناطق الصحية. يجمع المشروع بين البحث العلمي وشراكات داعمة لبناء منظومة متكاملة. يرمز اسم Inceptia إلى البداية المبنية على منهجية علمية، أما HAIL فيربط الهوية بالمكان ويجسّد رسالة التمركز الإقليمي منطلقًا نحو الأثر.',
        isActive: true
      },
      {
        id: 3,
        title: 'الألوان ودلالتها',
        description: 'الأزرق الداكن يرمز إلى الابتكار والنمو والموثوقية، ويعكس توجه الهوية نحو المجالات الصحية الحديثة ذات الطابع العلمي. الأخضر يعبّر عن الحيوية والتفاؤل والارتقاء بالخدمات الصحية.',
        isActive: true
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.identityData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.identityData));
  }

  saveChanges() {
    this.identityData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Identity data updated:', this.identityData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.identityData));
  }

  addSection() {
    const newSection: IdentitySection = {
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

  toggleSectionStatus(section: IdentitySection) {
    section.isActive = !section.isActive;
  }
}
