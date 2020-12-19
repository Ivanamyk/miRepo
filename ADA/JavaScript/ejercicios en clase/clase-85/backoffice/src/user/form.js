const base = 'https://ada-project-c6176-default-rtdb.firebaseio.com'

const url = new URL(window.location)
const id = url.searchParams.get('name');

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputClave = document.getElementById("clave");

const agregarUsuario = (event) => {
    event.preventDefault();

    const user = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputClave.value,
    }

    fetch(`${base}users.json`, {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user),
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}

const editarUsuario = (event) => {
    event.preventDefault();

    const user = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputClave.value,
    }

    fetch(`${base}users/${id}.json`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user),
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}

const cargarForm = (id) => {
    fetch(`${base}users/${id}.json`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            inputName.value = data.name
            inputEmail.value = data.email
            inputClave.value = data.password
        })
}

const boton = document.getElementById("agregar");

if (id) {
    boton.innerHTML = "Actualizar";
    cargarForm(id);
    boton.addEventListener('click', editarUsuario);
} else {
    boton.addEventListener('click', agregarUsuario);
}