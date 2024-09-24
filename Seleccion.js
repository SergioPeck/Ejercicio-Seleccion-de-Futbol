"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(directorTecnico, medicoDeportivo) {
        this.jugadores = [];
        this.DirectorTecnico = directorTecnico;
        this.MedicoDeportivo = medicoDeportivo;
    }
    Seleccion.prototype.agregarJugador = function (jugador) {
        if (!this.jugadores.some(function (j) { return j.numero === jugador.numero; })) {
            this.jugadores.push(jugador);
            console.log("Se ha agregado con exito el jugador");
        }
        else {
            console.log("Ese numero ya pertenece a alguién más");
        }
    };
    Seleccion.prototype.quitarJugador = function (numero) {
        var numeros = this.jugadores.filter(function (jugador) { return jugador.numero === numero; });
        if (numeros.length === 0) {
            console.log("No se ha encontrado un jugador con el numero ".concat(numero, "]"));
        }
        else {
            this.jugadores = this.jugadores.filter(function (Jugador) { return !numeros.includes(Jugador); });
            console.log("Se ha elimado con exito el jugador con el numero ".concat(numero));
        }
    };
    Seleccion.prototype.editarJugador = function (numero, posicion) {
        var jugador = this.jugadores.find(function (jugador) { return jugador.numero === numero; });
        if (jugador) {
            jugador.posicion = posicion;
            console.log("Se ha actualizado la posici\u00F3n del jugador con el n\u00FAmero ".concat(numero, "."));
        }
        else {
            console.log("No se encontr\u00F3 un jugador con el n\u00FAmero ".concat(numero, "."));
        }
    };
    Seleccion.prototype.listarJugadores = function () {
        var listado = "";
        for (var i = 0; i < this.jugadores.length; i++) {
            listado += "\n            Jugador: ".concat(this.jugadores[i].nombre, "\n            Edad: ").concat(this.jugadores[i].edad, "\n            Numero: ").concat(this.jugadores[i].numero, "\n            Posicion: ").concat(this.jugadores[i].posicion, "\n            Goles: ").concat(this.jugadores[i].obtenerGoles());
        }
        return listado || 'No hay jugadores';
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
