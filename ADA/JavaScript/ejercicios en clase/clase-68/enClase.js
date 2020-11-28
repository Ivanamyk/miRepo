const personas = [
    "Adrian",
    "Sabrina",
    "Agostina",
    ["Mailen", "Valetina", "Ludmila"],
    "Belen",
];

// console.log(personas[3][1]);

const numeros = [1, 2, 3, 4];

let a = 5;

let b = a;

a = 7;

// console.log(a);
// console.log(b);

const personas2 = personas.slice();

personas2.push("Emilce");

personas2[0] = "Pepe";

console.log(personas);
console.log(personas2);