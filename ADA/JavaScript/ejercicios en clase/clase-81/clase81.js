//EJERCICIOS DOM.

// 1) Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.
// const saludo = prompt('Ingrese su Nombre');
// const h1 = document.getElementById('miSaludo');
// const h2 = document.createElement('h2');

// h1.style.textAlign = "center";
// h2.style.fontFamily = "Lucida Sans";
// h2.style.fontSize = "large";
// h2.style.color = "pink";
// h2.innerHTML = saludo;
// h1.appendChild(h2);

// 2) Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.
// const pedirColor = () => {
//     const miMensaje = prompt('Insert a Color in the Hexadecimal System');
//     document.body.style.backgroundColor = miMensaje;
// }

// pedirColor()

// 3) Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
// let colors = {};

// for (let i = 0; i < 3; i++) {
//     colors[i] = prompt(`Ingresar el valor ${i + 1}`);
// }
// document.body.style = `background-color: rgb(${colors[0]},${colors[1]},${colors[2]})`;

// 4) Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:
// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px

// const changeSize = () => {
//     const imgSize = prompt('Choose an image size: small, medium or large');
//     const img = document.getElementById('myImg');
//     if (imgSize === 'small') {
//         img.style.height = "200px"
//         img.style.width = "200px"
//     }
//     else if (imgSize === 'medium') {
//         img.style.height = "500px"
//         img.style.width = "500px"
//     }
//     else if (imgSize === 'large') {
//         img.style.height = "800px"
//         img.style.width = "800px"
//     }
// }
// changeSize()

// 5) Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo

// const askTemperature = () => {
//     const input = prompt('Enter Temperature:');
//     const h1 = document.getElementById('myTemp');
//     if (input < 0) {
//         h1.innerHTML = `Temperature is about ${input}°`
//         h1.style.color = 'blue';
//     }
//     else if (input >= 0 && input < 15) {
//         h1.innerHTML = `Temperature is about ${input}°`
//         h1.style.color = 'skyblue';
//     }
//     else if (input >= 15 && input < 25) {
//         h1.innerHTML = `Temperature is about ${input}°`
//         h1.style.color = 'green';
//     }
//     else if (input >= 25 && input < 30) {
//         h1.innerHTML = `Temperature is about ${input}°`
//         h1.style.color = 'yellow';
//     }
//     else if (input >= 30 && input < 35) {
//         h1.innerHTML = `Temperature is about ${input}°`
//         h1.style.color = 'orange';
//     }
//     else if (input > 35) {
//         h1.innerHTML = `Temperature is about ${input}°`
//         h1.style.color = 'red';
//     }
// }
// askTemperature()


// 6) Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

// const progress = () => {
//     const progreso = prompt("Ingresar el progreso");
//     const div = document.getElementById("myDiv");
//     const div2 = document.createElement("div");
//     div.appendChild(div2);

//     div.style.backgroundColor = "lightgray";
//     div.style.height = "30px"
//     div.style.width = "100%";
//     div2.style.backgroundColor = "orange";
//     div2.style.height = "30px";

//     if (progreso <= 10 || progreso <= 20) {
//         div2.style.width = "20%";
//     }
//     else if (progreso <= 20 || progreso <= 30) {
//         div2.style.width = "30%";
//     }
//     else if (progreso <= 40 || progreso <= 50) {
//         div2.style.width = "50%";
//     }

//     else if (progreso <= 60 || progreso <= 70) {
//         div2.style.width = "70%";
//     }
//     //     setInterval(() => {
//     //         for (let i = 0; i < progreso; i++) {
//     //             console.log(i);
//     //         }
//     //     }, 1000);
//     // };
// }
// progress();

// 7) En un documento html hacer un post de una red social que contenga:
// un h3 con la usuaria.
// un p con un lorem ipsum.
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad.
// Dar estilos para que la tipografía sea distinta a la default.
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius.
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes.
const div = document.getElementById('social')
div.style.height = "400px";
div.style.width = "600px";
const h3 = document.createElement('h3');
div.appendChild(h3);
const textH3 = document.createTextNode("Ivana Yegros Kubicka");
h3.style.padding = "10px";
h3.appendChild(textH3);
const p = document.createElement('p');
const textP = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
p.style.padding = "5px";
p.appendChild(textP);
div.appendChild(p);
const div2 = document.createElement('div');
div.appendChild(div2)
const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
span1.innerHTML = `${'<img src="img/love.JPG">'}`
span2.innerHTML = `${'<img src="img/sad.JPG">'}`
span3.innerHTML = `${'<img src="img/angry.JPG">'}`
span2.style.padding = "30px"
const textSpan1 = document.createTextNode("<br></br>");
span1.appendChild(textSpan1)
div2.appendChild(span1);
div2.appendChild(span2);
div2.appendChild(span3);





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

// 11) Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón. Se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

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

// 12) Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

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

// 13) Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

// const colores = document.getElementById('colores');

// const btnRojo = document.getElementById('btnRojo');
// const btnAzul = document.getElementById('btnAzul');
// const btnVerde = document.getElementById('btnVerde');
// const btnNaranja = document.getElementById('btnNaranja');
// const btnAmarillo = document.getElementById('btnAmarillo');
// const btnVioleta = document.getElementById('btnVioleta');

// btnRojo.style.backgroundColor = 'red';
// btnAzul.style.backgroundColor = 'blue';
// btnVerde.style.backgroundColor = 'green';
// btnNaranja.style.backgroundColor = 'orange';
// btnAmarillo.style.backgroundColor = 'yellow';
// btnVioleta.style.backgroundColor = 'purple';

// colores.style.width = '200px';
// colores.style.height = '200px';
// colores.style.backgroundColor = '#c2c2c2';


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

// const botones = document.querySelectorAll('.botones');

// for (let i = 0; i < botones.length; i++) {
//     botones[i].addEventListener('click', () => {
//         for (element of botones) {
//             colores.style.backgroundColor = botones[i].style.backgroundColor;
//         }
//     });
// }


