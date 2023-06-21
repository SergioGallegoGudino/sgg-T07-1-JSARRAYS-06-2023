console.log("Ejercicio 13");

// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.

let receta = {
    "nombre" : "Macarrones con tomate",
    "tiempo" : "1 hora",
    "ingredientes" : ["Salsa de tomate", "Macarrones", "Agua", "Sal", "Queso rallado"]
}

const mostrarReceta = (receta) => {
    console.log(`Nombre: ${receta.nombre}`);
    console.log(`Tiempo de preparacion: ${receta.tiempo}`);
    console.log("Ingredientes:");
    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log(`${i+1}-${receta.ingredientes[i]}`);
    }

}

mostrarReceta(receta);