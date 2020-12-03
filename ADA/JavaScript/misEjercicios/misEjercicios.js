//BUSCAR DUPLICADOS
let scores = [1, 18, 18, 23, 25, 25]

//arr = el array que le paso en parametro. val = el valor que busco
const cantidadVentasComponente = function (arr, val) {
    return arr.reduce((acc, elem) => {
        //? = si es igual, que duplique su valor. : si no que lo añada.
        return (val === elem ? acc + 1 : acc)
    }, 0);
};
console.log(cantidadVentasComponente(scores, 25)); // 2