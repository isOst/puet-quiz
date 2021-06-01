import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  questions = [{
    id: 3,
    question: 'Формальна породжувальна граматика G (далі – граматика G) – це формальна система, задана четвіркою об&#39;єктів G = (V, T, S, P). Встановіть відповідність.',
    type: 'corresponding',
    options: ['V', 'T', 'S', 'P'],
    answers: ['початковий символ ( SєV)', 'підмножина V, елементи якої називають термінальними (основними) символами;', 'скінченна множина продукцій (або правил перетворення) вигляду\n' +
    'ξ→η, де ξ та η – ланцюжки над алфавітом V;', 'скінченна непорожня множина, яку називають алфавітом (або\n' +
    'словником).'],
    matches: { 1: '4', 2: '2', 3: '1', 4: '3' },
    error_phrase: 'Помилка! Правильна відповідь: V – скінченна непорожня множина, яку називають алфавітом (або словником); T – її підмножина, елементи якої називають термінальними (основними) символами; S – початковий символ ( SV ); P – скінченна множина продукцій (або правил перетворення) вигляду ξ→η, де ξ та η – ланцюжки над алфавітом V.'
  }, {
    id: 4,
    question: 'Формальні породжувальні граматики часто називають ________. \n Вставте продовження речення.',
    type: 'single',
    options: ['граматиками з фразовою структурою;', 'граматиками безпосередніх складових;', 'обидва варіанти правильні;'],
    answers: [false, false, true],
    error_phrase: 'Помилка! Правильна відповідь – третій варіант.'
  }, {
    id: 9,
    question: 'Користувачу відображається умова: «Довжину ланцюжка α позначають ___________.',
    type: 'multiply',
    options: ['l(α);', 'α;', '| α |;', '( α ).'],
    answers: [true, false, true, false],
    error_phrase: 'Помилка! Правильна відповідь – перший і третій варіанти.'
  }];
  questionId = 0;
  answersCounter = 0;
  answersMatch;
  questionAnswers = [];
  isAnswered = false;
  isError = false;
  isResult = false;

  constructor(
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

  private cleanAnswers(): void {
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
