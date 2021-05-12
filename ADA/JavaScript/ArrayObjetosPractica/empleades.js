// Ejercicios Empleades 

//1. `empleadesQueHacenGuardia`, que devuelva un array con todes les empleades que hacen guardia
const hacenGuardia = empleades.filter(empleade => {
    //este tipo de metodos siempre devuelven algo por eso uso return
    return empleade.haceGuardia === true;
})
// console.log(hacenGuardia);

//2.`empleadesPorPais`, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país
const porPais = (pais) => {
    const filtro = empleades.filter(empleade => {
        return empleade.pais === pais;
    })
    return filtro;
}
// console.log(porPais('Argentina'));
// console.log(porPais('Uruguay'));

// //3.`empleadesPorArea`, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área
const porArea = (area) => {
    const filtro = empleades.filter(empleade => {
        return empleade.area === area;
    })
    return filtro;
}
// console.log(porArea('Soporte'));

// /*4.`empleadesConSueldoMayorA`, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan ese numero.
const sueldoMayor = (sueldo) => {
    const filtroSueldo = empleades.filter(empleade => {
        return empleade.sueldo >= sueldo;
    })
    return filtroSueldo;
}
// console.log(sueldoMayor('64868'));
//Metodo #2: el siguiente metodo me trae solamente le primer monto/empleado que encuentra no un array como es pedido
const sueldoMayorA = (sueldo) => {
    for (const empleade of empleades) {
        if (sueldo >= empleade.sueldo) {
            console.log(empleade.sueldo)
            return empleade.nombre
        }
    }
}
// console.log(sueldoMayorA('75000'));

// /* 5. `empleadesConMasLenguajes`, que tome por parámetro un número y devuelva un array con aquelles empleades
// que sepan más lenguajes que dicho número*/
const empleadesConMasLenguajes = (lenguajes) => {
    const filtro = empleades.filter(empleade => {
        //con lenght cuento los elementos dentro del array y comparo
        return empleade.lenguajes.length > lenguajes
    })
    return filtro;
}
// console.log(empleadesConMasLenguajes('3'));

// /*6. `sueldoPromedioEmpleades`, que devuelva el sueldo promedio de todos los empleados - sumar y dividir por todas las empleades*/
const sueldoPromedioEmpleades = empleades.reduce((acumulador, emple) => {
    //el reduce toma 2 parametros; el acumulador(va guardando lo comparado) y el numero a comparar y termina reduciendo a un solo resultado
    return acumulador + emple.sueldo / empleades.length
}, 0);
// console.log(sueldoPromedioEmpleades);

// ejer 6 resuelto en clase
const promedio = () => {
    const sueldoPromedio = empleades.reduce((acc, empleade, index) => {
        console.log({ acc, empleade, index });
        return acc + empleade.sueldo / empleades.length;
    }, 0);//el cero es lo que vale mi acumulador. yo le asigno el valor para comenzar mi funcion.si quiero que me devuelva objeto pongo {}
    return sueldoPromedio;
};
//Math.trunc se queda con la parte entera de un numero
// console.log(Math.trunc(promedio()))

// 7.`sueldoPromedioPorSeniority`,que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority*/
const sueldoPromedioPorSeniority = (seniority) => {
    const filtroBySeniority = empleades.filter(empleade => {
        return empleade.seniority === seniority;
    })
    const promedio = filtroBySeniority.reduce((acc, emple) => {
        return acc + emple.sueldo / filtroBySeniority.length
    }, 0);
    return Math.trunc(promedio)
}
// console.log(sueldoPromedioPorSeniority('Trainee'));

// /*8. `buscarEmpleades`, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority 
const buscarEmpleades = (area, puesto, seniority) => {
    return empleades.filter((empleade) => empleade.area === area && empleade.puesto === puesto && empleade.seniority === seniority)
}
// console.log(buscarEmpleades("QA", "Data analyst"e, "Junior"));

