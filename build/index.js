"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookies_utils_1 = require("cookies-utils");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const cursos_mock_1 = require("./mock/cursos.mock");
const Persona_1 = require("./models/Persona");
const ITarea_1 = require("./models/interfaces/ITarea");
const Programar_1 = require("./models/Programar");
console.log("Hola TypeScript");
//TS tiene una base muy fuerte de javaScripts
/*Para que el codigo este siembre en index.js debemos ir a la terminar usar
npm run transpilation ejecutarlo */
//Declaracion de Variables:
let nombre = 'Mayra';
//concadenacion 
console.log("Hola, " + nombre);
console.log("Que tal", nombre, "?");
console.log(`¿Como han ido las vacaciones, ${nombre}?`);
//concadenar varios valores en un string
let email = "may@imaginagroup.com"; //variable de ambito local
console.log(`Email de ${nombre} es ${email}`);
//No son variables son constantes No se pueden modificar 
const pi = 3.141592;
//Tipado Fuerte, Tipado Debil, Tipado Inferido 
//:any es que puede ser cualquier cosa 
let nombre2 = " jose ";
let apellido = "costa";
apellido = 3;
const años = 45;
let error;
error = false;
//instanciacion múltiplede variables
//BuiltIn Types: number, string, boolean, void, null, undefined
//instancia 3 variables sin valor inicial 
let a, b, c;
a = "TypeScript";
b = 8.9;
c = true;
//tipos mas complejos 
let listaTareas = ["tarea 1", "tarea 2"];
//combinacion de tipos en listas
let valores = [false, "Hola", true, 56];
//Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
//podemos crear variables que sigan la interface tarea
let tarea1 = {
    nombre: "tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);
//asignacion multiplede variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
};
//declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgenica = miTarea.urgencia;
//**Factor Spread  */
//declaraciones con factor de propagacion
let { titulo, estado, urgencia } = miTarea;
//listas
let listaCompraLunes = ["leche", "azucar"];
let listaComprasMartes = [...listaCompraLunes, "carne", "pescado"];
//en objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer165364684"
};
//Cambiar un valor por propagacion
let newEstado = Object.assign(Object.assign({}, estadoApp), { Session: 4 });
let auto = {
    nombre: "Harina",
    precios: 145.00,
    anio: 2010
};
// **Condicionales
//operados ternarios
console.log(auto.anio < 2010 ? `Auto: ${auto.nombre} es viejo` : `Auto: ${auto.nombre} es nuevo`);
//if -else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("no hay un error");
}
//if -else if -else
if (auto.anio < 2010) {
    console.log(`Auto: ${auto.nombre} es viejo`);
}
else if (auto.anio === 2010) {
    console.log(`Auto: ${auto.nombre} es del 2010`);
}
else {
    console.log(`Auto: ${auto.nombre} es nuevo`);
}
//switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no esta completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente");
        break;
    default:
        break;
}
//trycatch capturar errores
/*try {
    
} catch (error) {
    
}*/
//**Bucles 
let listaTareasNueva = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
];
//forEanch listas 
listaTareasNueva.forEach((tarea, index) => {
    console.log(` ${index} - ${tarea.nombre} `);
});
/*forin es un bucle va a iterar sobre un objeto, cadena de texto
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/
//for clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(` ${index} - ${tarea.nombre} `);
}
//di while se ejecuta al menos una vez 
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
//Funciones
/**
 * Documentar funciones que muestra el saludo por consola
 */
function saludar() {
    let nombre = "Mayra";
    console.log(`Hello World ${nombre}!`);
}
//invocación de la función 
saludar();
/**
 *
 * @param nombre nombre de la persona
 */
function saludarPersona(nombre) {
    console.log(`Hello World ${nombre}!`);
}
saludarPersona("Mayra");
/**
 * Función que muestra un saludo por consola a terminado ente
 * @param nombre nombre de la persona al saludar, por defecto sera "Pepe"
 */
