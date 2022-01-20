import { Component, OnInit } from '@angular/core';
import { ArregloService } from '../services/arreglo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  numeros: number[] = [];

  constructor(
    private arregloService: ArregloService
  ) { }

  ngOnInit(): void {
    console.log(this.arregloService.array);
    this.numeros = this.arregloService.array;
  }

}
