import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Values } from 'src/app/interfaces/values.interface';
import {trigger, style, transition, animate, state} from '@angular/animations'
import { RenderingQuestionsService } from 'src/app/services/rendering-questions.service';



@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss'],
  animations:[
    trigger('enterStateQ', [
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
    ]),
    trigger('enterStateI', [
      state('void', style({
        transform: 'translateX(-200%)',
        opacity: 0,
       
      })),
      transition(':enter',[
        animate(500, style({
          transform:'translateX(0%)',
          opacity:1
        }))
        
      ])
    ])
  ]
})
export class SelectQuestionComponent {
 @Input() img!: string
  @Input() question!: string 
  @Input() values?: Values[] 
  answer!: string;
constructor(private renderNextQuestion: RenderingQuestionsService){}
  handleChange(e:any){
    console.log(e)
    this.renderNextQuestion.goForward()
   
    
  }
  
 

}
