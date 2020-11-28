// Trabajando con atributos
//      getAttribute - setAttribute - removeAttribute

// Modificando HTML
//      createTextNode - CreateElement - removeChild - replaceChild - appendChild - append - prepend

// innerHTML y template strings

const elem = document.getElementById("texto");

// console.log(elem);
// elem.setAttribute("data-src", "bg-primary");
// console.log(elem);
// console.log(elem.getAttribute("data-ref"));
// elem.removeAttribute("data-ref");
// console.log(elem);

const habitantes = getInhabitants();

console.log(habitantes);

const primerHabitante = habitantes[0];

console.log(primerHabitante);

const h1 = document.createElement("h1");
const imagen = document.createElement("img");
imagen.setAttribute("src", primerHabitante.thumbnail);

const texto = document.createTextNode(primerHabitante.name);
h1.appendChild(texto);

const ul = document.createElement("ul");

for (data of primerHabitante.professions) {
    const li = document.createElement("li");
    const texto = document.createTextNode(data);
    li.appendChild(texto);
    ul.appendChild(li);
}

const p = document.createElement("p");
p.appendChild(document.createTextNode("Texto de ejemplo"));

elem.appendChild(h1);
elem.appendChild(imagen);
elem.appendChild(ul);
elem.removeChild(imagen);
elem.appendChild(imagen);
elem.replaceChild(p, ul);

const { name, age } = primerHabitante;

elem.append(`Este personaje se llama ${name} y tiene ${age} años`);
elem.prepend("Escribo un texto directamente al principio");
elem.innerHTML = `<p>Este personaje se llama ${name} y tiene ${age} años</p>`;

//**EJERCICIOS**
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo

const temperatura = Number(prompt('Cuál es la temperatura actual?'));
const documento = document.body;
const h1 = document.createElement('h1');
h1.textContent = `Temperatura actual: ${temperatura}º`;

if (temperatura < 0) {
    h1.style.color = 'blue'
}
if (temperatura >= 0 && temperatura < 15) {
    h1.style.color = 'lightblue';
}
if (temperatura >= 15 && temperatura < 25) {
    h1.style.color = 'green'
}
if (temperatura >= 25 && temperatura < 30) {
    h1.style.color = 'yellow'
}
if (temperatura >= 30 && temperatura < 35) {
    h1.style.color = 'orange'
}
if (temperatura > 35) {
    h1.style.color = 'red'
}
documento.append(h1);

// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
