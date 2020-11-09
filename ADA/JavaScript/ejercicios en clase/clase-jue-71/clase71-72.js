// ejer 14 - Mostrar en pantalla al/los personajes mas enanos de "Brastlewark".
const personajes = getInhabitants();
let min = personajes[0].height;
for (const personaje of personajes) {
    if (personaje.height < min) {
        min = personaje.height
    }
}
//console.log(min);

// ejer 15 - Crear una funcion que devuelva los personaes por ID en base a un rango numerico.
const porID = (min, max) => {
    const resultado = [];
    for (const personaje of personajes) {
        if (personaje.id >= min && personaje.id <= max) {
            resultado.push(personaje.name);
        }
    }
    return resultado;
}
//console.log(porID(0, 10))

// ejer 16 - Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.
const porColorDePelo = (color) => {
    const colorPelo = [];
    for (const personaje of personajes) {
        if (personaje.hair_color === color) {
            colorPelo.push({
                nombre: personaje.name,
                color: personaje.hair_color
            })
        }
    }
    return colorPelo;
}
//console.log(porColorDePelo('Pink'))

//ejer 17 - Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad y un valor enviados como parámetros.
const lista = (key, value) => {
    const array = [];
    for (const personaje of personajes) {
        if (personaje[key] === value) {
            array.push(personaje.name)
        }
    }
    return array;
}
//console.log(lista('age', 240))

// ejer 18 - Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".
const minimos = (prop) => {
    let valorMinimo = personajes[0][prop];
    let personaje = personajes[0];
    for (i = 0; i < personajes.length; i++) {
        let valor = personajes[i][prop];
        if (valorMinimo > valor) {
            valorMinimo = valor;
            personaje = personajes[i];
        }
    }
    return personaje;
}
//console.log(minimos('height'));
//console.log(minimos('age'));

const maximo = (prop) => {
    let valorMax = personajes[0][prop];
    let personaje = personajes[0];
    for (i = 0; i < personajes.length; i++) {
        let valor = personajes[i][prop];
        if (valorMax < valor) {
            valorMax = valor;
            personaje = personajes[i];
        }
    }
    return personaje;
}
//console.log(maximo('height'));
//console.log(maximo('age'));
//console.log(maximo('weight'))

// ejer 19 - Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.
let Fizwood = personajes.filter(personaje => personaje.name === "Fizwood Mysttink");
let nombreAmigos = Fizwood[0].friends;
let amigos = [];
for (i = 0; i < nombreAmigos.length; i++) {
    const amigo = personajes.filter(personaje => personaje.name === nombreAmigos[i]);
    amigos[i] = amigo[0];
}
//console.table(amigos)

// ejer 20 - Listar a todos los personajes que tengan como profesión "Woodcarver".


// ejer 21 - Listar a todos los personajes que tengan como profesion un dato enviado como como parámetro.