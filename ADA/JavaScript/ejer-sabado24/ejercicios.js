/* ejer 1 - Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, 
y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, 
o tiene autorización de sus padres.*/

const puedeVerPelicula = (edad, tieneAutorizacion) => (edad >= 15 || tieneAutorizacion);

console.log('ejer 1')
console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));

/* ejer 2 - Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, 
y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no 
(si el valor es igual a uno de los extremos se considera que está dentro del rango)*/
const estaEnRango = (value, numMin, numMax) => (value >= numMin && value <= numMax);

console.log('ejer 2')
console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false 

/* ejer 3 - Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si 
puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido*/
const puedeAvanzar = (color) => {
    if (color == 'verde' || color == 'amarillo' || color == 'rojo') {
        return (color == 'verde')
    }
    return 'Error: color de semáforo inválido'
}
/*
const puedeAvanzar = (color) => {
    if (!['verde', 'amarillo', 'rojo'].includes(color)) return 'Error: color de semáforo inválido'
    return (color == 'verde')
}

const puedeAvanzar = (color) => {
    return (!['verde', 'amarillo', 'rojo'].includes(color))
        ? 'Error: color de semáforo inválido'
        : (color == 'verde')
}*/

console.log('ejer 3')
console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'

// ejer 4 - Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.
const esVocal = (letra) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    if (letra == vocales);
    return vocales.includes(letra)
}
//const esVocal = (letra) => /[aeiou]/g.test(letra);  
console.log('ejer 4')
console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true

/* ejer 5 - Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante 
o false si no lo es*/
const esConsonante = (letra) => (!esVocal(letra));

console.log('ejer 5')
console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true
console.log(esConsonante('i')); // false
console.log(esConsonante('e')); // false
console.log(esConsonante('r')); // true

// ejer 6 - Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no.
const esHoraValida = (hora) => {
    let horaSplit = hora.split(':');
    return (horaSplit[0] <= 24) && (horaSplit[1] <= 60);
}

console.log('ejer 6')
console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true

/*ejer 7 - Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, 
y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet 
si pasó los tests, no tiene multas impagas y pagó todos los impuestos.*/
let puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => (pasoTests && tieneMultasImpagas && pagoImpuestos);

console.log('ejer 7')
console.log(puedeRenovarCarnet(true, true, true))    // true
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // false
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(true, true, true))   // true
console.log(puedeRenovarCarnet(false, true, false))  // false

/*ejer 8 - Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.*/
const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada)

console.log('ejer 8')
console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true)) // false

/* ejer 9 - Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, 
o el string impar si el numero es impar*/
const esParOImpar = (num) => (num % 2 == 0) ? 'par' : 'impar';

console.log('ejer 9')
console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'

/*ejer 10 - Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo*/
const esPositivoONegativo = (numero) => {
    if (numero < 0) {
        return Math.sign(numero);
    }

}

console.log('ejer 10')
console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'

/* ejer 11 - Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el 
siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde*/
const avanzarSemaforo = (colorActual) => {
    if (colorActual === 'verde' || colorActual === 'amarillo' || colorActual === 'rojo') {
        switch (colorActual) {
            case 'verde':
                colorActual = 'amarillo';
                break;
            case 'amarillo':
                colorActual = 'rojo';
                break;
            case 'rojo':
                colorActual = 'verde';
        }
        return colorActual
    }
}

console.log('ejer 11')
console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'

/*ejer 12 - Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la 
cantidad de días que tenga ese mes*/
const obtenerDiasMes = (mes) => {
    if (mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' || mes === 'agosto' || mes === 'octubre' || mes === 'diciembre') {
        return 31;
    }
    if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre') {
        return 30;
    }
    if (mes === 'febrero') {
        return 29;
    }
    //seria el Else. En caso de error.
    return 'error'
}

console.log('ejer 12')
console.log(obtenerDiasMes("diciembre")) // 31
console.log(obtenerDiasMes("febrero"))   // 29
console.log(obtenerDiasMes("noviembre"))
console.log(obtenerDiasMes("juvio"))

