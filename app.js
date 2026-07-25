/**Si se va la luz y la pantalla se apaga
 * ¿La persona del turno A-014 perdió su turno?
 * NO
 */
/** codigo, nombre, tramite, modulo, atendido */
const turnos = [
    { codigo: "S-005", nombre: "Turalyon", tramite: "Solicitud de cita médica general", modulo: "A15", atendido: true },
    { codigo: "S-225", nombre: "Alleria", tramite: "Reclamo de medicamentos", modulo: "B05", atendido: false },
    { codigo: "S-184", nombre: "Sylvanas", tramite: "Autorización de cirugías", modulo: "C10", atendido: false },
    { codigo: "S-092", nombre: "Veressa", tramite: "Gestión de servicios de urgencias", modulo: "D02", atendido: true },
    { codigo: "S-103", nombre: "Arathor", tramite: "Inclusión de beneficiarios", modulo: "E09", atendido: true },
    { codigo: "S-0124", nombre: "Nathanos", tramite: "Solicitud de historia clínica", modulo: "F13", atendido: false },/**
    el codigo de 4 digitos es intencional */
];
const visornumero = document.getElementById("visornumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const listaEspera = document.getElementById("listaEspera");
const mensajeVacio = document.getElementById("mensajeVacio");
const btnLlamar = document.getElementById("btnLlamar");

function pintarfila() {
    listaEspera.innerHTML = ""; /**innerHTML > elimina el contenido de ese "elemento" */
    for (let i = 0; i < turnos.length; i++) {
        const nuevoItem = document.createElement("li"); /**createElement("li") = <li> en HTML */
        const nuevoSpan = document.createElement("span");
        nuevoItem.appendChild(nuevoSpan); /** lo que hacemos es que en nuevoItem <li> agregue la etiqueta nuevoSpan(<span>) */
        const nuevoDiv = document.createElement("div");
        nuevoItem.appendChild(nuevoDiv);
        const nuevoP1 = document.createElement("p");
        nuevoDiv.appendChild(nuevoP1);
        const nuevoP2 = document.createElement("p");
        nuevoDiv.appendChild(nuevoP2);
        const otroSpan = document.createElement("span");
        nuevoItem.appendChild(otroSpan);

        nuevoItem.classList.add("turno"); /**classList.add para agregar class="turno" */
        nuevoSpan.classList.add("turno__codigo");
        nuevoDiv.classList.add("turno__datos");
        nuevoP1.classList.add("turno__nombre");
        nuevoP2.classList.add("turno__tramite");
        otroSpan.classList.add("turno__estado");

        nuevoSpan.textContent = turnos[i].codigo;
        nuevoP1.textContent = turnos[i].nombre;
        nuevoP2.textContent = turnos[i].tramite + "-" + turnos[i].modulo;
        if (turnos[i].atendido) { /**Comparación booleana */
            otroSpan.textContent = "Atendido";
            nuevoItem.classList.add("turno--atendido");
        } else {
            otroSpan.textContent = "En espera";
        }
        listaEspera.appendChild(nuevoItem);
    }
}
pintarfila();

function llamarSiguiente() {
    let haymasturnos = false; /** esta variable pregunta si hay mas turnos pendientes */
    for (let i = 0; i < turnos.length; i++) {
        if (!turnos[i].atendido) { /**aqui pregunto que si los turnos no son true entonces */
            turnos[i].atendido = true; /**aqui verificamos que los turnos pendientes cambien de estado */
            visornumero.textContent = turnos[i].codigo;
            visorModulo.textContent = turnos[i].modulo;
            pintarfila();
            haymasturnos = true; /**aqui confirmamos que habian mas turnos pendientes */
            break;
        }
    }
    if (!haymasturnos) { /**aqui decimos que como ya se comprobo que todos los turnos estan atendidos */
        visornumero.textContent = "— — —";/**entonces reemplace el visor de numero con el nuevo texto */
    }
}
btnLlamar.addEventListener("click", llamarSiguiente/*function(){
    llamarSiguiente();
}*/);