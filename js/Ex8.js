console.log("Ejercicio 8");

// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
// elemento y lo saque por consola.

javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
javascript2 = ["Objetos", "Arrays", "ParseInt"];

const filtroPalabra = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])){
            console.log(array1[i]);
        }
    }
}

filtroPalabra(javascript1, javascript2);