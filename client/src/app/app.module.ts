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

@NgModule({
  declarations: [
    AppComponent,
    SelectQuestionComponent,
    InputQuestionComponent,
    NavButtonComponent,
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
