console.log("Ejercicio 12");

// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//     tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//     propiedades para todos los objetos.

let bebidas = [
    {
        "nombre" : "Fanta",
        "version" : "zero",
        "precio" : 0.80
    },
    {
        "nombre" : "Coca-Cola",
        "version" : "light",
        "precio" : 1.20
    },
    {
        "nombre" : "Monster",
        "version" : "mango",
        "precio" : 1.80
    }
]

const filtroBebidas = (bebidas) => {
    for (let i = 0; i < bebidas.length; i++) {
        console.log(bebidas[i].precio);
    }
}

filtroBebidas(bebidas);