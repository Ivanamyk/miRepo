//PROMESAS 
//cumplen condiciones para ejecutarse. si la respuesta de la funcion es correcta se ejecuta "resolve". 
//Sino, "reject". Siempre recive 2 parametros. 
const callback = (resolve, reject) => {
    promesaExitosa = true;

    const response = {
        success: promesaExitosa,
        data: {
            user: "Adrian",
            email: "123@456",
            password: "12345"
        }
    }

    if (promesaExitosa) {
        resolve(response);
    }
    else {
        //
        reject(response);
    }
}

//cuando uso new estoy hablando de objetos. recibe callbacks
const miPromesa = new Promise(callback);
//then es la accion que viene luego de ejecutar la promise. ahi capturo el resolve. se termino de correr la promesa y 
//puedo obtener respuesta de la promesa.
miPromesa.then((respuesta) => {
    if (respuesta.success) {
        console.log(`la promesa devolvio el usuario ${respuesta.data.user}`)
    }
});

//en catch capturo el error. si no me tira error en la consola y se puede romper la aplicacion
miPromesa.catch((error) => {
    console.log(error)
});

//PALABRAS RESERVADAS
try {
    //codigo
    imprimir();
    //codigo
}

catch {
    //pantalla con mensaje de error hecho por nosotros para "controlar el error", asi el sistema no se rompe.
}

//PROTOCOLO HTTP & METODOS HTTP (API)
//se envian datos y pasan por este protocolo. protocolo de transferencia

//API
//aplicacion alojada en un servidor en espera de nuestra peticion para darnos una respuesta.
// http://miAplicacion.com/usuarios?id=30 - cuando le pongo ? le estoy pasando un parametro (en este caso que filtre por usuarios de 30)

//.Fetch() - traer info de una API. recibe string como parametro.
//aca hay dos then osea 2 promesas que, primero se tiene que cumplir una condicion para que siga con la proxima.
fetch('inhabitant.json')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(algo => {
        console.log(algo)
    })
//siempre recordar usar .catch para "obtener" el error y que no rompa mi pagina.
//     .catch(error) => {
//     console.log(error)
// }