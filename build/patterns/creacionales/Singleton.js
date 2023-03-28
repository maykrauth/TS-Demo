"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Se crea la única instancia compartida a nivel de aplicaión
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log("Método del Singletón");
    }
}
//# sourceMappingURL=Singleton.js.map