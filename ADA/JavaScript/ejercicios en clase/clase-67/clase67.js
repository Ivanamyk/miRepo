
//ejercicio 1 - Crear una función obtenerMenor que tome como argumento un array de números y devuelva el menor de ellos. Ejemplo:
const datos = [5, 7, 99, 34, 54, 2, 12];
// los 3 puntos antes del array se llama Spread operator y me permite separar los datos dentro del mismo para tratarlos como unidades y no en conjunto como vienen en un array. Crea copia del arrar.
const obtenerNumeroMenor = (datos) => Math.min(...datos);
// Otra forma de resolverlo con Apply.
const otraForma = Math.min.apply(null, datos);

console.log('ejercicio 01')
console.log(otraForma);
console.log(obtenerNumeroMenor(datos)); // 2

//ejercicio 2 - Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
const arrayNumeros = [5, 7, 10, 12, 24];
//Reduce: toma dos parametros (par1 y par2) y los va sumando entre si hasta dejar solo un resultado total. El 0 al final es el contenido actual del reduce (puede ser [] si deseo que me devuelva un array o {} si quiero un objeto)
const sumarNumeros = (arrayNumeros) => arrayNumeros.reduce((par1, par2) => par1 + par2, 0);

console.log('ejercicio 02')
console.log(sumarNumeros(arrayNumeros)); // 58

// ejercicio 3 - Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
const numeros = [10, 55, 14, 2, 140, 87, 9];
const contiene = (numero, numeros) => {
    if (numeros.includes(numero)) {
        return true
    }
    return false
}
console.log('ejercicio 03')
console.log(contiene(87, numeros)); //true
console.log(contiene(6, numeros)); //false

//ejercicio 4 - Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.
const string = 'javascript'

const invertirCaso = (string) => {
    for (i = 0; i < string.length; i++) {
        let caracter = string.charAt(i);
        string = caracter === caracter.toLowerCase()
            ? string.replace(caracter, caracter.toUpperCase())
            : string.replace(caracter, caracter.toUpperCase());
    }
    return string;
};
console.log('ejercicio 04')
console.log(invertirCaso(string));

//ejercicio 5 - Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.
const perrosYgatos = ['perro', 'gato', 'gato', 'perro', 'gato'];
const separar = () => {
    let resultGato = [];
    let resultPerro = [];
    for (item of perrosYgatos) {
        if (item === 'gato') {
            resultGato.push(item);
        }
        else {
            resultPerro.push(item);
        }
    }
    return resultGato;
};
console.log('ejercicio 05')
console.log(separar());

//ejercicio 6 - Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
const gano = (array) => {
    for (i = 0; i < array.length; i++) {
        array.lenght = 5;
        if (array[i] === "O") {
            if (array.lenght <= 5) {
                return true;
            }
        }
        else {
            return false;
        }
    }
}
console.log('ejercicio 06')
console.log(gano(["X", "X", "X", "O", "O"])); // false
console.log(gano(["O", "O", "O", "O", "O"])); // true
console.log(gano(["O", "O", "O", "O", "O", "X"])); // true

//ejercicio 7 - // Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:
const estanJuntos = (array) => {
    for (let item of array) {
        if (item === "Sam") {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log('ejercicio 07')
console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //false
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //true