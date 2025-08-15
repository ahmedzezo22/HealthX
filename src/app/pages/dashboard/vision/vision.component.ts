import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent {
  visionData = {
    visionTitle: 'Vision',
    visionDesc: 'For the project to be a leading platform that supports innovative health research with direct impact on the health sector.',
    visionDesc2: 'Leading the direction towards research innovations that create positive transformation in future health services.',
    missionTitle: 'Mission',
    missionDesc: 'Enable researchers and health practitioners to develop their ideas and transform them into practical, beneficial projects.',
    missionDesc2: 'Provide an integrated environment that includes guidance, partnerships, and the necessary infrastructure to enhance research quality.'
  };

  isEditing = false;
  editedData = { ...this.visionData };

  startEditing() {
    this.isEditing = true;
    this.editedData = { ...this.visionData };
  }

  saveChanges() {
    this.visionData = { ...this.editedData };
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Vision updated:', this.visionData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = { ...this.visionData };
  }
}
