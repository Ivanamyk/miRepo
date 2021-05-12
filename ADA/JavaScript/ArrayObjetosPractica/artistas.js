//1- `artistasSolistas`, que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas.
const artistasSolistas = () => artistas.filter(artista => artista.solista);
// console.log(artistasSolistas());

/*2. `artistasPorEdad`, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad */
const artistasPorEdad = (edad) => artistas.filter(artista => artista.edad === edad);
// console.log(artistasPorEdad(33));
// console.log(artistasPorEdad(40));

// 3.`cantidadDeArtistasPorInstrumento`, que tome por parámetro un array de artistas y devuelva un objeto donde cada "instrumento" es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento
const cantidadDeArtistasPorInstrumento = () => {
    return artistas.reduce((acc, artista) => {
        if (acc[artista.instrumento]) {
            //si el instumento no esta lo agrega
            acc[artista.instrumento]++
        }
        else {
            //Si no exite, lo creo con valor en 1 y lo vosy sumando
            acc[artista.instrumento] = 1
        }
        return acc;
    }, {});
}
// console.log(cantidadDeArtistasPorInstrumento());

// 4 - cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género.
const cantidadDeArtistasPorGenero = () => {
    return artistas.reduce((acc, artista) => {
        if (acc[artista.genero]) {
            acc[artista.genero]++
        }
        else {
            acc[artista.genero] = 1;
        }
        return acc;
    }, {})
}
// console.log(cantidadDeArtistasPorGenero());
/*
      vuelta 1 => {} , punk
      vuelta 2 => {punk: 1} , rock
      vuelta 3 => {punk: 1,rock: 1} ,rock
      vuelta 4 => {punk: 1,rock: 2} ,punk
      vuelta 5 => {punk: 2,rock: 2} ,pop
      vuelta 6 => {punk: 2,rock: 2,pop: 1}
  */

// 5. `artistasConMasDiscosQue`, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos.
const artistasConMasDiscosQue = (cantidadDeDiscos) => {
    const result = artistas.filter(artista => artista.discos.length > cantidadDeDiscos);
    return result.sort((a, b) => a.discos.length - b.discos.length);
}
// console.log(artistasConMasDiscosQue(8));

// 6. `artistaConMasEntradasVendidas`, que tome por parámetro un array de artistas y devuelva el objeto artista que vendió más entradas en su último recital.
const artistaConMasEntradasVendidas = () => {
    const result = artistas.sort((b, a) => a.ultimoRecital.entradasVendidas - b.ultimoRecital.entradasVendidas);
    return result.slice(0, 1);
}
// console.log(artistaConMasEntradasVendidas());

//solucion 2
const artistaConMasEntradasVendidas2 = () => {
    return artistas.reduce((acc, artista) => {
        if (acc.ultimoRecital.entradasVendidas > artista.ultimoRecital.entradasVendidas) {
            return acc
        } else {
            return artista
        }
    })
}
// console.log(artistaConMasEntradasVendidas2());

// 7. `artistaConMayorRecaudacion` que devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)
const artistaConMayorRecaudacion = () => {
    return artistas.reduce((acc, artista) => {
        console.log()
        if (acc.ultimoRecital.entradasVendidas * acc.ultimoRecital.costoEntradas > artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas) {
            return acc;
        }
        else {
            return artista;
        }
    })
}
// console.log(artistaConMayorRecaudacion());

//Solucion 2;
const artistaConMayorRecaudacion2 = () => {
    // hago una función auxiliar para calcular la recaudación que luego la voy a usar en el reduce
    const calcularRecaudacion = (objetoArtista) => {
        return objetoArtista.ultimoRecital.entradasVendidas * objetoArtista.ultimoRecital.costoEntradas
    }
    return artistas.reduce((acc, artista) => {
        if (calcularRecaudacion(acc) > calcularRecaudacion(artista)) {
            return acc;
        } else {
            return artista;
        }
    })
}
// console.log(artistaConMayorRecaudacion2());

// 8. `artistasConDiscoEnAnio`, que tome por parámetro un parámetro "anio" y un array de artistas, y devuelva un array con los artistas que tengan publicado al menos un disco en dicho año.
const artistasConDiscoEnAnio = (anio) => {
    return artistas.filter((artista) => {
        //le estoy diciendo que el length no sea igual a cero.
        return artista.discos.filter((x) => x.anioLanzamiento === anio).length != 0
    })
}
// console.log(artistasConDiscoEnAnio(1990));

// 9. `artistaConMasCopias`, que devuelva el objeto artista que más copias de discos en total vendió.
const artistaConMasCopias = () => {
    const masCopiasxArtista = (objetoArtistas) => {
        //le paso a la funcion el objeto este para que con eso haga el reduce.
        return objetoArtistas.discos.reduce((acc, x) => {
            acc += x.copiasVendidas;
            return acc;
        }, 0)
    }
    return artistas.reduce((acc, x) => {
        if (masCopiasxArtista(acc) > masCopiasxArtista(x)) {
            return acc;
        }
        else {
            return x;
        }
    })
}
// console.log(artistaConMasCopias());
//Completo Artistas