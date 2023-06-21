console.log("Ejercicio 5");

// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
// 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const mezclarArrays = (array1, array2) => {
    mezcla = [];

    while(array1.length != 0){
        mezcla.push(array1[0]);
        mezcla.push(array2[0]);
        array1.shift();
        array2.shift();
    }

    console.log(mezcla);
}

mezclarArrays(array1, array2);
console.log(array1);
console.log(array2);