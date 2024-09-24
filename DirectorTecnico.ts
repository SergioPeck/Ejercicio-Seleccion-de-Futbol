import { Persona } from "./Persona";

export class DirectorTecnico extends Persona{
    public nivelDeExperiencia:string;
    constructor(nombre:string,edad:number,experiencia:string){
        super(nombre,edad);
        this.nivelDeExperiencia=experiencia;
    }

    public obtenerDatos(): string {
        return `${this.nombre} tiene ${this.edad} años con un nivel de experiencia de: ${this.nivelDeExperiencia}`
    }
}