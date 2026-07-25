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
    { codigo: "S-0124", nombre: "Nathanos", tramite: "Solicitud de historia clínica", modulo: "F13", atendido: false },
];

const visornumero = document.getElementById("visornumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const btnLlamar = document.getElementById("btnLlamar");
const mensajeVacio = document.getElementById("mensajeVacio");

function pintarfila() {
    const listaEspera = document.getElementById("listaEspera");
    listaEspera.innerHTML = ""; /**innerHTML > elimina el contenido de ese "elemento" */
    for (let i = 0; i < turnos.length; i++) {
        const nuevoItem = document.createElement("li");
        listaEspera.appendChild(nuevoItem);
        const nuevoSpan = document.createElement("span");
        nuevoItem.appendChild(nuevoSpan);
        const nuevoDiv = document.createElement("div");
        nuevoItem.appendChild(nuevoDiv);
        const nuevoP1 = document.createElement("p");
        nuevoDiv.appendChild(nuevoP1);
        const nuevoP2 = document.createElement("p");
        nuevoDiv.appendChild(nuevoP2);
        const otroSpan = document.createElement("span");
        nuevoItem.appendChild(otroSpan);

        nuevoItem.classList.add("turno"); /**classList.add para agregar class="turno" */
        nuevoSpan.classList.add("turno_codigo");
        nuevoDiv.classList.add("turno_datos");
        nuevoP1.classList.add("turno_nombre");
        nuevoP2.classList.add("turno_tramite");
        otroSpan.classList.add("turno_estado")
    }
}