import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent {
  @Input() question!: string 
  answer?: string 
  constructor() { }
 
  
  handleClick(answer:string){
    this.answer = answer
  }

}
