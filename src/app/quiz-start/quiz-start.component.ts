import { Component } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent {

  constructor(
    public appService: AppService
  ) { }
}
