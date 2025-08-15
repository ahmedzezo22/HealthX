
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ContactComponent } from '../contact/contact.component';
import { VisionComponent } from '../../vision/vision.component';
import { TracksComponent } from '../tracks.component';
import { ParticipateComponent } from '../participate.component';
import { AwardsComponent } from '../awards.component';
import { FaqComponent } from '../faq.component';
import { AudienceComponent } from '../audience.component';
import { IdentityComponent } from '../identity.component';
import { PillarsComponent } from '../pillars.component';
import { ImpactComponent } from '../impact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TranslatePipe,
    HeroComponent,
    AboutComponent,
    ScheduleComponent,
    VisionComponent,
    AudienceComponent,
    IdentityComponent,
    PillarsComponent,
    ImpactComponent,
    TracksComponent,
    ParticipateComponent,
    AwardsComponent,
    RegistrationComponent,
    FaqComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targetDate = new Date('2025-09-01T00:00:00').getTime();

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}