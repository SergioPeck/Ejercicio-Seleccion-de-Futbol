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
exports.MedicoDeportivo = void 0;
var Persona_1 = require("./Persona");
var MedicoDeportivo = /** @class */ (function (_super) {
    __extends(MedicoDeportivo, _super);
    function MedicoDeportivo(nombre, edad, especialidad) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.especialidad = especialidad;
        return _this;
    }
    MedicoDeportivo.prototype.obtenerDatos = function () {
        return "".concat(this.nombre, " tiene ").concat(this.edad, " a\u00F1os y cuenta con la especilidad de: ").concat(this.especialidad);
    };
    return MedicoDeportivo;
}(Persona_1.Persona));
exports.MedicoDeportivo = MedicoDeportivo;
