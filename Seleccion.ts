import { Jugador } from "./Jugador";
import { DirectorTecnico } from "./DirectorTecnico";
import { MedicoDeportivo } from "./MedicoDeportivo";

export class Seleccion{
    public jugadores:Jugador[];
    public DirectorTecnico:DirectorTecnico;
    public MedicoDeportivo:MedicoDeportivo;
    
    constructor(directorTecnico: DirectorTecnico, medicoDeportivo: MedicoDeportivo) {
        this.jugadores = [];
        this.DirectorTecnico = directorTecnico;
        this.MedicoDeportivo = medicoDeportivo;
    }

    public agregarJugador(jugador: Jugador): void{
        if(!this.jugadores.some(j=>j.numero===jugador.numero)){
            this.jugadores.push(jugador)
            console.log("Se ha agregado con exito el jugador")
        }else {
            console.log("Ese numero ya pertenece a alguién más")
        }
    }

    public quitarJugador(numero: number): void{
        const numeros = this.jugadores.filter(jugador=>jugador.numero===numero);
        if(numeros.length=== 0){
            console.log(`No se ha encontrado un jugador con el numero ${numero}]`)
        }else {
            this.jugadores=this.jugadores.filter(Jugador=> !numeros.includes(Jugador))
            console.log(`Se ha elimado con exito el jugador con el numero ${numero}`)
        }
    }

    public editarJugador(numero: number, posicion:string): void{
        const jugador = this.jugadores.find(jugador => jugador.numero === numero)
        if (jugador){
            jugador.posicion=posicion;
            console.log(`Se ha actualizado la posición del jugador con el número ${numero}.`);
        } else {
            console.log(`No se encontró un jugador con el número ${numero}.`);
        }
    }
    public listarJugadores(): string{
        let listado:string="";
        for (let i=0; i< this.jugadores.length;i++){
            listado += `
            Jugador: ${this.jugadores[i].nombre}
            Edad: ${this.jugadores[i].edad}
            Numero: ${this.jugadores[i].numero}
            Posicion: ${this.jugadores[i].posicion}
            Goles: ${this.jugadores[i].obtenerGoles()}`
        }
        return listado || 'No hay jugadores'
    }
}