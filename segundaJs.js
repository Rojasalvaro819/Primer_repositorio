// Tipos de datos

let string = 'H'; // string --> cadena de caracteres
let number = 1; // number --> número
let boolean = true; // boolean --> verdadero o falso
let array = [1, 2, 3, "hola", false ]; // array --> arreglo
let objeto = {nombre: "Diego", apellido: "Olmi", edad: 36 }// objeto --> objeto

//script que retorne un booleano

// Simpre para resolver un problema debo cortarlo en partes más pequeñas 
//Escribir un script que retorne un booleano cuando un numero sea mayor que otro.

// let numero1 = 10;
// let numero2 = 20;

// let resultado = numero1 > numero2;

// console.log(resultado);

//Tipos de operadores

//Operadores aritméticos

let x = 5 + 3; // Suma
let y = 10 - 5; // Resta
let z = 3 * 4; // Multiplicación
let a = 10 / 2; // División
let b = 10 % 3; // Módulo (resto de la división)

//Operadores 

let c = 10; // Asignación
let d = 10 == 10 ; // igualación
let e = 10 === 10; // igualación estricta
let f = 10 != 10; // Diferencia
let g = 10 !== 10; // Diferencia estricta
let h = 10 > 10; // Mayor que
let i = 10 < 10; // Menor que
let j = 10 >= 10; // Mayor o igual que
let k = 10 <= 10; // Menor o igual que
let l = 10 && 10; // AND
let m = 10 || 10; // OR

let numero1 = 10; // Igualdad
let numero2 = "8"; // Igualdad

let resultado = numero1 !== numero2;

// console.log(resultado);

// Metodos de string

let texto = "Hola campeon";
let texto2 = "del mundo"
let longitud = texto.length; // Longitud de la cadena de caracteres
let mayuscula = texto.toUpperCase(); // Mayusculas
let minuscula = texto.toLowerCase(); // Minusculas
let sacarEspacios = texto.trim(); // Elimina espacios al inicio y al final
let buscar = texto.indexOf("mundo"); // Busca la posición de un caracter
let reemplazar = texto.replace("mundo", "Diego"); // Reemplaza un caracter por otro
let subCadena = texto.slice(0, 4); // Extrae una subcadena de una cadena de caracteres
let concatenar = texto + " " + texto2
let split = texto.split(" "); // Divide una cadena de caracteres en un array
// let ingresoDeDatos = prompt("Ingrese su nombre").toLowerCase().trim()  ;

let numero = parseInt("10"); // Convierte un string a un número
let numero3 = parseInt("123abc"); // Convierte un string a un número
let numero4 = parseFloat("123.456"); // Convierte un string a un número
// console.log(numero4)

// Funciones.

function saludar() {
    console.log("Hola mundo");
}

saludar();




// function sumar(){
//     console.log("Es linea se muestra")
//     return 5;
//     console.log("Esta linea no se muestra")
   
// }
// let = resultado = sumar();
// console.log(resultado);

// Funciones con parametros

// function sumar(numero1, numero2){
//     let resultado = numero1 + numero2;
//     console.log(resultado)
// }
// sumar(10, "20");

// Arrow function


const restar = () => {
    let result = restar1 - restar2;
    console.log(result)
}

restar(5, 3);

//TAREA

// HACER EL QUIZ JAVASCRIPT 1

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

// Crear una funcion que reciba dos parametros y retorne la suma de ambos // Funcion normal

// Crear una funcion que reciba dos parametros y retorne la resta de ambos // Funcion normal

// Crear una funcion que reciba dos parametros y retorne la multiplicacion de ambos // Funcion normal

// Crear una funcion que reciba dos parametros y retorne la division de ambos // Funcion normal

// Crear Arrow function que reciba dos parametros ingresados mediante promp y que arme una frase con ellos en minuscula y con los espacios eliminados

// Crear Arrow function que reciba dos parametros ingresados mediante promp y que arme una frase con ellos en mayuscula y con los espacios eliminados




