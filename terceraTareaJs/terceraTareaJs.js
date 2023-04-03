/* Primer punto */

 const ingresarNumero = ()=> {
    const numero = prompt("Ingresa tu numero")
    if (numero % 2 == 0) {
        console.log("Tu numero es par");
      } else {
        console.log("Tu numero es impar");
      }
}

ingresarNumero()

/* Segundo punto */

const ingresarNumero2 = ()=> {
    const numero = prompt("Ingresa un numero positivo o negativo")
    if (numero < 0) {
        console.log("Este numero es negativo")
 }
    else if (numero > 0) {
        console.log("Este numero es positivo")
    }
    else {
        console.log("Este numero es un 0")
    }
}

ingresarNumero2()

/* Tercer punto */

const ingresarNumero3 = ()=> {
    const numero1 = prompt("Ingresa tu primer numero")
    const numero2 = prompt("Ingresa tu segundo numero")
    if (numero1>numero2) {
        console.log("El numero" + " " + numero1 + " " + "es mayor que el numero" + " " + numero2)
    }
    else {
        console.log("El numero" + " " + numero2 + " " + "es mayor que el numero" + " " + numero1)
    }
}

ingresarNumero3()

/* Cuarto punto */
    
/* Quinto punto */

let ingresarCalificacion = prompt("Ingresa tu calificacion")
    
    if (ingresarCalificacion >= 70) {
        console.log("Felicidades!, estas aprobado")
    }
    else if (ingresarCalificacion < 70) {
        console.log("Estas desaprobado")
    }

/* Sexto punto */

let ingresaTuLetra = prompt("Ingresa una letra")

if (ingresaTuLetra  == 'a' == 'e' == 'i' == 'o' == 'u'){
        console.log("Es una consonante")
    }
    else {
        console.log("Es una vocal")
    }

/* Septimo punto */

let ingresarNumeroDia = prompt("Ingresa un numero y obten el dia de la semana al que corresponde")

if (ingresarNumeroDia == '1'){
console.log("Es Domingo")
}
else if (ingresarNumeroDia == '2'){
    console.log("Es Lunes")
}
else if (ingresarNumeroDia == '3'){
    console.log("Es Martes")
}
else if (ingresarNumeroDia == '4'){
    console.log("Es Miercoles")
}
else if (ingresarNumeroDia == '5'){
    console.log("Es Jueves")
}
else if (ingresarNumeroDia == '6'){
    console.log("Es Viernes")
}
else if (ingresarNumeroDia == '7'){
    console.log("Es Sabado")
}

/* Octavo punto */

const numerosPrimos = prompt("Ingresa un numero primo")

    if (numerosPrimos == 2 || numerosPrimos == 3 || numerosPrimos == 5 || numerosPrimos == 7
         || numerosPrimos == 11 || numerosPrimos == 13 || numerosPrimos == 17 || numerosPrimos == 19) {
         console.log("Es un numero primo")
         }
    else {
        console.log("No es un numero primo")
    }

/* Noveno punto */

let ingresarEdad = prompt("Ingresa tu edad")

if (ingresarEdad >= 18){
    console.log("Eres mayor de edad")
}
else {
    console.log("Eres menor de edad")
}