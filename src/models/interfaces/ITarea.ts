//enum enumerados 
export enum Nivel{
    "Informativo",
    "Urgente",
    "Bloqueante"
}



//Interface sirve para definir la firma y los puntos necesarios a implementar por quien lo use
export interface ITarea{
    titulo: string,
    descripcion?: string,
    completada: boolean,
    urgencia?: Nivel,
    resumen: () => string
}