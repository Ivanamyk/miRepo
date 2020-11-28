//CONTINUACIÓN EJERCICIOS DOM.

// 10) Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), 
//y agregar esas canciones como ítems de la lista desordenada

/*const div = document.getElementById('lista-canciones');
const ul = document.createElement('ul');
const pedirCanciones = () => {
    const arrayCanciones = [];
    for (i = 0; i < 5; i++) {
        const cancion = prompt('Seleccione su canción');
        arrayCanciones.push(cancion);
    }
    for (let cancion of arrayCanciones) {
        const li = document.createElement('li');
        li.innerHTML = cancion;
        ul.appendChild(li);
        div.appendChild(ul);
    }
}
btn.addEventListener('click', pedirCanciones);*/

// 11) Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, 
//se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

/*const h1 = document.getElementById('valor');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
let numero = 0;
h1.innerHTML = numero;
btn1.addEventListener('click', () => {
    numero--;
    h1.innerHTML = numero;
});
btn2.addEventListener('click', () => {
    numero++;
    h1.innerHTML = numero;
});
btn3.addEventListener('click', () => {
    numero -= 5;
    h1.innerHTML = numero;
});
btn4.addEventListener('click', () => {
    numero += 5;
    h1.innerHTML = numero;
});
btn5.addEventListener('click', () => {
    numero -= 10;
    h1.innerHTML = numero;
});
btn6.addEventListener('click', () => {
    numero += 10;
    h1.innerHTML = numero;
});*/

// 12) Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en
// el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. 
//Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta 
//correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

/*const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');
const respuestaCorrecta = () => {
    btnC.style.backgroundColor = 'green';
    const div = document.getElementById('correcta');
    const p = document.createElement('p');
    p.innerHTML = 'Correcto!';
    div.appendChild(p)
}
btnC.addEventListener('click', respuestaCorrecta);*/

/*const respuestaIncorrecta = () => {
    btnA.style.backgroundColor = 'red';
    btnB.style.backgroundColor = 'red';
    btnC.style.backgroundColor = 'green';
    const div = document.getElementById('correcta');
    const p = document.createElement('p');
    p.innerHTML = 'Incorrecto!';
    div.appendChild(p)
}
btnA.addEventListener('click', respuestaIncorrecta);
btnB.addEventListener('click', respuestaIncorrecta);*/


//VERSIÓN CON QUERYSELECTORALL

/*const botonesIncorrectos = document.querySelectorAll('.incorrecto');
const respuestaIncorrecta2 = () => {
    for (data of botonesIncorrectos) {
        data.style.backgroundColor = 'red';
        btnC.style.backgroundColor = 'green';
        const div = document.getElementById('correcta');
        const p = document.createElement('p');
        p.innerHTML = 'Incorrecto!';
        div.appendChild(p)
        data.addEventListener('click', respuestaIncorrecta2);
    }
}*/

/*const botonesIncorrectos = document.querySelectorAll('.incorrecto');
const respuestaIncorrecta2 = () => {
    for (data of botonesIncorrectos) {
        data.style.backgroundColor = 'red';
        btnC.style.backgroundColor = 'green';
        const div = document.getElementById('correcta');
        const p = document.createElement('p');
        p.innerHTML = 'Incorrecto!';
        div.appendChild(p)
        data.addEventListener('click', respuestaIncorrecta2);
    }
}*/

/*for (let i = 0; i < botonesIncorrectos.length; i++) {
    botonesIncorrectos[i].addEventListener('click', () => {
        for (element of botonesIncorrectos) {
            element.style.backgroundColor = 'red';
        }
        btnC.style.backgroundColor = 'green';
        const div = document.getElementById('correcta');
        const p = document.createElement('p');
        p.innerHTML = 'Incorrecto!';
        div.appendChild(p);
    })
}*/

// 13) Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su 
//color de fondo al mismo color de fondo que el del botón clickeado.

const colores = document.getElementById('colores');

const btnRojo = document.getElementById('btnRojo');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');
const btnNaranja = document.getElementById('btnNaranja');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnVioleta = document.getElementById('btnVioleta');

btnRojo.style.backgroundColor = 'red';
btnAzul.style.backgroundColor = 'blue';
btnVerde.style.backgroundColor = 'green';
btnNaranja.style.backgroundColor = 'orange';
btnAmarillo.style.backgroundColor = 'yellow';
btnVioleta.style.backgroundColor = 'purple';

colores.style.width = '200px';
colores.style.height = '200px';
colores.style.backgroundColor = '#c2c2c2';


/*btnRojo.addEventListener('click', () => {
    colores.style.backgroundColor = 'red';
});
btnAzul.addEventListener('click', () => {
    colores.style.backgroundColor = 'blue';
});
btnVerde.addEventListener('click', () => {
    colores.style.backgroundColor = 'green';
});
btnNaranja.addEventListener('click', () => {
    colores.style.backgroundColor = 'orange';
});
btnAmarillo.addEventListener('click', () => {
    colores.style.backgroundColor = 'yellow';
});
btnVioleta.addEventListener('click', () => {
    colores.style.backgroundColor = 'purple';
});*/

const botones = document.querySelectorAll('.botones');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
        for (element of botones) {
            colores.style.backgroundColor = botones[i].style.backgroundColor;
        }
    });
}

