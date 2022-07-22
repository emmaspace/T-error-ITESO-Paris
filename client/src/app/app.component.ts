import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './interfaces/question.interface';
import { RenderingQuestionsService } from './services/rendering-questions.service';
import { ZipCodeService } from './services/zip-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  title = 'Elegibilidad-proyectos-de-carbono';
  questions: Question[] = [
    {
      number: 0,
      question: '¿Cuál es tu nombre?',
      type: 'input',
      values: [{ value: '', viewValue: '' }],
      url: 'https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      number: 1,
      question: '¿En qué tipo de proyecto estás interesado?',
      type: 'select',
      values: [
        { value: 'reforestacion', viewValue: 'Reforestacion' },
        { value: 'manejo forestal mejorado', viewValue: 'Manejo forestal mejorado' },
        { value: 'Sistemas agroforestales', viewValue: 'Sistemas agroforestales' },
        { value: "null" , viewValue: 'Sistemas agroforestales' },
      ],
      url: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      number: 2,
      question: '¿En qué estado de la república se encuentra?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1542879104-139e53f04314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    },
    {
      number: 3,
      question: '¿En qué municipio se encuentra?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1525638331105-b12e8e317283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      number: 4,
      question: '¿Cuál es el código postal?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1528061741848-d825d32057f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      number: 5,
      question: '¿En qué colonia se encuentra?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1520497636389-a99123065b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      number: 6,
      question: '¿Qué tipo de propiedad tiene la tierra que quieres evaluar?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1623401416948-1f0a11a49ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 7,
      question:
        '¿La tierra está legalizada y tiene todos sus papeles en regla?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1657865700616-7ba48322a346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 8,
      question: '¿Este territorio se ha utilizado para cultivar?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1632833690610-193ea87a7c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 9,
      question:
        '¿El territorio se encuentra en una zona donde han ocurrido desastres naturales?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1621000801692-584eecc58d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 10,
      question: '¿La tierra tiene humedales?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1541086263351-627c0c6999aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 11,
      question:
        '¿Los humedales con los que cuenta este territorio son artificiales? (es decir, duern creados para la acuicultura intensiva o para la agricultura hidropónica',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1632052376495-1cc272939b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },

    {
      number: 12,
      question:
        '¿Tienes un shapefile o archivo kml con los datos de la tierra a evaluar?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1605784625692-4db03845e558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },

    {
      number: 13,
      question: '¿Hay vegetación o árboles en la tierra?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1445346753792-6c667d917349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 14,
      question:
        '¿Consideras que más del 30% del area de la tierra está cubierta de árboles de más de 5 metro (sin incluir pastos ni arbustos)?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1445792717459-f91f27228609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
    {
      number: 15,
      question: 'Actualmente, ¿cuál es el uso que tiene la tierra?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1462717909674-1e3e107e231b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      number: 16,
      question:
        '¿Anteriormente, existía un proyecto de carbono en este mismo territorio?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1508144322886-717c284ab392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      number: 17,
      question: 'Actualmente, ¿cuál es el uso que tiene la tierra?',
      type: 'select',
      values: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
      ],
      url: 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  actualNumberQuestion$!: Observable<number>;
  @Input() actualNumberQuestion!: number;
  constructor(private renderQuestion: RenderingQuestionsService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    const service = new ZipCodeService();
    console.log(service.getZipCodeInfo(54020));

    this.actualNumberQuestion$ = this.renderQuestion.getNumber();
    this.actualNumberQuestion$.subscribe(
      (number) => (this.actualNumberQuestion = number)
    );
    console.log(this.actualNumberQuestion);
  }
}
