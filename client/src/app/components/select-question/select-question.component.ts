import { Component, Input, OnInit } from '@angular/core';

interface Values {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss']
})
export class SelectQuestionComponent implements OnInit {
  @Input() question: string = '¿Cual es tu nombre?'
  values: Values[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
