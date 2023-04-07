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
console.log("")
console.log("Ejercicio 2")
console.log("")

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
console.log("")
console.log("Ejercicio 3")
console.log("")

let vocal = prompt("Ingrese una letra para saber si es vocal o consonante").toLowerCase()
 
switch (vocal){
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
            console.log("La letra ingresada es una consonante")
}

// Ejercicio 4
console.log("")
console.log("Ejercicio 4")
console.log("")

let day = prompt("Ingrese un numero de dia, del lunes a viernes")
let days = ["lunes","martes","miercoles","jueves","viernes"]

switch (day){
  case "1":
  console.log("El numero " + day + " Es el dia " +  days[0] + " de la semana")
    break;

    case "2":
      console.log("El numero " + day + " Es el dia " +  days[1] + " de la semana")
        break;

        case "3":
          console.log("El numero " + day + " Es el dia " +  days[2] + " de la semana")
            break;
            case "4":
              console.log("El numero " + day + " Es el dia " +  days[3] + " de la semana")
                break;
                case "5":
                  console.log("El numero " + day + " Es el dia " +  days[4] + " de la semana")
                    break;

    default:
      console.log("Ingrese un  numero valido")
    break;
}

// Ejercicio 5
console.log("")
console.log("Ejercicio 5")
console.log("")

let letter = prompt("Ingrese una Letra")

switch(letter){
  case letter.toLocaleLowerCase():
    console.log("la letra ingresada es minuscula")
    break;
    case letter.toLocaleUpperCase():
      console.log("La letra ingresada es mayuscula")
      break;
}

// Ejercicio 6
console.log("")
console.log("Ejercicio 6")
console.log("")

const notas = () =>{

  let note = parseInt  (prompt("Ingrese su nota para saber si calificación"))
let notus = document.getElementById("notus");
let af = notus.value;

console.log (af)

switch(af){
  case 1:
    console.log("SUSPENSO");
    break;
    case 2:
    console.log("SUSPENSO");
    break;
    case 3:
    console.log("SUSPENSO");
    break;
    case 4:
    console.log("SUSPENSO");
    break;
    case "5":
    console.log("Aprobado");
    break;
    case 6:
    console.log("Aprobado");
    break;
    case 7:
    console.log("Aprobado");
    break;
    case 8:
    console.log("Notable");
    break;
    case 9:
    console.log("Notable");
    break;
    case 10:
    console.log("Sobresaliente");
    break;
    default:
      console.log("Ingrese una nota valida")

}

}





