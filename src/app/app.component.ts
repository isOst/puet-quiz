import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  language$ = this.appService.language$;
  languages = this.appService.languages;

  constructor(
    private appService: AppService
  ) {}

  setLanguage(index: number): void {
    this.appService.setLanguage(index);
  }
}
