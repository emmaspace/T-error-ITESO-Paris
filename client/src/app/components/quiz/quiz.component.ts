import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/interfaces/question.interface';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
 @Input() questions!: Question[] 

 @Input()actualNumberQuestion$!: Observable<number>;
  @Input() actualNumberQuestion!: number;
  constructor() {}
  
  
}
