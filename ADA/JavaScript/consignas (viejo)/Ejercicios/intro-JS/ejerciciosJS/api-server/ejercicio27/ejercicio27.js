var myDrinks = [];
var myIngredients = [];

//trae datos de todo el JSON
function getDataApi() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c", {

        method: "get"
    })
        .then(response => response.json())
        .then(json => getDrinks(json))
        .catch(function (err) {
        });
}
//trae solo los ingredientes
function getIngrApi() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c", {

        method: "get"
    })
        .then(response => response.json())
        .then(json => getIngredients(json))
        .catch(function (err) {
        });
}

function getDrinks(item) {
    item.drinks.forEach(element => {
        myDrinks.push({
            'id': element.idDrink,
            'name': element.strDrink,
            'video': element.strVideo,
            'category': element.strCategory,
            'instructions': element.strInstructions,
            'glass': element.strGlass,
            'tags': element.strTags,
        })
    });
    console.log(myDrinks)
}

function getIngredients(data) {
    data.drinks.forEach(element => {
        myIngredients.push({
            'n°1': element.strIngredient1,
            'n°2': element.strIngredient2,
            'n°3': element.strIngredient3,
            'n°4': element.strIngredient4,
            'n°5': element.strIngredient5,
            'n°6': element.strIngredient6,
            'n°7': element.strIngredient7,
            'n°8': element.strIngredient8,
            'n°9': element.strIngredient9,
            'n°10': element.strIngredient10,
            'n°11': element.strIngredient11,
            'n°12': element.strIngredient12,
            'n°13': element.strIngredient13,
            'n°14': element.strIngredient14,
            'n°15': element.strIngredient15,
        })
    })
    //convierto el array de objetos a un simple array
    convertedArray = Object.entries(myIngredients);
    console.log(convertedArray)
    filteredIng = convertedArray.map()
}


