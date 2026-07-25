/*==================================================================================================
        ¡PARA PENSAR!
* ==================================================================================================
*Si se va la luz y la pantalla se apaga
 * ¿La persona del turno A-014 perdió su turno?
 * NO
* ==================================================================================================*/
const turnos = [
    { codigo: "S-005", nombre: "Turalyon", tramite: "Solicitud de cita médica general", modulo: "A15", atendido: true },
    { codigo: "S-225", nombre: "Alleria", tramite: "Reclamo de medicamentos", modulo: "B05", atendido: false },
    { codigo: "S-184", nombre: "Sylvanas", tramite: "Autorización de cirugías", modulo: "C10", atendido: false },
    { codigo: "S-092", nombre: "Veressa", tramite: "Gestión de servicios de urgencias", modulo: "D02", atendido: true },
    { codigo: "S-103", nombre: "Arathor", tramite: "Inclusión de beneficiarios", modulo: "E09", atendido: true },
    { codigo: "S-0124", nombre: "Nathanos", tramite: "Solicitud de historia clínica", modulo: "F13", atendido: false },/**
    el codigo de 4 digitos es intencional */
];
/*==================================================================================================
        ¡PARA PENSAR!
* ==================================================================================================
*Acabas de escribir seis turnos y guardaste el archivo. Mira la pantalla
* ¿Qué ves en la fila de espera? Nada, y ya estaba pensando que hice mal
* Si no ves nada, ¿El arreglo existe o no existe? cuando leí esta pregunta: pues si existe
* ¿Qué le falta a tu programa para que lo que existe en memoria aparezca en pantalla?
* Aquí entendi que hacia falta conectarla
* ==================================================================================================*/
const visornumero = document.getElementById("visornumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const listaEspera = document.getElementById("listaEspera");
const mensajeVacio = document.getElementById("mensajeVacio");
const btnLlamar = document.getElementById("btnLlamar");

function pintarFila() {
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
        nuevoP2.textContent = turnos[i].tramite + "  -  " + turnos[i].modulo;
        if (turnos[i].atendido) { /**Comparación booleana */
            otroSpan.textContent = "Atendido";
            nuevoItem.classList.add("turno--atendido"); /**PUNTO 3 */
        } else {
            otroSpan.textContent = "En espera";
        }
        nuevoItem.dataset.codigo = turnos[i].codigo;/**PUNTO 5 */
        nuevoItem.dataset.modulo = turnos[i].modulo;/**PUNTO 5 */
        const btnCancelar = document.createElement("button");
        btnCancelar.classList.add("turno__cancelar");
        btnCancelar.textContent = "Cancelar";
        nuevoItem.appendChild(btnCancelar);
        btnCancelar.dataset.cancelar = "Cancelar";
        
        listaEspera.appendChild(nuevoItem);
    }
    actualizarContador();/**PUNTO 4 */
}
pintarFila();
/*==================================================================================================
        ¡PARA PENSAR!
* ==================================================================================================
*createElement crea un elemento, pero no aparece en pantalla hasta que usas appendChild.
*¿Dónde está el elemento en el momento entre las dos instrucciones? almacenada en la variable
*
* ==================================================================================================*/
function llamarSiguiente() {
    let haymasturnos = false; /** esta variable pregunta si hay mas turnos pendientes */
    for (let i = 0; i < turnos.length; i++) {
        if (!turnos[i].atendido) { /**aqui pregunto que si los turnos no son true entonces */
            turnos[i].atendido = true; /**aqui verificamos que los turnos pendientes cambien de estado */
            visornumero.textContent = turnos[i].codigo;
            visorModulo.textContent = turnos[i].modulo;
            pintarFila();
            haymasturnos = true; /**aqui confirmamos que habian mas turnos pendientes */
            break;
        }
    }
    if (!haymasturnos) { /**aqui decimos que como ya se comprobo que todos los turnos estan atendidos */
        visornumero.textContent = "— — —";
        visorModulo.textContent = "Esperando llamado"/**entonces reemplace el visor de numero con el nuevo texto */
    }
}
btnLlamar.addEventListener("click", llamarSiguiente/*function(){
    llamarSiguiente();
}*/);
/*==================================================================================================
        ¡PARA PENSAR!
* ==================================================================================================
* ¿Qué deberia mostrar el visor cuando ya no queda nadie en la fila? Deberia mostrar la lista vacia
* Le diste clic varias veces al botón: ¿Porqué el turno llamado no vuelve a salir?
* por el for junto con el if, donde preguntamos, si hay turnos en espera, cambialos a activo
* Podrías haber cambiado el color de fondo directamente desde JS
* ¿Por qué es mejor agregar una clase? porqué así no tendria que pintar "linea por linea" desde js
* Si mañana el cliente pide que los turnos atendidos se vean azules en lugar de grises
* ¿Qué archivo tendrias que abrir con cada una de las dos formas?
* CSS
* ==================================================================================================*/
function actualizarContador() {
    const sigueespera = document.querySelectorAll(".turno:not(.turno--atendido)");
    contadorFila.textContent = sigueespera.length;
}
/*==================================================================================================
        ¡PARA PENSAR!
* ==================================================================================================
* También podrias haber contado recorriendo el arreglo con un for
* ¿Qué diferencia hay entre contar en el arreglo y contar en la pantalla?
* RTA: Que el arreglo me contaria todos los elementos que hay dentro?
* Imagina que el contador dice 5 pero en pantalla se ven 3 turnos en espera
* ¿Cúal de los dos está equivocado, y que habría pasado en tu programa? El contador
* ==================================================================================================*/
/*==================================================================================================
        ¡PARA PENSAR PUNTO 5!
* ==================================================================================================
* El código del turno ya esta en el arreglo. ¿Para qué guardarlo también dentro del elemento?
* Seria como una especie de backup, por si se llegara a cambiar la classe o algo por el estilo
* Si te doy un li cualquiera de la pantalla. ¿Cómo sabrías a cuál de los dos objetos del arreglo corresponde?
* Con ayuda del dataset- guardado?
* ==================================================================================================*/