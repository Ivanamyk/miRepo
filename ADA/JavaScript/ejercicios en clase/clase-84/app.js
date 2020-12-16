//Ejercicio 1 - Zorro
const base = 'https://randomfox.ca/floof'

fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const span = document.getElementById('spanPic');
const buttonM = document.getElementById('getPic');
const showPic = (data) => {
    for (let object in data) {
        console.log(object)
        for (let item in data[object]) {
            span.innerHTML = data[object][item];
        }
    }
}
buttonM.addEventListener('click', showPic);

const renderImage = (url) => {
    const img = document.createElement("img");
    img.setAttribute("src", `${base}${url}`);
    img.className = "img";
    return img
}