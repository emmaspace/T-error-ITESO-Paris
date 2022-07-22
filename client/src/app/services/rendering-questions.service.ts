import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root',
})
export class RenderingQuestionsService {
  questions: Question[] = [ { number: 1, question: '¿Cuál es tu nombre?', type: 'input' },
    {
      number: 2,
      question: '¿En qué tipo de proyecto estás interesado?',
      type: 'select',
    },
   {
      number: 3,
      question: '¿En qué estado de la república se encuentra?',
      type: 'select',
    },
    {
      number: 4,
      question: '¿En qué municipio se encuentra?',
      type: 'select',
    },
    { number: 5, question: '¿Cuál es el código postal?', type: 'select' },
    {
      number: 6,
      question: '¿En qué colonia se encuentra?',
      type: 'select',
    },
    {
      number: 7,
      question: '¿Qué tipo de propiedad tiene la tierra que quieres evaluar?',
      type: 'select',
    },
   {
      number: 8,
      question:
        '¿La tierra está legalizada y tiene todos sus papeles en regla?',
      type: 'select',
    },
    {
      number: 9,
      question: '¿Este territorio se ha utilizado para cultivar?',
      type: 'select',
    },
   {
      number: 10,
      question:
        '¿El territorio se encuentra en una zona donde han ocurrido desastres naturales?',
      type: 'select',
    },
    {
      number: 11,
      question: '¿La tierra tiene humedales?',
      type: 'select',
    },
    {
      number: 12,
      question:
        '¿Los humedales con los que cuenta este territorio son artificiales? (es decir, duern creados para la acuicultura intensiva o para la agricultura hidropónica',
      type: 'select',
    },
     {
      number: 13,
      question:
        '¿Los humedales con los que cuenta este territorio son artificiales? (es decir, duern creados para la acuicultura intensiva o para la agricultura hidropónica',
      type: 'select',
    },
     {
      number: 14,
      question:
        '¿Tienes un shapefile o archivo kml con los datos de la tierra a evaluar?',
      type: 'select',
    },
     {
      number: 15,
      question:
        '¿Tienes un shapefile o archivo kml con los datos de la tierra a evaluar?',
      type: 'select',
    },
     {
      number: 16,
      question: '¿Hay vegetación o árboles en la tierra?',
      type: 'select',
    },
     {
      number: 17,
      question:
        '¿Consideras que más del 30% del area de la tierra está cubierta de árboles de más de 5 metro (sin incluir pastos ni arbustos)?',
      type: 'select',
    },
     {
      number: 18,
      question: 'Actualmente, ¿cuál es el uso que tiene la tierra?',
      type: 'select',
    },
    {
      number: 19,
      question:
        '¿Anteriormente, existía un proyecto de carbono en este mismo territorio?',
      type: 'select',
    },
    {
      number: 20,
      question: 'Actualmente, ¿cuál es el uso que tiene la tierra?',
      type: 'select',
    },]
 
 

  actualQuestion!: Question;
 
  numberActualQuestion: number = 0;

  renderQuestion(number: number, direction: 'forward' | 'backward') {
    if(number === 1) // forward
    else if(number === 20) // backward
     else // todo lo demas
 
      if (direction === 'forward') {
       
        this.numberActualQuestion = this.numberActualQuestion+ 1;
      
        this.actualQuestion = this.questions[this.numberActualQuestion];
      }
      if(direction === 'backward'){
        this.numberActualQuestion = this.numberActualQuestion- 1;
      
        this.actualQuestion = this.questions[this.numberActualQuestion];
      }
      
  }
}
