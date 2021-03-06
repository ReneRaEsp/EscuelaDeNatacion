import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.sass']
})
export class ProfesoresComponent implements OnInit {
  nombreInput: string = "";
  apellidoInput: string = "";
  telefonoInput: string = "";
  correoInput: string = "";
  direccionInput: string = "";
  ciInput: string = "";
  salarioInput: number = 0;
  formulario: boolean = false;
  profesores: Profesor[];

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.profesores = this.profesorService.profesores;
  }
  mostrarFormulario(){
    this.formulario = true;
  }
  ocultarFormulario(){
    this.formulario = !true;
  }
  agregarProfesor(){
    let profesor: Profesor = new Profesor(this.nombreInput, this.apellidoInput, this.telefonoInput, this.correoInput,
      this.direccionInput, this.ciInput, this.salarioInput);
    this.profesorService.agregar(profesor);
    this.formulario = !true;
  }

}
