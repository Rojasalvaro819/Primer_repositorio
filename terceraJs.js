//funciones

function suma() {
  let resultado = 5 + 5;
  console.log(resultado);
}
// suma();

// Arrow function

const restar = () => {
  let resultado = 5 - 3;
  console.log(resultado);
};

// restar();

//Funcion con parametros

const parametros = (parametro1, parametro2, nombre) => {
  let resultado = parametro1 - parametro2;
  console.log(resultado, nombre);
};

// parametros(8,5, "Resta")

let numero1 = 10; // Igualdad
let numero2 = 8; // Igualdad
let numero3 = "10"; // Igualdad

const comparar = (numero1, numero2, numero3) => {
  let resultado1 = numero1 === numero3;
  // console.log(resultado1)
};

// comparar(numero1, numero2, numero3)

// return

// const retornar = (numero1, numero2) => {
//     let resultado = numero1 + numero2;
//     return resultado;
// }
// // console.log(retornar(5, 5))

// const nombres = () => {
//     console.log("Diego")
//     return "Diego" // devuelve el valor de la funcion, corta la ejecucion de la funcion
//     console.log("Nacho")
// }

// // console.log(nombres())

// // Metodo MATH

// let math1 = 5
// let math2 = 10
// let resultado = Math.min(math1, math2)
// //  console.log(resultado)

// let numAleatorio = Math.random()
// // console.log(numAleatorio)

// let numeroEntero = Math.floor(numAleatorio * 100)

// // console.log(numeroEntero)

// let aleatorio2 = Math.floor(Math.random() * 50) + 1;
// console.log(aleatorio2)

// const tragaMonedas = () => {
//   let numero1 =  Math.floor(Math.random() * 10) + 1;
//    let numero2 = Math.floor(Math.random() * 10) + 1;
//     let numero3 = Math.floor(Math.random() * 10) + 1;
//     // let resultado = numero1 + numero2 + numero3;
//     // console.log ( `Te salio ${numero1} ${numero2} ${numero3}` )
// }

// tragaMonedas()

// let b = 5.5
// let a = Math.round(b)
// console.log(a)

// let c = 16
// let d = Math.sqrt(c) // raiz cuadrada
// console.log(d)

// // Estructuras de control
// // if y else -----> if Si se cumple la condicion, se ejecuta el codigo, si no se cumple, se ejecuta el else <----- SINO

// let edad = 16;
// if (edad >= 18) {
//     console.log("Podes votar, sera tu primera votacion")
// } else {
//     console.log("No podes votar")
// }

// if (edad >= 18) {
//     console.log("Podes sacat tu carnet de conducir")
// } else if (edad >= 16) {
//     console.log("Podes sacar tu carnet de moto")
// } else {
//     console.log("No podes sacar ningun carnet")
// }

const funcion1 = (num) => {
  if (num % 2 == 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
};

console.log(funcion1(4));

const funcion2 = (numero) => {
  if (numero == 5 || numero == 15) {
    return "Es multiplo de 5";
  } else {
    return "No es multiplo de 5";
  }
};
console.log(funcion2(3));

const palindromo = (palabra) => {
  let palabraInvertida = palabra.split("").reverse().join("");
  if (palabra == palabraInvertida) {
    return "Es palindromo";
  } else {
    return "No es palindromo";
  }
};

console.log(palindromo("ana"));
console.log(palindromo("River"));


//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.



