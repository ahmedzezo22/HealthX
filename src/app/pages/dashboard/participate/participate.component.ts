import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface ParticipateStep {
  id: number;
  title: string;
  description: string;
  order: number;
  isActive: boolean;
}

@Component({
  selector: 'app-participate',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent {
  participateData = {
    title: 'آلية تنفيذ الهاكثون',
    steps: [
      {
        id: 1,
        title: 'الإعلان والتسجيل',
        description: 'يتم إطلاق إعلان رسمي عن الهاكثون عبر القنوات المعتمدة مثل الموقع الإلكتروني وغيره، يتضمن جميع التفاصيل من حيث الأهداف، الشروط، والمحاور البحثية. بعد الإعلان، تُفتح فترة التسجيل الإلكتروني أمام المهتمين من الباحثين والأطباء والطلاب والمختصين، مع إتاحة النماذج اللازمة لتعبئة بيانات الفرق البحثية والمجالات التي يرغبون المشاركة فيها.',
        order: 1,
        isActive: true
      },
      {
        id: 2,
        title: 'استقبال المقترحات البحثية',
        description: 'خلال مرحلة التسجيل، يتم استقبال المقترحات البحثية الأولية من الفرق المشاركة، بحيث يُطلب منهم تقديم فكرة البحث أو المشكلة الصحية التي ينوون العمل عليها، مع توضيح مسار البحث المقترح وأهدافه المبدئية. تُراجع هذه المقترحات من قبل لجنة مختصة للتأكد من ملاءمتها للمسارات المحددة ولإتاحة الفرصة للفرق بتلقي الملاحظات قبل بدء فعاليات الهاكثون.',
        order: 2,
        isActive: true
      },
      {
        id: 3,
        title: 'الفرز الأولي للمقترحات',
        description: 'تقوم لجنة متخصصة بمراجعة جميع المقترحات المقدمة وفق معايير واضحة مثل: ارتباط الفكرة باحتياجات القطاع الصحي، قابلية التطبيق، وحداثة الفكرة. يتم في هذه المرحلة فرز المقترحات واختيار أفضلها للانتقال إلى مراحل الهاكثون العملية.',
        order: 3,
        isActive: true
      },
      {
        id: 4,
        title: 'التقييم واختيار الفائزين',
        description: 'يتم عرض الأبحاث أمام لجنة تحكيم متخصصة تضم خبراء في البحث العلمي والابتكار الصحي لمراجعة النماذج النهائية وفق معايير محددة. بعد التقييم الشامل، يتم تحديد الأبحاث الأكثر تميزا وتأثيرا ليتم تكريم الفرق الفائزة ومنحها جوائز تحفيزية بهدف تمكين هذه الأبحاث من الاستمرار والتحول إلى مشاريع عملية تخدم القطاع الصحي.',
        order: 4,
        isActive: true
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.participateData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.participateData));
  }

  saveChanges() {
    this.participateData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Participate data updated:', this.participateData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.participateData));
  }

  addStep() {
    const newStep: ParticipateStep = {
      id: this.editedData.steps.length + 1,
      title: '',
      description: '',
      order: this.editedData.steps.length + 1,
      isActive: true
    };
    this.editedData.steps.push(newStep);
  }

  removeStep(index: number) {
    this.editedData.steps.splice(index, 1);
    // Update order numbers
    this.editedData.steps.forEach((step:any, i:any) => {
      step.order = i + 1;
    });
  }

  toggleStepStatus(step: ParticipateStep) {
    step.isActive = !step.isActive;
  }

  moveStep(step: ParticipateStep, direction: 'up' | 'down') {
    const currentIndex = this.editedData.steps.findIndex((s:any) => s.id === step.id);
    if (direction === 'up' && currentIndex > 0) {
      [this.editedData.steps[currentIndex], this.editedData.steps[currentIndex - 1]] =
      [this.editedData.steps[currentIndex - 1], this.editedData.steps[currentIndex]];
    } else if (direction === 'down' && currentIndex < this.editedData.steps.length - 1) {
      [this.editedData.steps[currentIndex], this.editedData.steps[currentIndex + 1]] =
      [this.editedData.steps[currentIndex + 1], this.editedData.steps[currentIndex]];
    }
    // Update order numbers
    this.editedData.steps.forEach((s:any, i:any) => {
      s.order = i + 1;
    });
  }
}
