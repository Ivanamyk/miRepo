/**
    Crear una función burlarse que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
 */

// const burlarse = (str) => {
//     const vocales = ["a", "e", "o", "u"];
//     for(let i = 0; str.length > i; i++) {
//         if(vocales.includes(str[i])){
//             str = str.replace(str[i], 'i');
//         }
//     }
//     return str;
// }

//remplaza por i toda vocal que esta dentro de /[aeou]/g
const burlarse = (str) => str.replace(/[aeou]/g, "i");

const rta = burlarse("programar es dificil");

console.log(rta);