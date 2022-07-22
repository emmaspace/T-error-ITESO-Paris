import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Values } from 'src/app/interfaces/values.interface';
import {trigger, style, transition, animate, state} from '@angular/animations'



@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss'],
  animations:[
    trigger('enterState', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0,
       
      })),
      transition(':enter',[
        animate(500, style({
          transform:'translateY(0%)',
          opacity:1
        }))
        
      ])
    ])
  ]
})
export class SelectQuestionComponent {
 
  @Input() question!: string 
  values: Values[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  answer!: string;

  handleChange(e:any){
    console.log(e)
   
    
  }
  
 

}
