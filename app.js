/**Si se va la luz y la pantalla se apaga
 * ¿La persona del turno A-014 perdió su turno?
 * NO
 */
/** codigo, nombre, tramite, modulo, atendido */
const turnos = [
    {codigo:"S-005", nombre:"Turalyon", tramite:"Solicitud de cita médica general", modulo:"A15", atendido:true},
    {codigo:"S-225", nombre:"Alleria", tramite:"Reclamo de medicamentos", modulo:"B05", atendido:false},
    {codigo:"S-184", nombre:"Sylvanas", tramite:"Autorización de cirugías", modulo:"C10", atendido:true},
    {codigo:"S-092", nombre:"Veressa", tramite:"Gestión de servicios de urgencias", modulo:"D02", atendido:true},
    {codigo:"S-103", nombre:"Arathor", tramite:"Inclusión de beneficiarios", modulo:"E09", atendido:true},
    {codigo:"S-0124", nombre:"Nathanos", tramite:"Solicitud de historia clínica", modulo:"F13", atendido:true},
];

const visornumero=document.getElementById("visornumero");
const visorModulo=document.getElementById("visorModulo");
const buscador=document.getElementById("buscador");
const contadorFila=document.getElementById("contadorFila");
const listaEspera=document.getElementById("listaEspera");
const btnLlamar=document.getElementById("btnLlamar");
const mensajeVacio=document.getElementById("mensajeVacio");

function pintarfila(params) {
    
}