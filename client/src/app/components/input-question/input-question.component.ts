import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent implements OnInit {
  @Input() question: string = '¿Cual es tu nombre?'
  answer?: string 
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(answer:string){
    this.answer = answer
  }

}
