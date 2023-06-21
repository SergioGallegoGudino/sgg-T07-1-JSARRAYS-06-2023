console.log("Ejercicio 6");

// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

let arrayNumeros = [11, 45, 33, 23, 16, 32, 90, 87, 22, 1];

const dividirNumeros = (array) => {
    let arrayPar = [];
    let arrayImpar = [];

    for(let i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            arrayPar.push(array[i]);
        } else{
            arrayImpar.push(array[i]);
        }
    }

    console.log(arrayPar.concat(arrayImpar));

}

dividirNumeros(arrayNumeros);