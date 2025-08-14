import { Component } from '@angular/core';

import { HeaderComponent } from './pages/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { RegistrationComponent } from './pages/registration/registration.component';
// import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
// import { PrizesComponent } from './pages/prizes/prizes.component';
import { VisionComponent } from './vision/vision.component';
import { TracksComponent } from './pages/tracks.component';
import { ParticipateComponent } from './pages/participate.component';
import { AwardsComponent } from './pages/awards.component';
import { PartnersComponent as PartnersFlat } from './pages/partners.component';
import { FaqComponent } from './pages/faq.component';
import { BlogComponent } from './pages/blog.component';
import { AudienceComponent } from './pages/audience.component';
import { IdentityComponent } from './pages/identity.component';
import { PillarsComponent } from './pages/pillars.component';
import { ImpactComponent } from './pages/impact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
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
    ContactComponent,
    FooterComponent,
    // BlogComponent,
      ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HPC Sprint Hackathon';
}