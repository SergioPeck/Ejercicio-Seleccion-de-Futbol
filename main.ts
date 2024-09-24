// Importar las clases necesarias
import { Jugador } from "./Jugador";
import { DirectorTecnico } from "./DirectorTecnico";
import { MedicoDeportivo } from "./MedicoDeportivo";
import { Seleccion } from "./Seleccion";

// Testeo de la clase Seleccion
function pruebasSeleccion() {
    // Crear instancias de DirectorTecnico y MedicoDeportivo
    const dt = new DirectorTecnico("Carlos", 50, "Alta");
    const medico = new MedicoDeportivo("Juan", 45, "Fisioterapia");

    // Crear instancia de Seleccion
    const seleccion = new Seleccion(dt, medico);

    // Crear jugadores
    const jugador1 = new Jugador("Lionel Messi", 36, "Delantero", 10, 0);
    const jugador2 = new Jugador("Cristiano Ronaldo", 39, "Delantero", 7, 0);
    const jugador3 = new Jugador("Neymar", 32, "Delantero", 11, 0);
    const jugador4 = new Jugador("Kylian Mbappé", 25, "Delantero", 10, 0); // Jugador con número repetido

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
