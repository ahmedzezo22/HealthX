import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutData = {
    overviewTitle: 'Overview',
    overviewDesc: 'The Health Research Conference project aims to enhance scientific research culture in the health sector by providing a scientific platform that brings together researchers and experts to discuss the latest developments.',
    goalsTitle: 'Project Goals',
    goals: [
      {
        title: 'Transform Ideas into Publishable Research',
        description: 'Enable participants to create research that starts with a simple idea and ends with impactful scientific publication, under academic supervision and professional follow-up.'
      },
      {
        title: 'Create Dynamic Research Momentum',
        description: 'Launch a research hackathon before the conference that ignites the spirit of challenge and enhances the platform for presentation and excellence among teams.'
      },
      {
        title: 'Build a New Generation of Research Leaders',
        description: 'Discover and nurture young research talents who lead sustainable scientific projects and face healthcare sector challenges.'
      },
      {
        title: 'Enhance Scientific Competition Spirit',
        description: 'Honor the best research, award prizes, and provide opportunities to present projects before scientific committees and specialized community.'
      }
    ]
  };

  isEditing = false;
  editedData = JSON.parse(JSON.stringify(this.aboutData));

  startEditing() {
    this.isEditing = true;
    this.editedData = JSON.parse(JSON.stringify(this.aboutData));
  }

  saveChanges() {
    this.aboutData = JSON.parse(JSON.stringify(this.editedData));
    this.isEditing = false;
    // TODO: Add API call here
    console.log('About section updated:', this.aboutData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = JSON.parse(JSON.stringify(this.aboutData));
  }

  addGoal() {
    this.editedData.goals.push({
      title: 'New Goal',
      description: 'Goal description'
    });
  }

  removeGoal(index: number) {
    this.editedData.goals.splice(index, 1);
  }
}