function despedirPersona(nombre = "Pepe") {
    console.log(`Adiós, ${nombre}!`);
}
despedirPersona(); //Adios, Pepe
despedirPersona("Maria"); //Adios, Maria
/**
 * Función que muestra adios por consola
 * @param nombre (opcional) nombre de la persona a despedir
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adiós, ${nombre}!`);
    }
    else {
        console.log(`Adiós!`);
    }
}
despedidaOpcional();
//parametro opcionales
function variosParams(nombre, apellido, edad = 18) {
    if (apellido) {
        console.log(`${nombre} ${apellido}, tiene ${edad} años!`);
    }
    else {
        console.log(`${nombre}, tiene ${edad} años!`);
    }
}
variosParams("Martin"); //por defecto martin tiene 18 años
variosParams("Martin", undefined, 30); //por defecto martin tiene 30 años
function ejemploVariosTipos(a) {
    if (typeof (a) === 'string') {
        console.log("A es de tipo string");
    }
    else if (typeof (a) === 'number') {
        console.log("A es de tipo number");
    }
    else {
        console.log("A no es ni string, ni number");
        throw Error("A no es ni string, ni number");
    }
}
ejemploVariosTipos(2);
ejemploVariosTipos("Hola");
/**
 *
 * @param nombre
 * @param apellidos
 * @returns nombre completo
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Martin", "Jose");
console.log(nombreCompleto);
/**
 *
 * @param nombre es una lista de nombres de string
 */
