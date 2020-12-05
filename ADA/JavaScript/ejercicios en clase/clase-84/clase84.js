//EJERCICIOS CLASE SABADO 5
const base = "https://api.themoviedb.org/3";
const baseImg = "https://image.tmdb.org/t/p/w500";
const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";
// Crear una función renderImage que renderice una imagen en pantalla.
const renderImage = (url) => {
    const img = document.createElement("img");
    img.setAttribute("src", `${baseImg}${url}`);
    img.className = "img";
    return img
}

// Crear una función renderTableHead que reciba una tabla y un objeto y en bases a sus prop, renderice la cabecera de una tabla en pantalla.
const renderTableHead = (objeto, tabla) => {
    const tr = document.createElement('tr');
    const thead = document.createElement('thead');
    thead.className = 'thead-dark';

    for (prop in objeto) {
        const th = document.createElement('th');
        th.innerHTML = prop;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    tabla.appendChild(thead);
}

// Crear una función renderTableData que reciba un row y un objeto y renderice una fila de tabla en pantalla.
const renderTableRow = (tableBody, objeto) => {
    const fila = document.createElement('tr');
    for (prop in objeto) {
        const td = document.createElement('td');
        if (prop === "backdrop_path" || prop === "poster_path") {

            td.appendChild(renderImage(objeto[prop]));
        }
        else {
            td.innerHTML = objeto[prop];
        }
        fila.appendChild(td);
    }
    tableBody.appendChild(fila);
}

//funcion que crea tablas directamente
const createTable = (data, idTabla) => {
    //Primero creamos la cabecera de la tabla
    const tabla = document.getElementById(idTabla);
    renderTableHead(data[0], tabla);

    //despues creamos el cuerpo de la tabla
    const tbody = document.createElement("tbody");
    for (info of data) {
        renderTableRow(tbody, info);
    }
    tabla.appendChild(tbody);
}

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre los generos disponibles.
fetch(`${base}/genre/movie/list?api_key=${apiKey}`)
    .then(response => {
        return response.json();
    })
    .then(({ genres }) => {
        // recibo un objeto con atributo genres,hago destructuring 
        // genres es un array de objetos
        createTable(genres, "tabla")
    });

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre las peliculas mas populares.
fetch(`${base}/movie/popular?api_key=${apiKey}`)
    .then(response => {
        return response.json();
    })
    .then(({ results }) => {
        createTable(results, "tabla-peliculas")
        /* const tablaPeliculas = document.getElementById("tabla-peliculas");
         renderTableHead(results[0], tablaPeliculas);
         const tbody = document.createElement('tbody');
         for (result of results) {
             renderTableRow(tbody, result);
         }
         tablaPeliculas.appendChild(tbody);*/
    });


// Paginar donde sea necesario.