const leer = require("prompt-sync")();

//pueda multiplicar o dividir dos números dependiendo del usuario

let num1 = 0;
let num2 = 0;
let opElegida1 = "multiplicar";
let opElegida2 = "dividir";
let opcionMultiplicar = "multiplicar"
let opcionDividir = "dividir"
let resultadoMultiplNum = num1 * num2;
let resultadoDivisNum = num1 / num2;
opElegida1 = leer();
opElegida2 = leer();



console.log("Ingresa un número");
num1 = leer();

console.log("Ingresa otro número");
num2 = leer();


console.log("Quieres multiplicar  o dividir los numeros ingresados? ");
multiplicar = leer();
dividir = leer();


if (opcionMultiplicar == "multiplicar") {

    console.log("El resultado es", resultadoMultiplNum)

} else if (opElegida2 == "dividir") {
    console.log("El resultado es", resultadoDivisNum);
}