console.log("Ejercicio 4");

// 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let palabra = "Hola";

let arrayPalabra = palabra.split("");

let palabraInvertida = "";

for(let i = arrayPalabra.length-1; i >= 0; i--){
    palabraInvertida += arrayPalabra[i];
}

console.log(palabraInvertida);