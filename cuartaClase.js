// SWITH

// SINTAXIS DE SWITCH

// switch (expresion) {
//   case valor1:
//     // Instrucciones
//     break;
//   case valor2:
//     // Instrucciones
//     break;
//   default:
//     // Instrucciones
//     break;
// }

// Ejemplo

// let dia = "jueves";

// switch (dia) {
//     case "lunes":
//         console.log("Hoy es lunes")
//         break;
//     case "martes":
//         console.log("Hoy es martes")
//         break;
//     case "miercoles":
//         console.log("Hoy es miercoles")
//         break;
//         default:
//             console.log("No es un dia de la semana")
//             break;
// }

// Ejemplo 2

// let miBandaFavorita = prompt("¿Cual es tu banda favorita?").toUpperCase();

// switch (miBandaFavorita) {
//     case "LOS PINGÜINOS DE MADAGASCAR":
//         console.log("Que buen gusto tienes")
//         break;
//     case "AC/DC":
//         console.log("Que buen gusto tienes")
//         break;
//     case "LA RENGA":
//         console.log("Que buen gusto tienes")
//         break;
//     case "LOS REDONDOS":
//         console.log("Que buen gusto tienes")
//         break;
//     case "LOS PIOJOS":
//         console.log("Que buen gusto tienes")
//         break;
//     default:
//         console.log("Sos amargo te gusta Elegante")
//         break;
// }

// BUCLES O CICLOS
// FOR WHILE DO WHILE

// Los ciclos for, while y do-while son estructuras de control de flujo que se utilizan en programación para repetir un bloque de código varias veces hasta que se cumpla una condición.

// FOR

// SINTAXIS DE FOR

// for (inicializacion; condicion; incremento) {
//     // accion que vamos a ejecutar
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// Imprimir los números pares del 1 al 20 en la consola.

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

// const array = [1, 2, 3, 4, "Hola"];

// for (let i = 4; i < array.length; i++) {
//     console.log(array[i])
// }

// WHILE
//El ciclo while se utiliza cuando no se conoce el número de veces que se va a repetir el bloque de código, pero se conoce la condición de salida. La sintaxis del ciclo while es la siguiente:

// SINTAXIS DE WHILE

// while(condicion) {
//     // accion que vamos a ejecutar
// }

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// DO WHILE
// El ciclo do-while es similar al ciclo while, pero se ejecuta al menos una vez, ya que la condición se evalúa después de ejecutar el bloque de código.

// SINTAXIS DE DO WHILE

// do {
//     // accion que vamos a ejecutar
// }while (condicion)

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// Adivinar un numero entre 1 y 20 con un ciclo while

// const numeroSecreto =  Math.floor(Math.random() * 20) + 1;

// let numeroIngresado

// while (numeroIngresado !== numeroSecreto) {
//     // console.log(numeroSecreto)

//     numeroIngresado = parseInt(prompt("Adivina el numero secreto entre 1 y 20"));

//     if (numeroIngresado === numeroSecreto) {
//         console.log("Felicitaciones, adivinaste el numero secreto");
//     } else if (numeroIngresado > numeroSecreto) {
//         console.log("El numero secreto es menor");
//     } else if (numeroIngresado < numeroSecreto) {
//         console.log("El numero secreto es mayor");
//     }  else if (numeroIngresado > 20) {  
//         console.log("Pone un numero menor salame");
//     } else {
//         console.log("No es un numero");
//     }
// }

// Pedir al usuario un número positivo utilizando do while.

let number;

do {
  number = parseInt(prompt("Ingresa un número positivo"));
} while (number <= 0);

console.log("El número ingresado es: " + number);

// En este caso, se utiliza el ciclo do while para pedir al usuario que ingrese un número positivo. Primero, se declara la variable number sin un valor definido. Dentro del ciclo, se utiliza la función parseInt y el método prompt para pedirle al usuario que ingrese un número. Luego, se verifica si el número ingresado es menor o igual a 0. Si es así, se volverá a ejecutar el ciclo y se pedirá al usuario que ingrese un número nuevamente. Si el número ingresado es mayor que 0, se saldrá del ciclo y se imprimirá el mensaje "El número ingresado es: " seguido del número ingresado por el usuario.

// Array 

// Los arrays son una estructura de datos que nos permite almacenar varios valores en una sola variable. Para acceder a los valores de un array, utilizamos un índice numérico.

// SINTAXIS DE ARRAY

// let array = [1 , 2 , 3 ];

// Crear un array:
// Para crear un array, simplemente se utiliza la sintaxis de corchetes [] y se separan los elementos con comas. Por ejemplo:

const numbersCrear = [1, 2, 3, 4, 5];

// Acceder a elementos de un array:
// Para acceder a un elemento de un array, se utiliza su índice (la posición que ocupa en el array). El primer elemento tiene un índice de 0, el segundo elemento tiene un índice de 1, y así sucesivamente. Por ejemplo:

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3


