import { Component, OnInit } from '@angular/core';
import { ZipCodeService } from './services/zip-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Elegibilidad-proyectos-de-carbono';
  
  ngOnInit(): void{
    const service = new ZipCodeService()
    console.log(service.getZipCodeInfo(54020))
  }
}
