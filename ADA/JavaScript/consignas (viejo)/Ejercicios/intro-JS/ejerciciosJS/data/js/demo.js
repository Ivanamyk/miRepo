function alerta(data) {
    alert(data);
}

function suma(a, b) {
    resultado = a + b;
    return resultado;
}
function capitalize(data) {
    capitalized = data;
    return capitalized;
}

function cambiarcolor(color) {
    document.getElementById("demo").style.backgroundColor = color;
}
function cambiarwidth(width) {
    document.getElementById("demo2").style.width = width;
}
function cambiarWidthFijo() {
    miwith = "30%";
    document.getElementById("demo2").style.width = miwith;
}

function cambiarTexto(elemento, mitexto) {
    document.getElementById(elemento).innerHTML = mitexto;
}

function obtenerContenido(elemento) {
    var data = document.getElementById(elemento).textContent
    alert(data)
    return data
}

function obtenerContenido2(elemento, mitexto) {
    if (elemento == "demo2") {
        document.getElementById(elemento).innerHTML = "hola mundo";
    } else {
        document.getElementById(elemento).innerHTML = mitexto;

    }
}

function sumar(elemento) {
    // con parseInt convierto a entero el string del valor
    var n1 = parseInt(document.getElementById("a").value);
    var n2 = parseInt(document.getElementById("b").value);
    var total = n1 + n2;
    console.log("mi suma es: " + total);
    data = document.getElementById(elemento).innerHTML =
        "resultado: " + total;
    console.log(data);
}

function obtenerContenido3(elemento, mitexto) {
    var data;
    if (elemento == 'demo2') {
        document.getElementById(elemento).innerHTML = 'hola mundo';
    } else {
        document.getElementById(elemento).innerHTML = mitexto;

    }
}

function mostrarNumeros() {
    var n = 0;
    while (n <= 5) {
        console.log("contando: " + n)
        n++;
    }
    return n;
}

function llenarTabla() {
    var n = 0;
    var celdas = "";
    while (n <= 5) {
        console.log("contando: " + n);
        celdas = celdas + "<tr><td>" + n + "</td></td>";
        console.log("celdas: " + celdas);
        n++;
    }
    mitabla = cambiarTexto("mitabla", celdas);
    return n;
}

function llenarTabla2() {
    var n = 0;
    var celdas = "";
    for (var i = 0; i <= 5; i++) {
        console.log("contando: " + i);
        celdas = celdas + "<tr><td>" + n + "</td></td>";
        console.log("celdas: " + celdas);
    }
    cambiarTexto("mitabla", celdas);
    return n;
}

function llenarTabla3S() { //array de datos
    let frutas = ["manzana", "banana", "pera", "kiwi", "naranja", "arandanos"];
    var celdas = "";
    for (var i = 0; i <= 5; i++) {
        console.log("contando: " + i);
        celdas = celdas + "<tr><td>" + frutas[i] + "</td></td>";
        console.log("celdas: " + celdas);
    }
    cambiarTexto("mitabla", celdas);
    console.log("mi array: " + frutas.length);
    console.log("mi array pos 3: " + frutas[3]);

    return frutas;
}

function llenarTabla4() {
    let frutas = ["manzana", "banana", "pera", "kiwi", "naranja", "arandanos"];
    var celdas = "<tr><td>" + frutas[2] + "</td></td>";
    cambiarTexto("mitabla", celdas);
}

let objeto = {
    0: ["pipo"],
    1: ["maxi"],
    2: ["juan"],
};

let emp = [];
emp[0] = "casey jones";
emp[1] = "phil lesh";
emp[2] = "agust west";

let empl = [];
let listaempleados = "";
let listaordenadaempleados = "";

function agregarEmpleado() {
    nuevoempleado = obtenerContenidoEmpleado("empleado");
    empl.push(nuevoempleado);
    console.log("mi empleado: " + nuevoempleado);
    mostrarNuevoEmpleado(nuevoempleado);
    return empl;
}

function obtenerContenidoEmpleado(elemento) {
    var data = document.getElementById(elemento).value;
    return data;
}

function ordenarEmpleados() {
    empleadosordenados = empl.sort(); //ordeno mi array
    console.log("empleados ordenados " + empleadosordenados);

    empleadosordenados.forEach((item) => {
        listaordenadaempleados = listaordenadaempleados + "<tr><td>" + item + "</td></td>"; //lo guardo en la variable
        console.log("lista tabla: " + listaordenadaempleados);
    });
    cambiarTexto("mitabla", listaordenadaempleados);
    return empleadosordenados;
}

function mostrarNuevoEmpleado(empleado) {
    listaempleados = listaempleados + "<tr><td>" + empleado + "</td></td>";
    console.log("celdas: " + listaempleados);
    mitabla = cambiarTexto("mitabla", listaempleados);
    return empleado;
}

function validar_Documento(doc) {
    var tipo_doc = doc.value;
    switch (tipo_doc) {
        case "DNI":
            cambiarTexto("doc_seleccionado", "usted selecciono DNI")
            console.log("DNI");
            break;
        case "CUIT":
            var data = (document.getElementById("doc_seleccionado").innerHTML = "usted selecciono CUIT");
            console.log("CUIT en mayusculas: " + tipo_doc.toLowerCase());
            break;
        case "Pasaporte":
            alert("usted selecciono Pasaporte")
            console.log("Pasaporte");
            break;
        default:
            alert("tipo de documento no valido")
            console.log("Documento no valido");
    }
}


