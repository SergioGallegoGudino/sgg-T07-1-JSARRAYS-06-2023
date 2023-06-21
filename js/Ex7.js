console.log("Ejercicio 7");

// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.

arrayNumeros = [11, 45, 33, 23, 16, 32, 90, 87, 22, 1];

const filtrarNumeros = (array) => {
    let filtro = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] > 5){
            filtro.push(array[i]);
        } 
    }

    console.log(filtro);

}

filtrarNumeros(arrayNumeros);

