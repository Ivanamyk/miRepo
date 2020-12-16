const base = 'https://ada-project-c6176-default-rtdb.firebaseio.com'

const agregarUsuario = (event) => {
    //prevent a default accion and bf that you can do more actions.
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const clave = document.getElementById("clave");

    const user = {
        name: name.value,
        email: email.value,
        password: clave.value,
    }

    fetch(base + '/users.json', {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user),
        //traigo la info de mi API con este Fetch
    }).then((response) => {
        console.log(response);
        return response.json()
        //traigo la info de mi API con este Fetch
    }).then((data) => {
        console.log(data)
    })
}

const boton = document.getElementById("agregar");
boton.addEventListener('click', agregarUsuario);