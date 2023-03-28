class Singleton {
    private static instance: Singleton;

    private constructor () {}


    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Se crea la única instancia compartida a nivel de aplicaión
        }

        return Singleton.instance;
    }

    public mostrarPorConsola(){
        console.log("Método del Singletón")
    }
}