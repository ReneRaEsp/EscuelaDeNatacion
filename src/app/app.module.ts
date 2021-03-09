//Angular Services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Routing
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { AlumnosMenoresComponent } from './components/alumnos-menores/alumnos-menores.component';
import { AlumnosMayoresComponent } from './components/alumnos-mayores/alumnos-mayores.component';
import { HorarioComponent } from './components/horario/horario.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { RepresentantesComponent } from './components/representantes/representantes.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
//Servicios
import { ProfesorService } from './services/profesor.service';
import { FormularioProfesoresComponent } from './components/formulario-profesores/formulario-profesores.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosMenoresComponent,
    AlumnosMayoresComponent,
    HorarioComponent,
    ProfesoresComponent,
    RepresentantesComponent,
    MainComponent,
    HeaderComponent,
    FormularioProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProfesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
