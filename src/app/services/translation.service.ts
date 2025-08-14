import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, firstValueFrom, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('ar');
  currentLang$ = this.currentLangSubject.asObservable();

  private translations: Record<string, any> = {};
  private currentLang = 'ar';
  private translationsLoaded = false;

  constructor(private http: HttpClient) {}

  async init(): Promise<void> {
    await Promise.all([
      this.loadLangFile('ar'),
      this.loadLangFile('en')
    ]);
    this.setLanguage(this.currentLang);
    this.translationsLoaded = true;
  }

  private async loadLangFile(lang: string) {
    const data = await firstValueFrom(
      this.http.get(`/assets/i18n/${lang}.json`).pipe(
        catchError(() => of(null))
      )
    );
    if (data) {
      this.translations[lang] = data;
    }
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.currentLangSubject.next(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  translate(key: string): string {
    if (!this.translationsLoaded) return key;
    const langData = this.translations[this.currentLang];
    return key.split('.').reduce((obj, k) => obj?.[k], langData) || key;
  }
  Rtl() {
    console.log(this.currentLang);
    return this.currentLang === 'ar' ? true : false;
  }
  Ltr() {
    return this.currentLang === 'en' ? true : false;
  }
}
