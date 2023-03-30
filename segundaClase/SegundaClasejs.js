let suma = 5 + 5;
let resultado = suma;

console.log(resultado);

// Ejercicio 2

var dif1 = 6;
var dif2 = 4;

console.log(dif1 == dif2);

// Ejercicio 3

console.log(dif1 != dif2);

//Ejercicio 4

let aumento = 5;
aumento++;
console.log("variable con primer incremento " + aumento);
aumento++;
console.log("variable con segundo incremento " + aumento);
aumento++;
console.log("variable con tercer incremento " + aumento);
aumento++;
console.log("variable con cuarto incremento " + aumento);
aumento++;
console.log("variable con quinto incremento " + aumento);
// Ejercicio 5
console.log("");
console.log("Ejercicio 5");
console.log("");

let decremento = 10;
decremento--;
console.log("variable con primer decremento " + decremento);
decremento--;
console.log("variable con segundo decremento " + decremento);
decremento--;
console.log("variable con tercer decremento " + decremento);
// Ejercicio 6
console.log("");
console.log("ejercicio 6");
console.log("");

let saludo = "Alvaro";
console.log("Bienvenido a rolling code " + saludo);
// Ejercicio 7
console.log("");
console.log("ejercicio 7");
console.log("");

var dato1 = true;
var dato2 = false;

console.log(dato1 && dato2);
// Ejercicio 8
console.log("");
console.log("ejercicio 8");
console.log("");

console.log(dato1 || dato2);
// Ejercicio 9
console.log("");
console.log("ejercicio 9");
console.log("");

var num1 = 10;
var num2 = 15;
console.log(num1 < num2);
// Ejercicio 10
console.log("");
console.log("ejercicio 10");
console.log("");

console.log(num1 >= num2);
// Ejercicio 11
console.log("");
console.log("ejercicio 11");
console.log("");

const ingresar = prompt("Ingrese su nombre");
console.log("Hola wachin " + ingresar.toLowerCase().trim());
// Ejercicio 12
console.log("");
console.log("ejercicio 12");
console.log("");

let greeting = prompt("Ingrese su nombre y su saludo");

console.log("Este este es el saludo de  " + greeting.toUpperCase().trim());

let sorrentinos = 2800;
let pollo = 1300;
let comida = sorrentinos + pollo;
console.log("El gasto total de la comida es $" + comida);
console.log("");

let gaseosa = 900;
let agua = 10000;
let bebida = gaseosa + agua;
console.log("El gasto total de las bebidas es $" + bebida);
let cena = comida + bebida;
console.log("");

console.log("El gasto total de su cena es $" + cena);

if (cena < 10000) {
  console.log("Su cena es menos de $10.000");
} else {
  console.log(
    "Su cena paso los $10.000 pesos Tendremos que cobrarle un impuesto"
  );
}

let nota = () => "holamundis";

