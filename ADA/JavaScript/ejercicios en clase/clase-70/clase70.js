// 01 - Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
const obtenerIndice = (value, array) => {
    for (i = 0; i < array.length; i++) {
        let busqueda = array.find(element => element === value);
        if (busqueda === value) {
            return busqueda;
        }
        else {
            return -1;
        }
    }
}

console.log('ejercicio 01')
console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])); // 2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])); // -1

// 02 - Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.
const repetir = (string, num) => string.repeat(num);

console.log('ejercicio 02')
console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
console.log(repetir("html", 0)); // []

// 03 - Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

//te devuelve true or false si es impar o par
const esImpar = (num) => {
    if (num <= 100) {
        return Boolean(num % 2);
    }
}

const sumarImparesHasta = (numero) => {
    let total = 0;
    for (i = 0; i < numero; i++) {
        if (esImpar(i)) {
            total += i;
        }
    }
    return total;
}
console.log('ejercicio 03')
console.log(sumarImparesHasta(4)); // 9 (1 + 3 + 5 = 9)
console.log(sumarImparesHasta(13)); // 49
console.log(sumarImparesHasta(47)); // 576