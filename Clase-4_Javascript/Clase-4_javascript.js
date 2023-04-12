// Ejercicio 1
let numberMonth = parseInt(prompt("Ingrese el numero de mes que quiera saber"));
switch (numberMonth) {
  case 1:
    console.log("El mes numero " + numberMonth + " es Enero");
    break;
  case 2:
    console.log("El mes numero " + numberMonth + " es Febrero");
    break;
  case 3:
    console.log("El mes numero " + numberMonth + " es Marzo");
    break;
  case 4:
    console.log("El mes numero " + numberMonth + " es Abril");
    break;
  case 5:
    console.log("El mes numero " + numberMonth + " es Mayo");
    break;
  case 6:
    console.log("El mes numero " + numberMonth + " es Junio ");
    break;
  case 7:
    console.log("El mes numero " + numberMonth + " es Julio ");
    break;
  case 8:
    console.log("El mes numero " + numberMonth + " es Agosto");
    break;
  case 9:
    console.log("El mes numero " + numberMonth + " es Septiembre");
    break;
  case 10:
    console.log("El mes numero " + numberMonth + " es Octubre");
    break;
  case 11:
    console.log("El mes numero " + numberMonth + " es Noviembre");
    break;
  case 12:
    console.log("El mes numero " + numberMonth + " es Diciembre");
    break;
  default:
    console.log("Ingrese un numero mayor a 1 y menor o igual a 12");
}

// Ejercicio 2
console.log("");
console.log("Ejercicio 2");
console.log("");

let week_Day = parseInt(prompt("Ingrese el numero de dia que quiera saber"));
switch (week_Day) {
  case 1:
    console.log("El día numero " + week_Day + " es Lunes");
    break;
  case 2:
    console.log("El día numero " + week_Day + " es Martes");
    break;
  case 3:
    console.log("El día numero " + week_Day + " es Miercoles");
    break;
  case 4:
    console.log("El día numero " + week_Day + " es jueves");
    break;
  case 5:
    console.log("El día numero " + week_Day + " es viernes");
    break;
  case 6:
    console.log("El día numero " + week_Day + " es sabado");
    break;
  case 7:
    console.log("El día numero " + week_Day + " es domingo");
    break;
  default:
    console.log("Ingrese un numero valido");
}

// Ejercicio 3
console.log("");
console.log("Ejercicio 3");
console.log("");

let vocal = prompt(
  "Ingrese una letra para saber si es vocal o consonante"
).toLowerCase();

switch (vocal) {
  case "a":
    console.log("La letra " + vocal + " es una vocal");
    break;
  case "e":
    console.log("La letra " + vocal + " es una vocal");
    break;
  case "i":
    console.log("La letra " + vocal + " es una vocal");
    break;
  case "o":
    console.log("La letra " + vocal + " es una vocal");
    break;
  case "u":
    console.log("La letra " + vocal + " es una vocal");
    break;
  default:
    console.log("La letra ingresada es una consonante");
}

// Ejercicio 4
console.log("");
console.log("Ejercicio 4");
console.log("");

let day = prompt("Ingrese un numero de dia, del lunes a viernes");
let days = ["lunes", "martes", "miercoles", "jueves", "viernes"];

switch (day) {
  case "1":
    console.log("El numero " + day + " Es el dia " + days[0] + " de la semana");
    break;

  case "2":
    console.log("El numero " + day + " Es el dia " + days[1] + " de la semana");
    break;

  case "3":
    console.log("El numero " + day + " Es el dia " + days[2] + " de la semana");
    break;
  case "4":
    console.log("El numero " + day + " Es el dia " + days[3] + " de la semana");
    break;
  case "5":
    console.log("El numero " + day + " Es el dia " + days[4] + " de la semana");
    break;

  default:
    console.log("Ingrese un  numero valido");
    break;
}

// Ejercicio 5
console.log("");
console.log("Ejercicio 5");
console.log("");

let letter = prompt("Ingrese una Letra");

switch (letter) {
  case letter.toLocaleLowerCase():
    console.log("la letra ingresada es minuscula");
    break;
  case letter.toLocaleUpperCase():
    console.log("La letra ingresada es mayuscula");
    break;
}

// Ejercicio 6
console.log("");
console.log("Ejercicio 6");
console.log("");

