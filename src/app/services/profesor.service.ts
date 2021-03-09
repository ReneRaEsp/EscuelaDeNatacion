import { Profesor } from "../models/profesor.model";

export class ProfesorService {
    
    profesores: Profesor[] = [
        new Profesor('Pedro','Perez', '98763892', 'correo@correo.com'
        , 'calle las flores 7777', '2283772', 3600),

        new Profesor('Maria','Gomez', '98334592', 'correote@correo.com'
        ,'calle las margaritas 337' ,'27905772', 3700)
    ];

    agregar(profesor: Profesor){
        let profesorInput = profesor.nombre;
        alert(`${profesorInput}`);
        let numero = this.profesores.push(profesor);
        alert(`${numero}`);
        alert(`${Profesor[1]}`);
        alert(`${Profesor[2]}`);
    };

}