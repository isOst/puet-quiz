import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { QuizComponent } from './quiz/quiz.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

const routes: Routes = [{
  path: 'quiz',
  component: QuizComponent,
  children: [{
    path: 'start',
    component: QuizStartComponent
  }, {
    path: 'question',
    component: QuizQuestionComponent
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  }]
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'quiz'
}];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizStartComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
