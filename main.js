"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar las clases necesarias
var Jugador_1 = require("./Jugador");
var DirectorTecnico_1 = require("./DirectorTecnico");
var MedicoDeportivo_1 = require("./MedicoDeportivo");
var Seleccion_1 = require("./Seleccion");
// Testeo de la clase Seleccion
function pruebasSeleccion() {
    // Crear instancias de DirectorTecnico y MedicoDeportivo
    var dt = new DirectorTecnico_1.DirectorTecnico("Carlos", 50, "Alta");
    var medico = new MedicoDeportivo_1.MedicoDeportivo("Juan", 45, "Fisioterapia");
    // Crear instancia de Seleccion
    var seleccion = new Seleccion_1.Seleccion(dt, medico);
    // Crear jugadores
    var jugador1 = new Jugador_1.Jugador("Lionel Messi", 36, "Delantero", 10, 0);
    var jugador2 = new Jugador_1.Jugador("Cristiano Ronaldo", 39, "Delantero", 7, 0);
    var jugador3 = new Jugador_1.Jugador("Neymar", 32, "Delantero", 11, 0);
    var jugador4 = new Jugador_1.Jugador("Kylian Mbappé", 25, "Delantero", 10, 0); // Jugador con número repetido
    // 1. Agregar jugadores
    console.log("Prueba: Agregar jugadores");
    seleccion.agregarJugador(jugador1); // Agregar Messi
    seleccion.agregarJugador(jugador2); // Agregar Ronaldo
    seleccion.agregarJugador(jugador3); // Agregar Neymar
    seleccion.agregarJugador(jugador4); // Intentar agregar Mbappé con el mismo número que Messi
    console.log(seleccion.listarJugadores()); // Listar jugadores
    // 2. Editar jugador
    console.log("Prueba: Editar jugador");
    seleccion.editarJugador(10, "Extremo Derecho"); // Editar a Messi
    console.log(seleccion.listarJugadores()); // Listar después de la edición
    // 3. Anotar goles
    console.log("Prueba: Anotar goles");
    jugador1.anotarGol(); // Messi anota 1 gol
    jugador2.anotarGol(); // Ronaldo anota 1 gol
    jugador2.anotarGol(); // Ronaldo anota otro gol
    console.log(seleccion.listarJugadores()); // Listar después de anotar goles
    // 4. Quitar jugador
    console.log("Prueba: Quitar jugador");
    seleccion.quitarJugador(7); // Quitar a Ronaldo
    console.log(seleccion.listarJugadores()); // Listar después de quitar
    // 5. Intentar quitar un jugador que no existe
    console.log("Prueba: Intentar quitar un jugador que no existe");
    seleccion.quitarJugador(99); // Intentar quitar un número no registrado
    // 6. Intentar editar un jugador que no existe
    console.log("Prueba: Intentar editar un jugador que no existe");
    seleccion.editarJugador(99, "Defensa"); // Intentar editar un número no registrado
    // 7. Listar jugadores finales
    console.log("Listado final de jugadores:");
    console.log(seleccion.listarJugadores());
}
// Ejecutar pruebas
pruebasSeleccion();
