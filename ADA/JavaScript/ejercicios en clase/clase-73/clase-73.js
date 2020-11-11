let personajes = getInhabitants();
//DECUNSTRUCTING method excercises:

//ejer 15 - Crear una funcion que devuelva los personaes por ID en base a un rango numerico.
const porID = (min, max) => {
    const resultado = [];
    for (const personaje of personajes) {
        const { id, name } = personaje
        if (id >= min && id <= max) {
            resultado.push(name);
        }
    }
    return resultado;
}
console.log(porID(0, 50));

// ejer 16 - Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.
const porColorDePelo = (color) => {
    const colorPelo = [];
    for (i = 0; i < personajes.length; i++) {
        const { hair_color, name } = personajes[i]
        if (hair_color === color) {
            colorPelo.push({ hair_color, name })
        }
    }
    return colorPelo;
}
console.log(porColorDePelo('Red'))
