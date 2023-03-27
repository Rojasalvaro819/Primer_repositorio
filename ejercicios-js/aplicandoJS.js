alert("hola mundo por alerta");

function hola() {
  alert("Hola mundo desde boton HTML");
}
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

var num1 = 5;
var num2 = 3;
var r = num1 + num2;
function suma() {
  alert("La suma de " + num1 + " + " + num2 + " Es igual a " + r);
}

suma;

let nombr = (prompt("Ingrese su nombre"));
let apellid = (prompt("Ingrese su apellido"));

function saludo(nombr, apellid) {
  let result = nombr + " " + apellid;

   alert("hola bienvenido " + result);
}

saludo(nombr, apellid);

var valor1 = parseInt(prompt("ingrese el primer numero"));
var valor2 = parseInt(prompt("Ingrese el segundo numero"));
var resto = valor1 + valor2;
function sumita (valor1,valor2,resto){   

   return alert ("El resultado de su suma es " + resto);

}
sumita(valor1,valor1,resto)
