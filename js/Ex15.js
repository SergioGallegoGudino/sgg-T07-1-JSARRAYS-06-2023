console.log("Ejercicio 15");

// 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// anterior para sacarlas por consola.

let arrayRecetas = [];

class Receta {
    constructor(nombre, tiempo, ingredientes){
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.ingredientes = ingredientes;
    }
}

const r1 = new Receta ("Macarrones con tomate", "1 hora", ["Salsa de tomate", "Macarrones", "Agua", "Sal", "Queso rallado"]);
const r2 = new Receta("Espaguetis a la boloñesa", "1 hora y 30 minutos", ["Salsa boloñesa", "Espaguetis", "Agua", "Sal", "Laurel"]);
const r3 = new Receta("Ensalada de pasta", "45 minutos", ["Pajaritas", "Atún", "Judias", "Aceite", "Sal"]);

arrayRecetas.push(r1);
arrayRecetas.push(r2);
arrayRecetas.push(r3);

mostrarRecetas(arrayRecetas);