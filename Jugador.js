"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var Persona_1 = require("./Persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(nombre, edad, posicion, numero, goles) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.posicion = posicion;
        _this.numero = numero;
        _this.goles = goles;
        return _this;
    }
    Jugador.prototype.anotarGol = function () {
        this.goles++;
    };
    Jugador.prototype.obtenerGoles = function () {
        return this.goles;
    };
    Jugador.prototype.obtenerDatos = function () {
        return "".concat(this.nombre, " tiene ").concat(this.edad, " a\u00F1os, juega de ").concat(this.posicion, " con la camiseta n\u00FAmero: ").concat(this.numero, " y lleva ").concat(this.goles, " goles anotados");
    };
    return Jugador;
}(Persona_1.Persona));
exports.Jugador = Jugador;
