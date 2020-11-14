// Propiedades y valores

const user = {
    name: "Adrian",
    lastName: "Solimano",
    age: 37,
    phone: "123 123 123",
};

// Leer, agregar, modificar y eliminar propiedades

// console.log(user.name);

user.address = "Una dirección 1234";

user.address = "Otra dirección 321";

delete user.phone;

console.log(user);

// Chequeando propiedades: operador in

// console.log("name" in user);

// Notación de puntos y de corchetes

// console.log(user.name);
// console.log(user["name"]);

// Accediendo a propiedades mediante variables

const formControls = ["name", "email", "phone", "password"];

for (let value of formControls) {
    // code
    user[value];
}

const key = "lastName";

// console.log(user[key]);

// Propiedades computadas (vs literales)

user["txt"] = "Esto es un texto";

user["txt" + 4] = "Otro valor";

user.txt4 = "Cambio de texto";

console.log(user);

// for...in

const inhabitants = getInhabitants();

for (const inhabitant of inhabitants) {
    for (const prop in inhabitant) {
        console.log(prop, inhabitant[prop]);
    }
}
