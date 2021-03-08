import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ProfesorService } from './models/profesor.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosMenoresComponent,
    AlumnosMayoresComponent,
    HorarioComponent,
    ProfesoresComponent,
    RepresentantesComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
