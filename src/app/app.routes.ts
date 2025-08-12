
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about.component';
import { TracksComponent } from './pages/tracks.component';
import { ParticipateComponent } from './pages/participate.component';
import { AwardsComponent } from './pages/awards.component';
import { PartnersComponent } from './pages/partners.component';
import { FaqComponent } from './pages/faq.component';
import { ContactComponent } from './pages/contact.component';
import { BlogComponent } from './pages/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { VideoComponent } from './pages/video/video.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'participate', component: ParticipateComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'video', component: VideoComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }