
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { ParticipateComponent } from './pages/participate/participate.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { DashboardLayoutComponent } from './pages/dashboard/dashboardLayout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ParticipantsComponent } from './pages/dashboard/participants/participants.component';
import { ProjectsComponent } from './pages/dashboard/projects/projects.component';
import { ChallengesComponent } from './pages/dashboard/challenges/challenges.component';
import { AnalyticsComponent } from './pages/dashboard/analytics/analytics.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { BannerComponent } from './pages/dashboard/banner/banner.component';
import { VisionComponent } from './pages/dashboard/vision/vision.component';
import { TracksComponent as TracksManagementComponent } from './pages/dashboard/tracks/tracks.component';
import { FAQComponent } from './pages/dashboard/faq/faq.component';
import { AboutManagmentComponent } from './pages/dashboard/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'participate', component: ParticipateComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'banner', component: BannerComponent },
      { path: 'about', component: AboutManagmentComponent },
      { path: 'vision', component: VisionComponent },
      { path: 'tracks', component: TracksManagementComponent },
      { path: 'faq', component: FAQComponent },
      { path: 'participants', component: ParticipantsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'challenges', component: ChallengesComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
