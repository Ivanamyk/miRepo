var myData = [];
var myCards = '';
//inicio primero esta en el console
function getData() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {

        method: "get"
    })
        .then(response => response.json())
        .then(json => getCategories(json))
        .catch(function (err) {
        });
}
//luego pruebo con esta funcion para verificar. Sino no me aparece nada (tengo que llamar la info primero)
function getCategories(data) {
    data.categories.forEach(element => {
        {
            myData.push({
                "id": element.idCategory,
                "categoria": element.strCategory,
                "imagen": element.strCategoryThumb,
                "descripcion": element.strCategoryDescription
            })
        }
    })
    console.log(myData)
};

function showCard() {
    myData.forEach(item => {
        myCards += `<div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-text">${item.categoria}</h2>
        <p class="card-text"> ID: ${item.id}</p>
            <p class="card-text">${item.descripcion}</p>
        </div>
    </div>`
    })

    document.getElementById('infoCards').innerHTML = myCards;
} console.log(myCards)