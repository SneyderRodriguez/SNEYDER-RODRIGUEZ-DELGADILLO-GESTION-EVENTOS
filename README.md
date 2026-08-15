# Tablero de Turnos

Manejo del DOM atravez de un sistema sala de espera

---

## 📋 Tabla de Contenidos

- Descripción
- Características
- Tecnologías
- Instalación
- Uso
- Estructura del proyecto
- Capturas de pantalla
- Para Pensar
- Licencia

---

## 📖 Descripción

Este proyecto consiste en una pagina web que permite ver los turnos de la sala de espera, llamar al sigueinte turno, eliminar un turno y filtrar los turnos por tramite.

---

## ✨ Características

- Ver Turnos.
- Eliminar turnos.
- Buscar turnos.
- Llamar turnos.

---

## 🛠 Tecnologías utilizadas

- JavaScript
- Node.js
- HTML => Derechos de Autor Lider Ana Maria Alvarado
- CSS => Derechos de Autor Lider Ana Maria Alvarado

---

## 📦 Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/SneyderRodriguez/SNEYDER-RODRIGUEZ-DELGADILLO-GESTION-EVENTOS.git
```

2. Entrar al proyecto

```bash
cd GESTION-EVENTOS
```

3. Ejecutar

```bash
node index.js
```

---

## 🚀 Uso

Describe cómo utilizar el programa.

Ejemplo:

```
1. Para llamar un turno
1.1 Dar clic en el boton llamar siguiente
2. Para buscar un turno
2.1 Digitar el tramite en la sección buscar en la fila
3. Para eliminar un turno
3.1 Ir a la seccion Fila de espera
3.2 Dar clic en el boton ubicado a la derecha del turno
```

---

## 📂 Estructura del proyecto

```
proyecto/
│
├── app.js
├── index.html
├── styles.css
└── README.md
```

---

## 📸 Capturas de pantalla

Puedes agregar imágenes.

[![Gestor-Turnos.png](https://i.ibb.co/NDJTzwn/Gestor-Turnos.png)]
[![Gestor-Turnos.png](https://i.ibb.co/gLzv5704/Gestor-Turnos-Llamado.png)]

---

## 🧠 Para pensar

- Si se va la luz y la pantalla se apaga. ¿La persona del turno A-014 perdió su turno?.
* NO
- Acabas de escribir seis turnos y guardaste el archivo. Mira la pantalla
- ¿Qué ves en la fila de espera?
* Nada, y ya estaba pensando que hice mal
- Si no ves nada, ¿El arreglo existe o no existe?
* Cuando leí esta pregunta: pues si existe
- ¿Qué le falta a tu programa para que lo que existe en memoria aparezca en pantalla?
* Aquí entendi que hacia falta conectarla
- createElement crea un elemento, pero no aparece en pantalla hasta que usas appendChild.
- ¿Dónde está el elemento en el momento entre las dos instrucciones?
* Almacenada en la variable
- ¿Qué deberia mostrar el visor cuando ya no queda nadie en la fila?
* Deberia mostrar la lista vacia
- Le diste clic varias veces al botón: ¿Porqué el turno llamado no vuelve a salir?
* Por el for junto con el if, donde preguntamos, si hay turnos en espera, cambialos a activo
- Podrías haber cambiado el color de fondo directamente desde JS
- ¿Por qué es mejor agregar una clase?
* Porque así no tendria que pintar "linea por linea" desde js
- Si mañana el cliente pide que los turnos atendidos se vean azules en lugar de grises
- ¿Qué archivo tendrias que abrir con cada una de las dos formas?
* CSS
- También podrias haber contado recorriendo el arreglo con un for
- ¿Qué diferencia hay entre contar en el arreglo y contar en la pantalla?
* Que el arreglo me contaria todos los elementos que hay dentro?
- Imagina que el contador dice 5 pero en pantalla se ven 3 turnos en espera
- ¿Cúal de los dos está equivocado, y que habría pasado en tu programa?
*El contador, se romperia
- El código del turno ya esta en el arreglo. ¿Para qué guardarlo también dentro del elemento?
* Seria como una especie de backup, por si se llegara a cambiar la classe o algo por el estilo
- Si te doy un li cualquiera de la pantalla. ¿Cómo sabrías a cuál de los dos objetos del arreglo corresponde?
* Con ayuda del dataset- guardado?
- Eliminaste el objeto del arreglo, pero nunca le digiste a li que desapareciera. ¿Por qué desaparecio de todas formas?
* Porque use el metodo splice indicandole que eliminara el campo que contuviera el nombre database.codigo
- Si le hubieras puesto un escuhador a cada botón ¿En qué momento exacto habrían dejado de funcionar?
* Desde el primer momento? entrarian en conflicto cada addEventListener?
- Escribe algo en el buscador y luego cancela el turno. ¿Qué le pasa al filtro?
* Muestra toda la fila de los turnos y el filtro queda con las letras escritas
- ¿Por qué pasa eso? Piensa que hace la primer línea de pintarFila
* La primer linea limpia todo lo ue contiene esa etiqueta y que no este condicionado a quedarse

---

## 📄 Licencia

Derechos de Autor Lider Ana Maria Alvarado