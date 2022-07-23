import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/interfaces/question.interface';
import { RenderingQuestionsService } from 'src/app/services/rendering-questions.service';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
   @Input() type!: 'forward' | 'backward';
   actualNumberQuestion$!: Observable<number>
   actualNumberQuestion!: number

  constructor(private renderQuestion: RenderingQuestionsService) {}
  ngOnInit(): void {
   this.actualNumberQuestion$ = this.renderQuestion.getNumber()
   this.actualNumberQuestion$.subscribe(number => this.actualNumberQuestion = number)
  }

  handleClick(actualQuestion: number) {

    this.renderQuestion.handleDirection(actualQuestion, this.type)
    console.log(this.renderQuestion.actualNumberQuestion);
  }
}
