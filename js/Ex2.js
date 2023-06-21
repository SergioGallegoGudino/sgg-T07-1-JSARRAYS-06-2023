console.log("Ejercicio 2");

// 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola

let arrayPlanetas = ["Mercurio", "Venus", "La Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];

const listaPlanetas = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i+1}. ${array[i]}`);
    }
}

console.log(listaPlanetas(arrayPlanetas));