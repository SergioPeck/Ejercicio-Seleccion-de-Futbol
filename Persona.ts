export abstract class Persona{
    public nombre:string;
    public edad:number

    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    public abstract obtenerDatos():string;
}