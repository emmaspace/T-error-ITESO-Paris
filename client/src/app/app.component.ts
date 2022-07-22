import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './interfaces/question.interface';
import { RenderingQuestionsService } from './services/rendering-questions.service';
import { ZipCodeService } from './services/zip-code.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnChanges{

  title = 'Elegibilidad-proyectos-de-carbono';
  questions: Question[] = [ { number: 0, question: '¿Cuál es tu nombre?', type: 'input' , values:[ {value:"", viewValue:""}]},
    {
      number: 1,
      question: '¿En qué tipo de proyecto estás interesado?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
   {
      number: 2,
      question: '¿En qué estado de la república se encuentra?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 3,
      question: '¿En qué municipio se encuentra?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    { number: 4, question: '¿Cuál es el código postal?', type: 'select', values:[
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ]},
    {
      number: 5,
      question: '¿En qué colonia se encuentra?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 6,
      question: '¿Qué tipo de propiedad tiene la tierra que quieres evaluar?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
   {
      number: 7,
      question:
        '¿La tierra está legalizada y tiene todos sus papeles en regla?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 8,
      question: '¿Este territorio se ha utilizado para cultivar?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
   {
      number: 9,
      question:
        '¿El territorio se encuentra en una zona donde han ocurrido desastres naturales?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 10,
      question: '¿La tierra tiene humedales?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 11,
      question:
        '¿Los humedales con los que cuenta este territorio son artificiales? (es decir, duern creados para la acuicultura intensiva o para la agricultura hidropónica',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
     
     {
      number: 12,
      question:
        '¿Tienes un shapefile o archivo kml con los datos de la tierra a evaluar?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    
     {
      number: 13,
      question: '¿Hay vegetación o árboles en la tierra?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
     {
      number: 14,
      question:
        '¿Consideras que más del 30% del area de la tierra está cubierta de árboles de más de 5 metro (sin incluir pastos ni arbustos)?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
     {
      number: 15,
      question: 'Actualmente, ¿cuál es el uso que tiene la tierra?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 16,
      question:
        '¿Anteriormente, existía un proyecto de carbono en este mismo territorio?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },
    {
      number: 17,
      question: 'Actualmente, ¿cuál es el uso que tiene la tierra?',
      type: 'select',
      values:[
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ]
    },]

  actualNumberQuestion$!: Observable<number>;
 @Input() actualNumberQuestion!: number;
  constructor(private renderQuestion: RenderingQuestionsService){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void{
    const service = new ZipCodeService()
    console.log(service.getZipCodeInfo(54020))

    this.actualNumberQuestion$ = this.renderQuestion.getNumber()
   this.actualNumberQuestion$.subscribe(number => this.actualNumberQuestion = number)
   console.log(this.actualNumberQuestion)

  }
  
 
}