// Agregar elementos a un array:

// Para agregar un elemento al final de un array, se utiliza el método push(). Por ejemplo:

const numbersAdd = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbersAdd); // [1, 2, 3, 4, 5, 6]

// Para agregar un elemento al inicio de un array, se utiliza el método unshift(). Por ejemplo:

const numbersInicio = [1, 2, 3, 4, 5];

numbersInicio.unshift(0);
console.log(numbersInicio); // [0, 1, 2, 3, 4, 5]

// Para agregar un elemento en una posición específica de un array, se utiliza el método splice(). Por ejemplo:

const numbersSplice = [1, 2, 3, 4, 5];

numbersSplice.splice(2, 0, 2.5);
console.log(numbersSplice); // [1, 2, 2.5, 3, 4, 5]

// En este caso, se utiliza el método splice() para agregar el elemento 2.5 en la posición 2 del array. El primer parámetro es la posición en la que se va a agregar el elemento, el segundo parámetro es la cantidad de elementos que se van a eliminar a partir de la posición indicada, y el tercer parámetro es el elemento que se va a agregar.

// Eliminar elementos de un array:

// Para eliminar el último elemento de un array, se utiliza el método pop(). Por ejemplo:

const numbersPop = [1, 2, 3, 4, 5];

numbersPop.pop();
console.log(numbersPop); // [1, 2, 3, 4]

// Para eliminar el primer elemento de un array, se utiliza el método shift(). Por ejemplo:

const numbersShift = [1, 2, 3, 4, 5];

numbersShift.shift();
console.log(numbersShift); // [2, 3, 4, 5]

// Para eliminar un elemento en una posición específica de un array, se utiliza el método splice(). Por ejemplo:

const numbersSpliceDelete = [1, 2, 3, 4, 5];

numbersSpliceDelete.splice(2, 1);
console.log(numbersSpliceDelete); // [1, 2, 4, 5]

// En este caso, se utiliza el método splice() para eliminar el elemento en la posición 2 del array. El primer parámetro es la posición en la que se va a eliminar el elemento, y el segundo parámetro es la cantidad de elementos que se van a eliminar a partir de la posición indicada.

// Obtener la longitud de un array:
// Para obtener la cantidad de elementos que tiene un array, se utiliza la propiedad length. Por ejemplo:

const numbersLength = [1, 2, 3, 4, 5];

console.log(numbersLength.length); // 5

// En este caso, se utiliza la propiedad length para obtener la cantidad de elementos que tiene el array numbers.

// Encontrar elementos en un array:
// Para encontrar la posición de un elemento en un array, se utiliza el método indexOf(). Por ejemplo:

const numbersIndex = [1, 2, 3, 4, 5];

console.log(numbersIndex.indexOf(3)); // 2

// En este caso, se utiliza el método indexOf() para encontrar la posición del elemento 3 en el array numbers. Como el elemento 3 está en la posición 2, se imprime 2. Si el elemento no está en el array, devuelve -1


// Encontrar el máximo o el mínimo de un array:

// Para encontrar el máximo o el mínimo de un array, se utiliza el método Math.max() o Math.min() y se le pasa como parámetro el array. Por ejemplo:

const numbersMax = [1, 2, 3, 4, 5];

console.log(Math.max(...numbersMax)); // 5

// En este caso, se utiliza el método Math.max() para encontrar el máximo de los elementos del array numbers. Como el máximo es 5, se imprime 5.

// Para encontrar el mínimo de un array, se utiliza el método Math.min() y se le pasa como parámetro el array. Por ejemplo:

const numbersMin = [1, 2, 3, 4, 5];

console.log(Math.min(...numbersMin)); // 1

// En este caso, se utiliza el método Math.min() para encontrar el mínimo de los elementos del array numbers. Como el mínimo es 1, se imprime 1.

//Ordenar elementos de un array:
// Para ordenar los elementos de un array, se utiliza el método sort(). Por defecto, ordena los elementos alfabéticamente

const stringSort = [a, d, b, c, e];

stringSort.sort();

console.log(numbersSort); // [a, b, c, d, e]

// En este caso, se utiliza el método sort() para ordenar los elementos del array string. Como los elementos son letras, se ordenan alfabéticamente.

// Para ordenar los elementos de un array de números, se utiliza el método sort() y se le pasa como parámetro una función de comparación. Por ejemplo:

const numbersSort = [1, 2, 3, 4, 5];

numbersSort.sort((a, b) => a - b);

console.log(numbersSort); // [1, 2, 3, 4, 5]

// En este caso, se utiliza el método sort() para ordenar los elementos del array numbers. Como los elementos son números, se ordenan de menor a mayor.


//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

//TAREA 2 Ciclos 

// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

//TAREA 3 Arrays

// Dado un array de números, escribir una función que retorne el número más grande del array.

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

