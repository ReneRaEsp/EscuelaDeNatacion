import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesorService } from 'src/app/models/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.sass']
})
export class ProfesoresComponent implements OnInit {
  profesores: Profesor[];

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.profesores = this.profesorService.profesores;
  }

}
