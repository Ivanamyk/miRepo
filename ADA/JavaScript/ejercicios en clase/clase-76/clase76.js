const btn = document.getElementById('btn');

// Introducción al DOM
// window

// getElementById
const elem = document.getElementById('noticias');
// console.log(elem);


// querySelector ... Retorna el primer elemento que encuentra en el DOM
const noticia = document.querySelector('.noticia');
// console.log(noticia);


// querySelectorAll ... Retorna todos los elementos que encuentra en el DOM
const noticias = document.querySelectorAll('.noticia');
// console.log(noticias);

// noticias.forEach((noti, i) => {
//     noti.innerHTML = "<h2>Esto es un contenido editado</h2>";
// })

// classList
//      add
//      remove
//      toggle
//      contains


const agregarClass = () => {

    for (let i = 0; i < noticias.length; i++) {

        if (!noticias[i].classList.contains('important')) {
            noticias[i].classList.add('nuevo-class');
        }

    }
    // noticias.forEach((noti, i) => {
    //     noti.classList.add('nuevo-class');
    // });

}

const noticia3 = document.getElementById('titulo-noticia');
noticia3.classList.remove('valornuevo');


const bodyClassToggle = () => {
    document.body.classList.toggle('on');
}

document.addEventListener('click', function () {

    agregarClass();

}, btn);

// style
// getComputedStyle

noticia3.style.fontSize = "50px";

console.log(window.getComputedStyle(noticia3).fontSize);






