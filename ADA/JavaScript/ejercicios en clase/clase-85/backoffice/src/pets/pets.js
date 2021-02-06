const base = "https://ada-project-c6176-default-rtdb.firebaseio.com/";

//funcion init inicializa la carga de datos
const init = () => {
    fetch(`${base}pets.json`)
        .then((response) => response.json())
        .then((data) => {
            createTable(data);
        });
};
init();

const eliminar = (id) => {
    console.log(id);
    fetch(`${base}pets/${id}.json`, {
        method: "DELETE",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .then(init);
};

//data i get from FETCH
const createTable = (data) => {
    const tbody = document.getElementById("pets-list");
    tbody.innerHTML = "";
    for (let object in data) {
        const tr = document.createElement("tr");
        for (let item in data[object]) {
            const td = document.createElement("td");
            td.innerHTML = data[object][item];
            tr.appendChild(td);
        }
        const botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = "Eliminar";
        const colEliminar = document.createElement("td");
        botonEliminar.setAttribute("class", "btn btn-danger");
        botonEliminar.addEventListener("click", () => {
            eliminar(object);
        });
        colEliminar.appendChild(botonEliminar);
        tr.appendChild(colEliminar);

        const botonEditar = document.createElement("button");
        botonEditar.innerHTML = "Editar";
        const colEditar = document.createElement("td");
        botonEditar.setAttribute("class", "btn btn-warning");
        botonEditar.addEventListener("click", () => {
            window.location = `detailpets.html?name=${object}`;
        });
        //para que el boton editar me lleve a editar el objeto seleccionado, lo tengo que pasar como parametro. el signo de ? separa la url del parametro (queryparams) que quiero especificar.
        colEditar.appendChild(botonEditar);
        tr.appendChild(colEditar);

        tbody.appendChild(tr);
    }
};