const notas = () => {
  let notus = document.getElementById("notus");
  let af = notus.value;

  console.log(af);

  switch (af) {
    case "1":
      console.log("SUSPENSO");
      break;
    case "2":
      console.log("SUSPENSO");
      break;
    case "3":
      console.log("SUSPENSO");
      break;
    case "4":
      console.log("SUSPENSO");
      break;
    case "5":
      console.log("Aprobado");
      break;
    case "6":
      console.log("Aprobado");
      break;
    case "7":
      console.log("Aprobado");
      break;
    case "8":
      console.log("Notable");
      break;
    case "9":
      console.log("Notable");
      break;
    case "10":
      console.log("Sobresaliente");
      break;
    default:
      console.log("Ingrese una nota valida");
  }
};

console.log("Tarea 2 Ejercicios con ciclos o bucles controlados");
console.log("");

// Ejercicio 1

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("");
console.log("Ejercicio 2");
console.log("");

let frases = ["Hola", "Mundo", "ALVARO", "ROJAS"];

for (let i = 0; i < frases.length; i++) {
  console.log(frases[i].toUpperCase());
}

console.log("");
console.log("Ejercicio 3");
console.log("");

// Ejercicio 3

const impresion = () => {
  let numero = document.getElementById("Num");
  let num = numero.value;
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

console.log("");
console.log("Ejercicio 4");
console.log("");

// Ejercicio 4

let uno = parseInt(prompt("Ingrese el primero"));
let dos = parseInt(prompt("ingrese el segundo"));
let tres = parseInt(prompt("ingrese el tercero"));
let cuarto = parseInt(prompt("Ingrese el cuarto"));

let arr = [uno, dos, tres, cuarto];

const minMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("El numero mas grande de los ingresados es " + max);
};

minMax(arr);

console.log("");
console.log("Ejercicio 5");
console.log("");

// Ejercicio 5

let palabra = prompt("Ingrese  una  palabra para saber si es palindromo o no");
let revertido = palabra.split("").reverse().join("");

const palindromoONo = (palabra, revertido) => {
  if (revertido == palabra) {
    return console.log(revertido + " Es palindromo");
  } else {
    console.log(revertido + " No es palindromo");
  }
};
palindromoONo(palabra, revertido);

console.log("");
console.log("Ejercicio 6");
console.log("");

// Ejercicio 6

const input = prompt("Ingrese una serie de números separados por coma:");

const numbers = input.split(",");
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const num = parseInt(numbers[i]); // convertir el string a número
  if (num % 2 === 0) {
    sum += num;
  }
}

// Imprimir la suma de los números pares en la consola
console.log("La suma de los números pares es: " + sum);

console.log("");
console.log("Ejercicio 7");
console.log("");

// Ejercicio 7

const inpul = prompt("Ingrese una serie de números separados por coma:");

const number = input.split(",");

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  const num = parseInt(number[i]);

  if (num < 0) {
    count++;
    count++;

    count;
  }
}

console.log("La cantidad de números negativos es: " + count);

console.log("");
console.log("Ejercicio 8");
console.log("");

// Ejercicio 8

const num = parseInt(prompt("Ingrese un número:"));

for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("");
console.log("Ejercicio 9");
console.log("");

// Ejercicio 9

const numeros = prompt("Ingresa una serie de números separados por coma:");

const numerosArray = numeros.split(",").map(Number);

const numeroMasPequeno = Math.min(...numerosArray);

console.log(`El número más pequeño es: ${numeroMasPequeno}`);

console.log("");
console.log("Ejercicio 10");
console.log("");

// Ejercicio 10

// Generamos un número aleatorio entre 1 y 100
// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// let contadorIntentos = 0;

// function adivinaNumero() {

//   const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

//   contadorIntentos++;

//   if (numeroUsuario === numeroAleatorio) {
//     console.log(`¡Felicidades, adivinaste el número en ${contadorIntentos} intentos!`);
//   } else {
//     const pista = numeroUsuario > numeroAleatorio ? "menor" : "mayor";
//     console.log(`El número que buscas es ${pista} que ${numeroUsuario}`);

//     adivinaNumero();
//   }
// }

// adivinaNumero();

console.log("");
console.log("Ejercicio 11");
console.log("");

// Ejercicio 11
const numeross = prompt("Ingresa una serie de números separados por coma:");

const numerosArrayy = numeross.split(",").map(Number);

let contadorPares = 0;

// Iteramos sobre el array de números y contamos la cantidad de números pares
for (let i = 0; i < numerosArrayy.length; i++) {
  if (numerosArrayy[i] % 2 === 0) {
    contadorPares++;
  }
}

console.log(`La cantidad de números pares es: ${contadorPares}`);




