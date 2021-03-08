import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  mensaje: string;
  aMayores = false;
  aMenores = false;
  horario = false;
  representantes = false;
  profesores = true;

  constructor() { }

  ngOnInit(): void {
    
  }
  mostrarAlumnosMayores(){
    this.aMenores = false;
    this.aMayores = true;
    this.horario = false;
    this.representantes = false;
    this.profesores = false;
  }
  mostrarAlumnosMenores(){
    this.aMenores = true;
    this.aMayores = false;
    this.horario = false;
    this.representantes = false;
    this.profesores = false;
  }
  mostrarHorario(){
    this.aMenores = false;
    this.aMayores = false;
    this.horario = true;
    this.representantes = false;
    this.profesores = false;
  }
  mostrarProfesores(){
    this.aMenores = false;
    this.aMayores = false;
    this.horario = false;
    this.representantes = false;
    this.profesores = true;
  }
  mostrarRepresentantes(){
    this.aMenores = false;
    this.aMayores = false;
    this.horario = false;
    this.representantes = true;
    this.profesores = false;
  }

}
