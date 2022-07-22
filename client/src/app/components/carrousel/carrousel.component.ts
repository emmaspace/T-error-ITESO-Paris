import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  animations: [
    trigger('enterState1', [
      state(
        'void',
        style({
          transform: 'translateX(0)',
          opacity: 0,
        })
      ),
     
    ]),
  ],
})
export class CarrouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
