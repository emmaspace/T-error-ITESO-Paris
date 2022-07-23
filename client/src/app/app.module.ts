import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectQuestionComponent } from './components/select-question/select-question.component';
import {MatSelectModule} from '@angular/material/select';
import { InputQuestionComponent } from './components/input-question/input-question.component';
import {MatInputModule} from '@angular/material/input';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { ApprovedResponseComponent } from './components/approved-response/approved-response.component';
import { FailedResponseComponent } from './components/failed-response/failed-response.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectQuestionComponent,
    InputQuestionComponent,
    NavButtonComponent,
    CarrouselComponent,
    QuizComponent,
    HomeComponent,
    QuestionnaireComponent,
    ApprovedResponseComponent,
    FailedResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule, 
    MatInputModule,
    MatButtonModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
