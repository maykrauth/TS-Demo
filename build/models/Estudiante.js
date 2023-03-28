"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    //Constructor
    constructor(nombre, cursos, apellido) {
        //propiedad privada donde no se puede acceder por fuera, pero se arman burbujas para poder acceder get o set
        this.ID = '123548';
        //Inicializamos la propiedad
        this.nombre = nombre;
        if (apellido) {
            this.apellido = apellido;
        }
        this.cursos = cursos;
    }
    //Propiedad que podemos consultar en cualqui momento 
    //Get obtener new parametros, una funcion controlada y  devolver de forma controlada
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((cursos) => {
            horasEstudiadas += cursos.horas;
        });
        return horasEstudiadas;
    }
    // GET O SET especifico para acceder al ID
    //get ID_Estudiante () {
    //    return this.ID
    //}
    set ID_Estudiante(id) {
        this.ID = id;
    }
    ;
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map