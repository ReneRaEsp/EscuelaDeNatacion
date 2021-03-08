import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosMayoresComponent } from './components/alumnos-mayores/alumnos-mayores.component';
import { AlumnosMenoresComponent } from './components/alumnos-menores/alumnos-menores.component';
import { HeaderComponent } from './components/header/header.component';
import { HorarioComponent } from './components/horario/horario.component';
import { MainComponent } from './components/main/main.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { RepresentantesComponent } from './components/representantes/representantes.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'alumnos-mayores', component: AlumnosMayoresComponent},
  { path: 'profesores', component: ProfesoresComponent},
  { path: 'alumnos-menores', component: AlumnosMenoresComponent},
  { path: 'representantes', component: RepresentantesComponent},
  { path: 'horario', component: HorarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
