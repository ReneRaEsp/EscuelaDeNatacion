import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-formulario-profesores',
  templateUrl: './formulario-profesores.component.html',
  styleUrls: ['./formulario-profesores.component.sass']
})
export class FormularioProfesoresComponent implements OnInit {
  nombreInput: string = "";
  apellidoInput: string = "";
  telefonoInput: string = "";
  correoInput: string = "";
  direccionInput: string = "";
  ciInput: string = "";
  salarioInput: number = 0;

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
  }
  
  agregarProfesor(){
    let profesor: Profesor = new Profesor(this.nombreInput, this.apellidoInput, this.telefonoInput, this.correoInput,
      this.direccionInput, this.ciInput, this.salarioInput);
    this.profesorService.agregar(profesor);
  }
}
