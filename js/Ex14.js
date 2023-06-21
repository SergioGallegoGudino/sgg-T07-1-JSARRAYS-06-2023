console.log("Ejercicio 14");

// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.

let recetas = [

    {
        "nombre" : "Macarrones con tomate",
        "tiempo" : "1 hora",
        "ingredientes" : ["Salsa de tomate", "Macarrones", "Agua", "Sal", "Queso rallado"]
    },
    {
        "nombre" : "Espaguetis a la boloñesa",
        "tiempo" : "1 hora y 30 minutos",
        "ingredientes" : ["Salsa boloñesa", "Espaguetis", "Agua", "Sal", "Laurel"]
    },
    {
        "nombre" : "Ensalada de pasta",
        "tiempo" : "45 minutos",
        "ingredientes" : ["Pajaritas", "Atún", "Judias", "Aceite", "Sal"]
    }

]

const mostrarRecetas = (recetas) => {
    for (let i = 0; i < recetas.length; i++) {
        console.log(`Nombre: ${recetas[i].nombre}`);
        console.log(`Tiempo de preparacion: ${recetas[i].tiempo}`);
        console.log("Ingredientes:");
        for (let x = 0; x < recetas[i].ingredientes.length; x++) {
            console.log(`${x+1}-${recetas[i].ingredientes[x]}`);
        }
    }
    

}

mostrarRecetas(recetas);