// 9. `errorEnProduccion`, que ponga en true la propiedad haceGuardia de todos los empleados.
const errorEnProduccion = empleades.filter(empleade => {
    if (empleade.haceGuardia == false) {
        return empleade.haceGuardia = true;
    }
})
// console.log(errorEnProduccion);

// /* 10 - `subirDeCategoria`, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior",
// cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"),
// y le incremente en 10000 el sueldo */

const subirDeCategoria = (empleade) => {
    if (empleade.seniority != 'Senior') {
        switch (empleade.seniority) {
            case 'Trainee':
                empleade.seniority = 'Junior';
                break;
            case 'Junior':
                empleade.seniority = 'Semisenior';
                break;
            case 'Semisenior':
                empleade.seniority = 'Senior';
                break;
            default:
                empleade.seniority;
                alert('error');
        }
        empleade.sueldo = empleade.sueldo + 10000;
    }
    return empleades;
}
// const cuartoEmpleade = empleades[4];
// console.log(cuartoEmpleade.seniority);
// console.log(cuartoEmpleade.sueldo);
// subirDeCategoria(cuartoEmpleade);
// console.log(cuartoEmpleade.seniority);
// console.log(cuartoEmpleade.sueldo);

// /* ejercicio 11 - `agregarTecnologias`, que agregue a todos los objetos empleades la propiedad tecnologías, que es un array 
// conteniendo los valores "GIT" y "Node.js" */
const agregarTecnologias = () => {
    const nuevaPropiedad = ['Git', 'Node.js'];
    empleades.forEach(empleade => {
        //creo una nueva propiedad con defineProperty y la meto en mi array de ojetos
        Object.defineProperty(empleade, 'Tecnologias', {
            value: nuevaPropiedad,
        })
    })
    return empleades;
}
// console.log(agregarTecnologias(empleades[1]))
// console.log(empleades[1])

// 12.`empleadeSabeLenguaje`, que tome por parámetro un objeto empleade y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje */
const empleadeSabeLenguaje = (perro, lenguaje) => {
    //JS sabe que estoy hablando de una porcion del array porque le pongo el .lenguajes, por eso lo puedo llamar como quiera.
    //es asi que el parametro de la persona se lo paso antes y no se lo tengo que pasar en la line 157/158
    const sabeLenguaje = perro.lenguajes.includes(lenguaje)
    return sabeLenguaje;
}
// console.log(empleadeSabeLenguaje(empleades[0], 'Python'));
// console.log(empleadeSabeLenguaje(empleades[1], 'Ruby'));

//13. `empleadesQueSabenLenguaje`, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior) 
const empleadesQueSabenLenguaje = (lenguaje) => {
    const sabenLenguaje = empleades.filter((empleade) => empleadeSabeLenguaje(empleade, lenguaje))
    return sabenLenguaje;
}
// console.table(empleadesQueSabenLenguaje("Python"));

//14.`empleadesQueSabenLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes
const empleadesQueSabenLenguajes = (array) => {
    //primero filtro y le digo, comparame (con el 'every' que busca si se da en cada uno de los elementos dicha condicion), el param lenguaje. Y le digo que eso lo compare con los lenguajes de cada uno de los empleades.
    const sabenLenguajes = empleades.filter((empleade) => {
        //check if every value of the array matches your condition
        return array.every((lenguaje) => {
            return empleade.lenguajes.includes(lenguaje)
        })
    })
    return sabenLenguajes;
}
// console.log(empleadesQueSabenLenguajes(['JavaScript', 'C#', 'Python', 'Java', 'Ruby', 'PHP']));

//15.`empleadesQueSabenAlgunosLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes
const empleadesQueSabenAlgunosLenguajes = (array) => {
    const result = empleades.filter(empleade => {
        //.find() states that you are looking for one particular array item. As for .some() , you are checking if the array contains items that fit your needs or not.
        return array.some((lenguaje) => {
            return empleade.lenguajes.includes(lenguaje);
        })
    })
    return result;
}
// console.log(empleadesQueSabenAlgunosLenguajes(['JavaScript', 'Python', 'PHP']));

