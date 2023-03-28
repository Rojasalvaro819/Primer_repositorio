//alert("hola mundo por alerta");

//function hola() {
//  alert("Hola mundo desde boton HTML");
//}
function holaText() {
  document.write("Hola mundo desde un documento de texto");
}

var nombre = "Alvaro";
var edad = 21;
var apellido = "Rojas";
var presenteONo = true;
var estatura = 1.79;

console.log("nombre: " + nombre + " " + typeof nombre);
console.log("apellido: " + apellido + " " + typeof apellido);
console.log("edad: " + edad + " " + typeof edad);
console.log("presenteONO : " + presenteONo + " " + typeof presenteONo);
console.log("estatura : " + estatura + " " + typeof estatura);

// var num1 = 5;
// var num2 = 3;
// var r = num1 + num2;
// function suma() {
//   alert("La suma de " + num1 + " + " + num2 + " Es igual a " + r);
// }

// suma;

// let nombr = (prompt("Ingrese su nombre"));
// let apellid = (prompt("Ingrese su apellido"));

// function saludo(nombr, apellid) {
//   let result = nombr + " " + apellid;

//    alert("hola bienvenido " + result);
// }

// saludo(nombr, apellid);

var valor1 = parseInt(prompt("ingrese el primer numero"));
var valor2 = parseInt(prompt("Ingrese el segundo numero"));
var resto = valor1 + valor2;
function sumita (valor1,valor2,resto){   

   return alert ("El resultado de su suma es " + resto);

}
sumita(valor1,valor1,resto)

if (true){
  var alvaro = "Elpibemanija"
}

console.log(alvaro)

var suma = 20 + 20;
console.log(suma)

var resta = 30 - 15;
console.log(resta)

var multi = 4*2;
console.log(multi)

var div = 24 / 4;
console.log(div)

var resto = 30%15
console.log(resto)

// operadores relacionales

console.log (5<2); // pregunta si 2 es mayor que 5 
console.log(20>15); //pregunta si 20 es mayor  a 15
console.log (20==20) //pregunta si los valores son iguales
var probando = 5;
console.log(probando<2) //Esto pregunta si 2 es menor que el valor que contiene la variable probando

var edad = 18;
var documento = true;

// ejemplo de and (tienen que cumplirse si o si todas las condiciones)

if (edad >=18 && documento == true){
  console.log("usted es mayor de edad y trajo su documento, puede pasar")
}

// ejemplo de OR(tiene que cumplirse por lo menos una de las condiciones)

if (edad>18  ||  documento==false ){
  console.log("usted tiene mas de 18 o no trajo su documento")
}

// operador not o ! (este operador cambia el valor logico de una variable si el valor es true lo convierte en false y si es false lo convierte en true)
let num1 = 4;
let num2 = 6;
let res = num1 < num2

console.log(res)
