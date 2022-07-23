import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss'],
})
export class InputQuestionComponent {
  @Input() question!: string;
  @Input() img!: string;
  @Input() inputType:'text'|'number'='text'
  answer?: string | number = '';
  gradientClass: string = '';
  constructor() {}

  handleClick(answer: string) {
    this.answer = answer;
  }
}
