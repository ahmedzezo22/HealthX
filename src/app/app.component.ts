import { Component } from '@angular/core';

import { HeaderComponent } from './pages/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PrizesComponent } from './pages/prizes/prizes.component';
import { VisionComponent } from './vision/vision.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ScheduleComponent,
    VisionComponent,
    PrizesComponent,
    RegistrationComponent,
    SponsorsComponent,
    ContactComponent,
    FooterComponent
      ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HPC Sprint Hackathon';
}