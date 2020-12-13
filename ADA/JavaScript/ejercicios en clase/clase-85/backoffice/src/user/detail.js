const agregarUsuario = (event) => {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const clave = document.getElementById("clave");

    const user = {
        name: name.value,
        email: email.value,
        password: clave.value,
    }

    fetch("https://ada-frontend-1d227-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user),
    }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}

const boton = document.getElementById("agregar");
boton.addEventListener('click', agregarUsuario);