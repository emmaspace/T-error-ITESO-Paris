import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent {
  @Input() questionNumber: number= 0
 

  handleClick(){
    console.log('holi')
  }
}