function ejemploMultipleParams(...nombre) {
    nombre.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Jose", "Santi", "Pepe");
const list = ["alberto", "maria", "jose"];
ejemploMultipleParams(...list);
function ejemploParamsLista(nombre) {
    nombre.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamsLista(list);
let empleadoMartin = {
    nombre: "Martin",
    apellido: "Gomez",
    edad: 25
};
const mostrarEmpleados = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
//Llamamos a la función 
mostrarEmpleados(empleadoMartin);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilación `;
    }
    else {
        return `Empleado ${empleado.nombre} está en edad laboral `;
    }
};
datosEmpleado(empleadoMartin);
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); //callback a ejecutar 
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleadoMartin, () => 'Cobrar Martin');
// Async Functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        //Await
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch((error) => {
    console.log("Ha habido un error", error);
}).finally(() => "Todo ha terminado");
//generadoras Generators*
function* ejemploGenerator() {
    //Yield :emitir valores o ejecutar valores
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
//Guardamos la función generadora en una variable
let generadora = ejemploGenerator();
//Accedemos a los valores emitidos
//next el siguente valor emitido 
console.log(generadora.next().value); //0
//worker emitir y definir valores estado de la aplicacion 
//watcher es el encargado de llamar a worker 
//yield* para llamar a otra funcion 
function* watcher(valor) {
    yield valor; //emitimos el valor inicial
    yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // emitimos el valor final + 4
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)
//Sobrecarga de funciones 
//Se resuelve con parametros del mismo tipo 
function mostrarError(error) {
    console.log("Ha habido un error", error);
}
/*aca vemos sobrecarga, para solucionar el problema
para no hacer dos funciones con el mismo tipo, usamos | and
function mostrarError(errorNumber: number): void {
    console.log("Ha habido un error", errorNumber);
}
*/
//Persistencia de datos
/**
 * 1.localStorage => Almacena los datos en el navegador (no se elimina automaticamen)
 * 2.SessionStorage => La direfencia radica en la sesión del navegador.
 * Es decir, los datos se persisten en la sesion de navegador
 * 3.Cookies => Tienen una fecha de caducidad y tambien tiene un ámbito de URL
 */
//LocalStorage y SessionStorage
function guardar() {
    localStorage.set("nombre", "Martin");
    sessionStorage.set("nombre", "Martin");
}
function leer() {
    let nombre = localStorage.get("nombre");
    let nombreSession = sessionStorage.get("nombre");
}
function borrarItem(item) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}
function borrartodas() {
    localStorage.clear();
    sessionStorage.clear();
}
//Cookies
//const cookieOptions = {
//    name: "usuario", // string,
//    value: "Martin", // string,
//    maxAge: 10 * 60, // optional number (value in seconds),
//    expires: new Date(2099, 10, 1), // optional Date,
//    path: "/path", // optional string,
//    
//};
//Seteamos Cookies
//setCookie(cookieOptions);
//Leer una Cookie
let cookieLeida = (0, cookies_utils_1.getCookieValue)("usuario");
//Eliminar
(0, cookies_utils_1.deleteCookie)("usuario");
//Eliminar todas las Cookies
(0, cookies_utils_1.deleteAllCookies)();
//Crear Clase Temporizador
class Temporizador {
    //Vento de tiempo
    empezar() {
        setTimeout(() => {
            //Comprobamos que exista la funcion terminar como callback
            if (!this.terminar)
                return;
            //Cuando haya pasado el tiempo, se ejecutará la funcion terminar
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
//Definimos la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado en:", tiempo);
};
//Lanzamos el temporizador
miTemporizador.empezar(); //Se inica el timeout y cuando termine, se ejecuta la funcion terminar()
//setInterval(() => console.log("tic"), 1000) //imprimir"tic" cada segundo por consola
//Eliminar la ejecución de la función
delete miTemporizador.terminar;
//Cuando Se trabaja con app 
/**
 *  document.getElementById("bton-login").addEventListener('click', ()=>{
    console.log("Has hecho click en login")})
 */
//** CLASES
//Creamos un curso 
//const cursoTS: Curso= new Curso("TypeScript", 15);
//const cursojS: Curso= new Curso("JavaScript", 20);
//listaCursos.push(cursoTS,cursojS); //[Lista de cursos]
//Usamos MOCK
//Datos inventados 
const listaCursos = cursos_mock_1.LISTA_CURSOS;
//Creamos un Estudiante
const martin = new Estudiante_1.Estudiante("Martín", listaCursos, "San jose");
console.log(`${martin.nombre} estudia:`);
//Iteramos por cada uno de ellos 
martin.cursos.forEach((curso) => {
    console.log(`-${curso.nombre} (${curso.horas} horas)`); //typescript(15 horas)
});
const cursoAngular = new Curso_1.Curso("Angular", 40);
martin.cursos.push(cursoAngular); //Añadimos
//Conocer Horas Estudiadas 
martin.horasEstudiadas; //number
//martin.ID_Estudiante;
//Saber la instancia de un objeto/variable
//instanceof => define un tipo en concreto, instancia 
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Date) {
    console.log("Es una inatancia de Date");
}
if (martin instanceof Estudiante_1.Estudiante) {
    console.log("Martín es un Estudiante");
}
//Herencia y Polimorfismo
let trabajador1 = new Persona_1.Trabajador("Martin", "San Jose", 30, 2000);
let trabajador2 = new Persona_1.Trabajador("Matias", "Garcia", 21, 1000);
let trabajador3 = new Persona_1.Trabajador("Juan", "Pepe", 40, 4000);
let jefe = new Persona_1.Jefe("Pablo", "Gonzales", 50);
jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);
//trabajador1.saludar();//Especificado en Empleado
jefe.saludar(); //Herencia Persona
jefe.trabajadores.forEach((trabajador) => {
    trabajador.saludar(); //Especificado en Trabajador
});
// * Uso de Interface 
let programar = {
    titulo: "Programar en TypeScript",
    descripcion: "Practicar con Katas para aprender a desarrollar con ts",
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo}- ${this.completada} -Nivel: ${this.urgencia}`;
    }
};
console.log(programar.resumen());
//Tarea de Programación (implementa ITarea)
let promarTS = new Programar_1.Programar("TypeScript", "Tarea de programación TS", false, ITarea_1.Nivel.Bloqueante);
console.log(promarTS.resumen());
//Decoradores experimentales -> @
//- Clases
//- Parámetros
//- Métodos
//- Propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Martín";
    }
}
__decorate([
    Override('Prueba') //Llamar a la funcion Ovarride
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre); //"Prueba" siempre va a ser devuelto a través del get();
// Otra función para usarla como decorador
function SoloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = '';
    }
}
__decorate([
    SoloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martín";
console.log(pruebaLectura.nombre); //  ===> Undefiend, yaque no se le puede dar valor (Es solo lectura)
//Decorador para parámetros de un método
function mostrarPosicion(target, propertyKey, parameterIndex) {
    console.log("Posición", parameterIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
//Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba('Hola', false);
/** Patrones:
 * 1. Patrones Creacionales
 * - Mecanismos de creación de Objetos
 * - Reutilización del código
 * - Ofrecer flexibilidad al código
 *
 * 2. Patrones Estructurales
 * -Eficiencia y flexibilidad de la estructura a la hora de definir clases y objetos
 *
 * 3. Patrones de Comportamiento
 * - Centrados en la asignación efectiva de responsabilidad entre objetos
 * - Comunicación efectiva entre objetos
 * *** Patrones de Diseño a Nivel Global
 * https://refactoring.guru/es/design-patterns/catalog
 */
//* PATRONES CREACIONALES
const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();
//Comprueba si ambos son iguales
if (miPrimerSingleton === miSegundoSingleton) {
    console.log('Sigletón funciona correctamente, ambas variables contienen la misma instancia.');
    miPrimerSingleton.mostrarPorConsola();
    miSegundoSingleton.mostrarPorConsola();
}
else {
    console.log('Error, las variables contienen distintas instancias');
}
//# sourceMappingURL=index.js.map