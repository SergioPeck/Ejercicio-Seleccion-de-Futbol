import { Persona } from "./Persona";

export class MedicoDeportivo extends Persona{
    public especialidad
    
    constructor(nombre:string,edad:number,especialidad:string){
        super(nombre,edad);
        this.especialidad=especialidad;
    }

    public obtenerDatos(): string {
        return `${this.nombre} tiene ${this.edad} años y cuenta con la especilidad de: ${this.especialidad}`
    }
}
