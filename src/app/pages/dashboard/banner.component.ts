import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  bannerData = {
    title: 'صحة المستقبل تبدأ من فكرة',
    subtitle: 'شارك في الهاكاثون وكن جزءًا من الإبداع في مجال الصحة',
    buttonText: 'سجل الآن',
    videoButtonText: 'مشاهدة الفيديو',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'assets/banner.jpg'
  };

  isEditing = false;
  editedData = { ...this.bannerData };

  startEditing() {
    this.isEditing = true;
    this.editedData = { ...this.bannerData };
  }

  saveChanges() {
    this.bannerData = { ...this.editedData };
    this.isEditing = false;
    // TODO: Add API call here
    console.log('Banner updated:', this.bannerData);
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedData = { ...this.bannerData };
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      // TODO: Add image upload logic here
      console.log('Image selected:', file);
    }
  }
}
