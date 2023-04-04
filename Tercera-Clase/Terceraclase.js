const resto = () => {
  var num1 = prompt("Ingrese un numero para saber si es para o impar");

  if (num1 % 2 == 0) {
    console.log("Su numero es par");
  } else if (num1 % 2 != 0) {
    console.log("Su numero es impar");
  } else {
    console.log("Ingrese un numero valido");
  }
};
resto();

console.log("");
console.log("Ejercicio 2");
console.log("");

// Ejecicio 2
let ingreso = prompt("Ingrese un numero para saber si es positivo o negativo");

const ejer2 = (ingreso) => {
  if (ingreso == 0) {
    console.log(ingreso + " Es un numero neutro");
  } else if (ingreso > 0) {
    console.log(ingreso + " Es un numero positivo ");
  } else {
    console.log(ingreso + " Es un numero negativo");
  }
};

ejer2(ingreso);

// Ejecicio 3
console.log("");
console.log("Ejercicio 3");
console.log("");

let primero = prompt("Ingrese el primer numero");
let segundo = prompt("Ingrese el segundo numero");

const ejer3 = () => {
  if (primero > segundo) {
    console.log("El numero " + primero + " es mayor que " + segundo);
  } else if (primero < segundo) {
    console.log("El numero " + primero + " es menor que " + segundo);
  } else if (primero == segundo) {
    console.log("Los dos numeros son iguales");
  }
};
ejer3(primero, segundo);

// Ejecicio 4
console.log("");
console.log("Ejercicio 4");
console.log("");

var password = prompt(
  "Ingrese una contraseña de 8 caracteres minimo y sin espacios"
);

const validacion = (password) => {
  if (password.length < 8 || password.includes(" ") == true) {
    console.log(
      "Su contraseña no cumple con 8 caracteres minimos o contiene espacios"
    );
  } else {
    console.log("Su contraseña fue aprobada");
  }
};

validacion(password);

// Ejecicio 5
console.log("");
console.log("Ejercicio 5");
console.log("");

let nota = prompt("Ingrese su nota de este semestre");

function aprobado_O_No(nota) {
  if (nota < 70) {
    console.log("Usted esta desaprobado");
  } else if (nota >= 70 && nota <= 100) {
    console.log("Usted aprobó");
  }
}

aprobado_O_No(nota);

// Ejecicio 6
console.log("");
console.log("Ejercicio 6");
console.log("");

let letra = prompt(
  "Ingrese una letra para saber si es vocal o consonante"
).toLowerCase();
function bocal_O_Consonante(letra) {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    console.log("Esta letra es una vocal");
  } else {
    console.log("Esta letra es una consonante");
  }
}
bocal_O_Consonante(letra);

// Ejecicio 7
console.log("");
console.log("Ejercicio 7");
console.log("");

let number = prompt(
  "Ingrese un numero del 1 al 7 y le devolvera el dia de la semana correspondiente"
);

const dia = (number) => {
  if (number == 1 && number <= 7) {
    console.log("El dia numero " + number + " de la semana es Lunes");
  } else if (number == 2 && number <= 7) {
    console.log("El dia numero " + number + " de la semana es martes");
  } else if (number == 3 && number <= 7) {
    console.log("El dia numero " + number + " de la semana es miercoles");
  } else if (number == 4 && number <= 7) {
    console.log("El dia numero " + number + " de la semana es jueves");
  } else if (number == 5 && number <= 7) {
    console.log("El dia numero " + number + " de la semana es viernes");
  } else if (number == 6 && number <= 7) {
    console.log("El dia numero " + number + " de la semana es sabado");
  } else if (number = 7) {
    console.log("El dia numero " + number + " de la semana es domingo");
  } else if (number < 0 || number > 7) {
    console.log("Ingrese un numero de la semana valido");
  }
};

dia(number);

// Ejecicio 8
console.log("");
console.log("Ejercicio 8");
console.log("");

let mum = prompt("Ingrese un numero para saber si es primo o no");
const primo = (mum) => {
  if (mum < 2) {
    return console.log("No es un numero primo");
  }
  for (let i = 2; i < mum; i++) {
    if (mum % i === 0) {
      return console.log("No es un numero primo");
    }
  }
  return console.log("Si es un numero primo");
};

primo(mum);

// Ejecicio 9
console.log("");
console.log("Ejercicio 9");
console.log("");

let edad = prompt(
  "Ingrese su edad para saber si usted es mayor o menor de edad"
);

const mayor_O_Menor = (edad) => {
  if (edad < 18) {
    return console.log("Usted es menor de edad");
  } else {
    return console.log("Usted es mayor de edad");
  }
};

// Ejecicio 10
console.log("");
console.log("Ejercicio 10");
console.log("");

mayor_O_Menor(edad);

let number_One = prompt("Ingrese el  primer numero que quiere sumar");
let number_Two = prompt("Ingrese el segundo numero que quiere sumar");

const suma = () => {
  if (number_One + number_Two < 100) {
    return console.log("La suma de sus numeros es menor que 100");
  } else if (number_One + number_Two > 100) {
    return console.log("La suma de sus dos numeros es mayor que 100");
  } else if (number_One + number_Two == 100) {
    return console.log("La suma de sus dos numeros es igual a 100");
  }
};
suma(number_One, number_Two);

// Ejecicio 11
console.log("");
console.log("Ejercicio 11");
console.log("");

let first = parseInt(prompt("Ingrese el primer numero"));
let second = parseInt(prompt("Ingrese el segundo numero"));
let third = parseInt(prompt("Ingrese el tercer numero"));

const numero_Mayor = (first, second, third) => {
  if (first > second && first > third) {
    return console.log("El numero " + first + " es el mayor de los 3");
  } else if (second > first && second > third) {
    return console.log("El numero " + second + " es el mayor de los 3");
  } else if (third > first && third > second) {
    return console.log("El numero " + third + " es el mayor de los 3");
  }
};
numero_Mayor(first, second, third);

// Ejecicio 12
console.log("");
console.log("Ejercicio 12");
console.log("");

let letter = prompt("Ingrese una letra");

const minus_O_Mayus = () => {
  if (letter === letter.toUpperCase()) {
    return console.log("Su letra es mayuscula");
  } else if (letter === letter.toLocaleLowerCase()) {
    return console.log("La letra es minuscula");
  }
};

minus_O_Mayus(letter);

// Ejecicio 13
console.log("");
console.log("Ejercicio 13");
console.log("");

let n = parseInt(prompt("Ingrese un numero para saber si es perfecto o no"));

let ac = 0,
  i = n - 1;

const Perfect_O_No = () => {
  while (i > 0) {
    r = n % i;
    if (r == 0) {
      ac = ac + i;
    }
    i = i - 1;
  }
  if (n == ac) {
    return console.log("El numero es perfecto");
  } else {
    return console.log("El numero no es perfecto");
  }
};
Perfect_O_No(ac, i, n);

// Ejecicio 15
console.log("");
console.log("Ejercicio 15");
console.log("");

let day = parseInt(prompt("Ingrese el dia"));
let month = parseInt(prompt("Ingrese el mes"));
let year = parseInt(prompt("Ingrese el año"));

const date = (day, month, year) => {
  if (day <= 31 && month <= 12 && year <= 2023) {
    return console.log(
      "La fecha ingresada es: " + day + "/" + month + "/" + year
    );
  } else {
    return console.log("Ingrese una fecha valida");
  }
};

date(day, month, year);
