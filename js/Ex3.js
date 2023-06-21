console.log("Ejercicio 3");

// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en
// su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los
// últimos dos elementos. Obtén el índice del elemento "Funciones".

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.shift();

javascript1.unshift("Objetos");

javascript1.pop();

javascript1.push("ArraysDificiles");

let javascript1Copia = [javascript1[javascript1.length-2], javascript1[javascript1.length-1]];

console.log(javascript1);

console.log(javascript1Copia);

console.log(javascript1Copia.indexOf("Funciones"));