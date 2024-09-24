import { IJugador } from "./IJugador";
import { Persona } from "./Persona";

export class Jugador extends Persona implements IJugador{
    public posicion:string;
    public numero:number;
    private goles:number;
    
    constructor(nombre:string,edad:number,posicion:string,numero:number,goles:number){
        super(nombre,edad);
        this.posicion=posicion;
        this.numero=numero;
        this.goles=goles;
    }

    public anotarGol(): void {
        this.goles ++
    }
    public obtenerGoles(): number {
        return this.goles;
    }

    public obtenerDatos(): string {
        return `${this.nombre} tiene ${this.edad} años, juega de ${this.posicion} con la camiseta número: ${this.numero} y lleva ${this.goles} goles anotados`
    }

}