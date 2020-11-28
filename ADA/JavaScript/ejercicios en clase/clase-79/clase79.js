
//**EJERCICIOS**
// 01 - Crear una función crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.
const crearUsuario = (callback) => {
    let user = prompt("Ingrese su nombre de usuario");
    if (user != '') {
        callback();
    } else {
        alert("Debes ingresar un nombre!");
    }
}
const confirmarCreacion = () => alert("Usuario creado!"); // callback
//crearUsuario(confirmarCreacion);
// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!

// 02 - Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La funci´ón validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.
const validarUsuario = (callback) => {
    let usuario = prompt("Ingrese un nombre de usuario");
    if (callback(usuario)) {
        alert("Usuario creado");
    } else {
        alert("Debe ser menor a 10 caracteres");
    }
}

const miCallback = (string) => {
    if (string.length < 10) {
        return true;
    } else {
        return false;
    }
}
//validarUsuario(miCallback)
// Ejemplos de validaciones (solo tiene que validar una de ellas):
// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas

// 03 - Crear una función map que acepte un array y un callback y que:
const map = (array, callback) => {
    let resultados = [];
    for (element of array) {
        resultados.push(callback(element));
    }
    return resultados;
}

// Ejemplo:
const numeros = [1, 2, 3]
const duplicar = (x) => x * 2;
console.log('ejercicio 03')
console.log(map(numeros, duplicar)); // [2, 4, 6]
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.

// 04 - Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".
const filter = (array, callback) => {
    let numerosFiltrados = [];
    for (item of array) {
        //si hago el statement solo eso ya supone que estoy diciendo true. No hace falta especificar
        if (callback(item)) {
            numerosFiltrados.push(item);
        }
    }
    return numerosFiltrados;
}

// Ejemplo:
const nums = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
console.log('ejercicio 04')
console.log(filter(nums, multiploDe10)) // [10, 40, 50]

// 05 - Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true
const every = (array, callback) => {
    for (item of array) {
        if (callback(item)) {
            return true;
        }
        else {
            return false;
        }
    }
}

// Ejemplo:
const numbers = [10, 2, 3, 40, 33, 50]
const multiDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0

console.log('ejercicio 05')
console.log(every(numbers, multiDe10)) // false
console.log(every(numbers, esPositivo)) // true

// 06 - Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true
/*const some = (array, callback) => {
    for (item of array) {
        let even = array.some(callback(item));
        if (even) {
            return true;
        }
        else {
            return false;
        }
    }
}

const arrayNumeros = [10, 2, 3, 40, 33, 50]
const multiplo10 = (x) => x % 10 === 0
const positivo = (x) => x >= 0

console.log('ejercicio 06')
console.log(some(arrayNumeros, multiplo10)) // true
console.log(some(arrayNumeros, positivo)) // true*/