/* ejer 13 - Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas: */
const obtenerGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
        return 'Baby boomer';
    }
    if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
        return 'Generación X';
    }
    if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return 'Millennials';
    }
    if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
        return 'Generación Z';
    }
    return 'error de fecha'
}

// Baby boomer	    => 1949-1968
// Generación X	    => 1969-1980
// Millennials	    => 1981-1993
// Generación Z	    => 1994-2010

console.log('ejer 13')
console.log(obtenerGeneracion(1987))
console.log(obtenerGeneracion(1953))
console.log(obtenerGeneracion(2020))

/*ejer 14 - Crear una función obtenerSensacion que tome como argumento un número puntaje y devuelva un string dependiendo de la puntaje, con las siguientes reglas: */
const obtenerSensacion = (puntaje) => {
    if (puntaje < 0) {
        return '¡Está helando!';
    }
    if (puntaje >= 0 && puntaje <= 15) {
        return '¡Hace frío!';
    }
    if (puntaje >= 15 && puntaje <= 25) {
        return 'Está lindo';
    }
    if (puntaje >= 25 && puntaje <= 30) {
        return 'Hace calor';
    }
    if (puntaje >= 30) {
        return '¡Hace mucho calor!';
    }
}
// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!

console.log('ejer 14')
console.log(obtenerSensacion(23))
console.log(obtenerSensacion(2))
console.log(obtenerSensacion(35))

/*ejer 15 - Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:*/
const obtenerNota = (puntaje) => {
    if (puntaje < 6) {
        return 'Desaprobado';
    }
    if (puntaje >= 6.50 && puntaje <= 7.90) {
        return 'Regular';
    }
    if (puntaje >= 7.50 && puntaje <= 8.90) {
        return 'Bueno';
    }
    if (puntaje >= 8.50 && puntaje <= 9.90) {
        return 'Muy bueno';
    }
    if (puntaje === 10) {
        return 'Excelente';
    }
    if (puntaje < 0 || puntaje > 10) {
        return 'Puntaje inválido'
    }

    return Math.round(puntaje)
}

// Menor a 6	                        => Desaprobado
// Mayor o igual a 6 y menor a 7	    => Regular
// Mayor o igual a 7 y menor a 8	    => Bueno
// Mayor o igual a entre 8 y menor a 10 => Muy bueno
// 10	                                => Excelente
// Menor a 0 o mayor a 10	            => Puntaje inválido
console.log('ejer 15')
console.log(obtenerNota(7.68))
console.log(obtenerNota(9.08))
console.log(obtenerNota(17))

// ejer 16 - Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)
const jugarPiedraPapelTijera = (a, b) => {
    if (a === 'tijera' && b === 'piedra' || a === 'piedra' && b === 'tijera') {
        return '¡Ganó piedra!'
    }
    if (a === 'papel' && b === 'piedra' || a === 'piedra' && b === 'papel') {
        return '¡Ganó papel!'
    }
    if (a === 'tijera' && b === 'papel' || a === 'papel' && b === 'tijera') {
        return '¡Ganó tijera!'
    }
    if (a === b) {
        return '¡Empate!'
    }
}

console.log('ejer 16')
console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!

/* ejer 17 - Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto se desea retirar, 
y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.*/
let saldoActual = 150000;
const dineroInicial = (retiro) => {
    if (retiro > saldoActual) {
        return 'saldo no disponible'
    }
    return saldoActual - retiro;
}

console.log('ejer 17')
console.log(dineroInicial(100))
console.log(dineroInicial(1000000))

/*
Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
ALIMENTAR: +3 energía, +2 felicidad
JUGAR: +2 felicidad, -2 energía, -1 limpieza
DORMIR: +5 energía, +2 salud, -2 limpieza
VACUNAR: +5 salud, -6 felicidad
BAÑAR: +3 salud
RETAR: -3 felicidad
ACARICIAR: +4 felicidad
Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
*/
let salud = '';
let felicidad = '';
let limpieza = '';
let energia = '';