const base = 'https://ada-project-c6176-default-rtdb.firebaseio.com';

const addPet = (event) => {
    event.preventDefault();
    const nombre = document.getElementById('name');
    const raza = document.getElementById('breed');
    const edad = document.getElementById('age');

    const pets = {
        name: nombre.value,
        breed: raza.value,
        age: edad.value,
    }

    fetch(base + '/pets.json', {
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

const form = document.getElementById('agregarPet');
//cuando es un form se pone 'submit'
form.addEventListener('submit', addPet)