
// ejer 1 -Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:
const multiplicar = (numMul, numA) => {

    for (i = 0; i < numA.length; i++) {
        numA[i] = numA[i] * numMul;
    }
    return numA;
}

//console.log(multiplicar(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]); // [20, 50, 770]

// ejer 2 - Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:
const filtrarPorLongitudMayorA = (longitud, strA) => {
    const nuevoA = [];
    for (i = 0; i < strA.length; i++) {
        if (strA[i].length > longitud) {
            nuevoA.push(strA[i]);
        }
    }
    return nuevoA;
}
/*console.log(filtrarPorLongitudMayorA(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
])); // ['remolacha', 'sorpresa', 'verde']*/

// ejer 3 - Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.
const recortar = (cantidadLetras, palabras) => {
    const nuevoArray = [];
    for (i = 0; i < palabras.length; i++) {
        nuevoArray.push(palabras[i].slice(0, cantidadLetras))
    }
    return nuevoArray;
}
//console.log(recortar(4, ["elefante", "dinosaurio", "chocolate", "avion", "america"])); // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
recortar(1, ["algoritmo", "bug", "compilador"]); // ['a', 'b', 'c']

//ejer 4 - // Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.
const sonIguales = (arrayA, arrayB) => {
    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] !== arrayB[i]) {
            return false;
        }
    }
    return true;
}

// solucion de Vale
/*const sonIguales = (arrayA, arrayB) => {
    if (arrayA.join(',') === arrayB.join(',')) {
        return true;
    } else {
        return false;
    }
}*/
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])); // true
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])); // false
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])); // false

//ejer 5 - Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {
    let puntoA = 0;
    let puntoB = 0;

    for (i = 0; i < puntajesA.length; i++) {
        if (puntajesA[i] > puntajesB[i]) {
            puntoA++;
        }
        else {
            puntoB++;
        }
    }
    if (puntoA > puntoB) {
        return jugadoraA;
    }
    else if (puntoB > puntoA) {
        return jugadoraB;
    }
    else {
        return 'Empate';
    }
}

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
console.log(obtenerResultado("Ada", "Grace", [4, 4, 4], [1, 2, 3])); // Ada
console.log(obtenerResultado("Ada", "Grace", [3, 5, 5, 7], [4, 1, 2, 9])); // Empate
console.log(obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])); // Grace

// ejer 6 - // Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:
//  ["piedra", "papel", "papel", "piedra", "tijera"],
//  ["papel", "papel", "tijera", "tijera", "papel"]
const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB) => {
    let puntajeA = 0;
    let puntajeB = 0;
    for (i = 0; i = jugadasA.length; i++) {
        if (jugadasA[i] === jugadasB[i]) {
            continue;
        }
        if ((jugadasA === 'piedra' && jugadasB === 'tijera') || (jugadasA === 'tijera' && jugadasB === 'papel') || (jugadasA === 'papel' && jugadasB === 'piedra')) {
            puntajeA++;
        }
        else {
            puntajeB++;
        }
    }
    console.log(puntajeA)
    if (puntajeA > puntajeB) {
        return jugadoraA;
    }
    else if (puntajeB > puntajeA) {
        return jugadoraB;
    }
    else {
        return 'Empate';
    }
    // Jugador A Jugador B Resultado
    // Piedra   Piedra empate
    // Piedra   Tijera  Gana
    // Piedra Papel pierde
    // Tijera  piedra pierde
    // tijera tijera empate
    // tijera pappel gana

}
// empate ambos eligan lo mismo
// gane jugador A 
// Si elige Pieda y el otro tijera
// si elige papel y el otro piedra
// si elige tijera  y el otro papel
// gane el jugador B el contraria a A


// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate

console.log(jugarPiedraPapelTijeras("Ada", "Grace", ["tijera"], ["piedra"])); // Grace
console.log(jugarPiedraPapelTijeras("Ada", "Grace", ["papel"], ["papel"])); // Empate
conosle.log(jugarPiedraPapelTijeras(
    "Ada",
    "Grace",
    ["piedra", "papel", "papel", "piedra", "tijera"],
    ["papel", "piedra", "tijera", "tijera", "papel"]
)); // Ada
