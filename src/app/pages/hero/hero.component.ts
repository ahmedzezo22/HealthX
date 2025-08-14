import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { VideoDialogComponent } from '../videoDialog/video-dialog.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CountUpModule, MatDialogModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(
    private dialog: MatDialog, 
    private sanitizer: DomSanitizer,
    private translationService: TranslationService
  ) {}
  
  videoUrl: any;
  daysRemaining = 0;
  hoursRemaining = 0;
  minutesRemaining = 0;
  secondsRemaining = 0;
  private countdownInterval: any;
  
  stats = [
    { value: 48, label: 'Hours of Coding' },
    { value: 50000, label: 'Prize Pool' },
    { value: 500, label: 'Participants' }
  ];
  
  private interval: any;
  private activeIndex = 0;
  private autoTimer: any;

  ngOnInit() {
    this.startCountdown();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  // Slider logic
  startAutoSlide(){
    this.autoTimer = setInterval(()=> this.nextSlide(), 7000);
  }
  clearAuto(){ if(this.autoTimer){ clearInterval(this.autoTimer); }}
  nextSlide(){ this.switchTo((this.activeIndex+1)%3); }
  prevSlide(){ this.switchTo((this.activeIndex+2)%3); }
  goTo(i:number){ this.switchTo(i); }
  private switchTo(i:number){
    this.activeIndex = i;
    const slides = Array.from(document.querySelectorAll<HTMLElement>('.slide'));
    const dots = Array.from(document.querySelectorAll<HTMLElement>('.dot'));
    slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
    dots.forEach((d,idx)=> d.classList.toggle('active', idx===i));
    this.clearAuto();
    this.startAutoSlide();
  }

   startCountdown() {
    // Set your target date here (YYYY, MM-1, DD)
    const targetDate = new Date(2025, 10, 30); // November 30, 2025 (months are 0-indexed)

    this.countdownInterval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      this.daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hoursRemaining = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutesRemaining = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.secondsRemaining = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff <= 0) {
        clearInterval(this.countdownInterval);
        this.daysRemaining = 0;
        this.hoursRemaining = 0;
        this.minutesRemaining = 0;
        this.secondsRemaining = 0;
      }
    }, 1000);
  }

  scrollToRegistration() {
    const registrationElement = document.getElementById('registration');
    if (registrationElement) {
      registrationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  animateCountdownItem(event: any) {
    event.target.classList.add('hovered');
  }

  resetCountdownItem(event: any) {
    event.target.classList.remove('hovered');
  }
 
  scrollToNextSection() {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  openVideoModal(videoLink: string) {
    const safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoLink + '?autoplay=1');

    this.dialog.open(VideoDialogComponent, {
      data: { videoUrl: safeUrl },
      width: '800px',
      panelClass: 'custom-video-dialog'
    });
  }
}

