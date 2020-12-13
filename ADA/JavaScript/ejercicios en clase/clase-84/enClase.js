//FETCH (trae datos de data base. dos parametros: url y )
const url = "http://url-de-la-api.com";
fetch(url + '/users')
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
    });

//POST (guarda/añade datos)
const url = "http://url-de-la-api.com";
const tag = {
    name: 'tag de prueba',
};
//JSON.stringify (pasa datos JSON a strings)
let tagJsonString = JSON.stringify({ tag: tag });
//tiene 2 parametros
fetch(urlBase + '/users', {
    method: 'POST',
    Headers: {
        'Content-Type': 'Application/json'
    },
    body: tagJsonString,
}).then((response => {
    return response.json()
})).then(data => {
    console.log(data);
})

// //JSON.parse (When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), 
//and the data becomes a JavaScript object)