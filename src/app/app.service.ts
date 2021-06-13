import { Injectable } from '@angular/core';
import {LanguageList, Translations} from './app.constants';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  translations = Translations;
  languages = LanguageList;
  language$ = new BehaviorSubject(LanguageList[0]);

  constructor() {}

  setLanguage(index): void {
    this.language$.next(LanguageList[index]);
  }

  translate(key: string): string {
    return this.translations[this.language$.getValue()][key];
  }
}