//16. `empleadesConMejorSueldo`, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort).
const empleadesConMejorSueldo = () => {
    //el sort compara entre los dos primeros datos del array, y sucesivamente, por eso debo poner si o si a y b cuando comparo numeros.
    const mejoresSueldos = empleades.sort((a, b) => a.sueldo - b.sueldo)
    return mejoresSueldos.slice(0, 10);
}
// console.log(empleadesConMejorSueldo());

// 17. `obtenerTitulosCompletos`, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map).
const obtenerTitulosCompletos = () => {
    const result = empleades.map(empleade => {
        return `${empleade.nombre}, ${empleade.puesto}, ${empleade.area}`;
    })
    return result;
}
// console.log(obtenerTitulosCompletos());

// 18. `obtenerInfoPersonal`, que devuelva un array donde cada elemento es un objeto con las propiedades
// - nombre
// - pais
// - edad
// habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)
const obtenerInfoPersonal = () => {
    const result = empleades.map(empleade => {
        const nombre = empleade.nombre;
        const pais = empleade.pais;
        const edad = empleade.edad;

        return { nombre, pais, edad }
    })
    return result
}
// console.log(obtenerInfoPersonal());
//solucion 2
const obtenerInfoPersonal2 = () => {
    const result = empleades.map(empleade => {
        const datos = {
            nombre: empleade.nombre,
            pais: empleade.pais,
            edad: empleade.edad,
        }
        return datos;
    })
    return result;
}
// console.log(obtenerInfoPersonal2());

/*19. `obtenerInfoPuestos`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - area
    - puesto
    - seniority
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)*/
const obtenerInfoPuestos = () => {
    const result = empleades.map(empleade => {
        const data = {
            nombre: empleade.nombre,
            area: empleade.area,
            puesto: empleade.puesto,
            seniority: empleade.seniority,
        }
        return data;
    })
    return result;
}
// console.log(obtenerInfoPuestos());

/*20. `obtenerInfoSeniority`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - seniority
    - sueldo
    - cantidadLenguajes
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)*/
const obtenerInfoSeniority = () => {
    const result = empleades.map(empleade => {
        const cantidad = empleade.lenguajes.length;
        return {
            nombre: empleade.nombre,
            seniority: empleade.seniority,
            sueldo: empleade.sueldo,
            cantidadLenguajes: cantidad, //o directamente poner empleade.lenguajes.length
        }
    })
    return result;
}
// console.log(obtenerInfoSeniority());

// 21 -`obtenerInfoPagos`, que devuelva una array donde cada elemento es un objeto con las propiedades
// - nombre
// - sueldoBruto
// - obraSocial
// - jubilacion
// - sueldoNeto
// habiendo un elemento por cada empleade, donde
// - sueldoBruto es el sueldo del objeto original
// - obraSocial es el 3% del sueldoBruto
// - jubilacion es el 11% del sueldoBruto
// - sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion.
const obtenerInfoPagos = () => {
    //cuando solo retorno 1 cosa y no hago mas nada con ella, puedo poner directamente el return al principio
    return empleades.map((empleade) => {
        const obraSocial = empleade.sueldo * 0.03;
        const jubilacion = empleade.sueldo * 0.11;
        const sueldoNeto = empleade.sueldo - obraSocial - jubilacion;
        return {
            nombre: empleade.nombre,
            sueldoBruto: empleade.sueldo,
            obraSocial,
            jubilacion,
            sueldoNeto
        };
    });
};
// console.log(obtenerInfoPagos());

// 22. `obtenerEstadisticasSeniority` que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority
const obtenerEstadisticasSeniority = () => {
    return empleades.reduce((acc, empleade) => {
        if (acc[empleade.seniority]) {
            acc[empleade.seniority]++
        } else {
            acc[empleade.seniority] = 1
        }

        return acc
        //si yo pongo las llaves me va a devolver un objeto
    }, {})
}
// console.log(obtenerEstadisticasSeniority());

//COMPLETO EMPLEADES