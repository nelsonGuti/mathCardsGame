import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private $language = new BehaviorSubject<Language>(Language.SPANISH);
  public language$ = this.$language.asObservable();

  updateLanguage(language: Language) {
    this.$language.next(language);
  }
}
