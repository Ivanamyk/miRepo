const base = 'https://ada-project-c6176-default-rtdb.firebaseio.com';

const inputNombre = document.getElementById('name');
const inputEspecie = document.getElementById('especie');
const inputEdad = document.getElementById('edad');

const addPet = (event) => {
    event.preventDefault();

    const pets = {
        name: inputNombre.value,
        breed: inputEspecie.value,
        age: inputEdad.value,
    }

    fetch(base + 'pets.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(pets),

    }).then((response) => {
        console.log(response);
        return response.json()

    }).then((data) => {
        console.log(data)
    })
}

const botonAgregar = document.getElementById('agregar');
//cuando es un form se pone 'submit'
form.addEventListener('submit', addPet)