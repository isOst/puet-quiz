import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Questions} from './quiz-questions';
import {AppService} from '../app.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  questions = Questions;
  questionId = 0;
  answersCounter = 0;
  answersMatch;
  questionAnswers = [];
  isAnswered = false;
  isError = false;
  isResult = false;

  constructor(
    public appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cleanAnswers();
    this.cleanMatches();
  }

  submit(): void {
    this.isAnswered = true;
    this.checkAnswer();
  }

  next(): void {
    this.isAnswered = false;
    this.isError = false;
    this.questionId++;
    this.cleanAnswers();
    this.cleanMatches();
  }

  answer(event, option, index): void {
    this.questionAnswers[index] = event.checked;
  }

  tryAgain(): void {
    this.isAnswered = false;
    this.isError = false;
    this.isResult = false;
    this.questionId = 0;
    this.router.navigateByUrl('/quiz');
  }

  getAssessment(): string {
    const score = this.answersCounter / this.questions.length;
    if (score >= 0.9) { return 'Відмінно'; }
    if (score >= 0.8) { return 'Дуже добре'; }
    if (score >= 0.7) { return 'Добре'; }
    if (score >= 0.5) { return 'Задовільно'; }
    return 'Незадовільно';
  }

  trackByFn(index, item): number {
    return index; // or item.id
  }

  private cleanAnswers(): void {
    this.questionAnswers = [];
    if (this.questionId > this.questions.length - 1) { return; }
    this.questionAnswers = this.questions[this.questionId].options.map(_ => false);
  }

  private cleanMatches(): void {
    if (this.questionId > this.questions.length - 1) { return; }
    if (this.questions[this.questionId].type === 'corresponding') {
      const controls = {};
      this.questions[this.questionId].options.forEach((_, index) => {
        controls[`${index + 1}`] = [''];
      });
      this.answersMatch = this.formBuilder.group(controls);
    }
  }

  private checkAnswer(): void {
    console.log(this.answersMatch);
    const questionType = this.questions[this.questionId].type;
    if (questionType === 'corresponding') {
      this.checkCorrQuestion();
    }
    if (questionType !== 'corresponding') {
      this.checkOptionalQuestion();
    }
  }

  private checkCorrQuestion(): void {
    for (const match in this.questions[this.questionId].matches) {
      if (this.answersMatch.value[match] !== this.questions[this.questionId].matches[match]) {
        this.isError = true;
        return;
      }
    }
    this.answersCounter++;
  }

  private checkOptionalQuestion(): void {
    for (let i = 0; i <= this.questionAnswers.length - 1; i++) {
      if (this.questions[this.questionId].answers[i] !== this.questionAnswers[i]) {
        this.isError = true;
        return;
      }
    }
    this.answersCounter++;
  }
}
