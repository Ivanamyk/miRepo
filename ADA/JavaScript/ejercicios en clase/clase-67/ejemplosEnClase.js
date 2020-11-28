// for
const array = [1, 2, 3, 4];

// console.log(array2);

// limit = 4;
// let user;

// for (let i = 0; i < array2.length; i++) {
//   const client = array2[i];

//   if (i == 0) {
//     user = array2.shift();
//   }
// }

// const userExists = (nameToSearch) => {
//   for (let i = 0; i < array2.length; i++) {
//     if (array2[i].name === nameToSearch) {
//       return true;
//     }

//     console.log(i);
//   }

//   return false;
// };

// for...of

// const userExists = (nameToSearch) => {
//   for (const user of array2) {
//     if (user.name === nameToSearch) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(userExists("Agostina"));

// Condición de salida

// Recorriendo arrays

// pop: El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
// const array2 = [
//   { name: "Adrian", lastname: "Solimano" },
//   { name: "Agostina", lastname: "Solimano" },
//   { name: "Mailen", lastname: "Solimano" },
// ];

// const eliminarDato = array2.pop();
// console.log(eliminarDato);
// console.log(array2);

// push: El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

// const cant = array2.push({ name: "Carla", lastname: "Diaz" }, 123);
// console.log(cant);
// console.log(array2);

// shift: El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

// unshift: El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

// const agregarInicio = array2.unshift({ name: "Carla", lastname: "Diaz" });
// console.log(agregarInicio);
// console.log(array2);

// slice: El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

// splice:El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const array2 = [
    { name: "Adrian", lastname: "Solimano" },
    { name: "Agostina", lastname: "Solimano" },
    { name: "Mailen", lastname: "Solimano" },
];

// const borrar = array2.splice(0, 3);

const reemplazar = array2.splice(1, 2, { name: "Lionel", lastname: "Messi" });
// console.log(reemplazar);
// console.log(array2);

// indexOf: El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

const array3 = [4, 2, 9, 5, 8, 9, 12, 2, 9, 8, 4];

const pos = array3.indexOf(1);
console.log(pos);

// reverse: El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
array3.reverse();
console.log(array3);

// includes:El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

console.log(array3.includes(95));