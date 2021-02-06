const base = "https://ada-project-c6176-default-rtdb.firebaseio.com/";

const url = new URL(window.location);
const id = url.searchParams.get("pepe");
console.log(id)

const inputNombre = document.getElementById("name");
const inputEspecie = document.getElementById("especie");
const inputEdad = document.getElementById("edad");

const addPet = (event) => {
    event.preventDefault();

    const pets = {
        name: inputNombre.value,
        breed: inputEspecie.value,
        age: inputEdad.value,
    };

    fetch(base + "pets.json", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(pets),
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
};

const cargarFormulario = (id) => {
    fetch(`${base}pets/${id}.json`)
        .then((response) => {
            return response.json();
        })
        .then(({ name, breed, age }) => {
            inputNombre.value = name;
            inputEspecie.value = breed;
            inputEdad.value = age;
        });
};



const updatePet = (event, id) => {
    event.preventDefault()
    const pet = {
        name: inputNombre.value,
        breed: inputEspecie.value,
        age: inputEdad.value,
    };

    fetch(`${base}pets/${id}.json`, {
        method: "PATCH",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(pet),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
    })
}

const botonSubmit = document.getElementById("submit");

if (id) {
    cargarFormulario(id);
    botonSubmit.addEventListener("click", (e) => updatePet(e, id));
    botonSubmit.innerHTML = 'Actualizar'
} else {
    botonSubmit.addEventListener("click", addPet);
}

//cuando es un form se pone 'submit'
