import { Curso } from "./Curso";

export class Estudiante {

    //Propiedades de clase
    nombre: string;
    apellido?:string;
    cursos: Curso[];
    //propiedad privada donde no se puede acceder por fuera, pero se arman burbujas para poder acceder get o set
    private ID: String ='123548' 


    //Constructor
    constructor(nombre:string, cursos: Curso[], apellido?: string){
        //Inicializamos la propiedad
        this.nombre= nombre;
        if(apellido){
            this.apellido= apellido;
        }
        this.cursos= cursos;
    }
    



    //Propiedad que podemos consultar en cualqui momento 
    //Get obtener new parametros, una funcion controlada y  devolver de forma controlada
    
    public get horasEstudiadas() : number {
        let horasEstudiadas = 0;
        
        this.cursos.forEach((cursos:Curso) =>{
            horasEstudiadas += cursos.horas
        })
        return horasEstudiadas;
    }
    // GET O SET especifico para acceder al ID
    //get ID_Estudiante () {
    //    return this.ID
    //}
    set ID_Estudiante(id: string){
        this.ID = id
    };
    //Funcion definida que se puede utilizar 
}


