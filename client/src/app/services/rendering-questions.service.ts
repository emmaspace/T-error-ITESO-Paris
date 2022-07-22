import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { Observable, Subject} from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class RenderingQuestionsService {
  private $actualNumberQuestion = new Subject<number>()
  actualNumberQuestion: number = 0
 
   handleDirection(number: number, direction: 'forward' | 'backward') {
    if(number === 0) this.goForward()
    else if(number === 19) this.goBackward()
     else 
 
      if (direction === 'forward') {
       
        this.goForward()
      }
      if(direction === 'backward'){
        this.goBackward()
      
        
      }


  }

 goForward(){
  this.actualNumberQuestion = this.actualNumberQuestion+1
  this.$actualNumberQuestion.next(this.actualNumberQuestion)

      

 }
 goBackward(){
  this.actualNumberQuestion = this.actualNumberQuestion-1
  this.$actualNumberQuestion.next(this.actualNumberQuestion)
      
 }
 getNumber(): Observable<number>{
  return this.$actualNumberQuestion.asObservable()
 }
}
