const leer = require("prompt-sync")();

//Crear un juego para adivinar el número secreto definido dentro del programa donde el usuario tendrá 3 intentos

let numAAdivinar = "56";

console.log("Ingresa el numero a adivinar");

numAAdivinar = leer();

const MAX_ITERACION = 3

for (let i = 1; i < MAX_ITERACION; i++)  {
    let numIngresado = Number(leer());

    if (numIngresado == numAAdivinar) {
        console.log("Bravo! adivinaste!");
        

    } else if (numIngresado != numAAdivinar) {
        console.log("Intenta nuevamente. No es el numero correcto.");

    }

}
