// Hacer ejercicios de artistas acá
/*
2. `artistasPorEdad`, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad */
// const artistasPorEdad = (edad) => {
//     return artistas.filter((artista) => artista.edad === edad)
// }
// console.log(
//     artistasPorEdad(23, musiquesPop),
//     artistasPorEdad(45, musiquesRock)
// )

/*3. `cantidadDeArtistasPorInstrumento`, que tome por parámetro un array de artistas y devuelva un objeto donde cada "instrumento"
es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento*/
/*
       1 => {} , flauta
       2 => {flauta:1} , teclado
       3 => {flauta:1, teclado:1} , bateria
       3 => {flauta:1, teclado:1, bateria:1}

       [flauta,teclado,bateria,teclado,flauta];

   */
// const cantidadDeArtistasPorInstrumento = (artistas) => {
//     return artistas.reduce((acc, artista) => {
//         if (acc[artista.instrumento]) { //lo toma primero como un Undefined
//             acc[artista.instrumento]++;
//         }
//         else {
//             acc[artista.instrumento] = 1; //lo agrago y le doy valor de 1
//         }
//         return acc;
//     }, {})
// }

/*4. `cantidadDeArtistasPorGenero`, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género"
es una propiedad y su valor la cantidad de artistas de dicho género */
// const cantidadDeArtistasPorGenero = (artistas) => {

//     return artistas.reduce((acc, artista) => {

//         if (acc[artista.genero]) {
//             acc[artista.genero]++;
//         } else {
//             acc[artista.genero] = 1;
//         }

//         return acc;
//     }, {})
// }

/*5. `artistasConMasDiscosQue`, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas
que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos*/
/*const artistasConMasDiscosQue = (cantidadDeDiscos, artistas) => {
     return artistas.filter(artista => {
    return artista.discos < cantidadDeDiscos.lenght;
})
}
console.log(artistasConMasDiscosQue())*/

/* 6. `artistaConMasEntradasVendidas`, que tome por parámetro un array de artistas
y devuelva el objeto artista que vendió más entradas en su último recital*/

