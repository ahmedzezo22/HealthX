import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  currentLang = 'ar';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }

  setLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.translationService.setLanguage(newLang);
  }
}