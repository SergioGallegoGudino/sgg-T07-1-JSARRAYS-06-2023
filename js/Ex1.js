console.log("Ejercicio 1");

// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola

let arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const letraRandom = (longitud) => {
    let randomLetra = Math.floor(Math.random() * longitud);
    return arrayLetras[randomLetra];
}

console.log(letraRandom(arrayLetras.length));