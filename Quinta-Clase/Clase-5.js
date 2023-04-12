const tarea = ()=>{



const productos = [
  { nombre: "harina", precio: 200 },
  { nombre: "levadura", precio: 150 },
  { nombre: "salsa", precio: 250 },
  { nombre: "queso", precio: 130 },
  { nombre: "jamon", precio: 180 },
  { nombre: "cerveza", precio: 500 },
  { nombre: "gaseosa", precio: 400 },
];

let carrito = [];

let seleccion = prompt("Bienvenido desea comprar productos?");

while (seleccion != "si" && seleccion != "no") {
  alert("Ingrese si o no");
  seleccion = prompt("desea compra algún producto?");
}

if (seleccion == "si") {
  alert("Estos son los  productos disponibles ");
  let todoslosProductos = productos.map(
    (productos) => productos.nombre + " " + productos.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias vuelva pronto!!");
}

while (seleccion != "no") {
  let producto = prompt("Agrega un producto  a tu carrito ");
  let precio = 0;

  if (
    producto == "harina" ||
    producto == "levadura" ||
    producto == "salsa" ||
    producto == "queso" ||
    producto == "jamon" ||
    producto == "cerveza" ||
    producto == "gaseosa"
  ) {
    switch (producto) {
      case "harina":
        precio = 200;
        break;
      case "levadura":
        precio = 150;
        break;
      case "salsa":
        precio = 250;
        break;
      case "queso":
        precio = 130;
        break;
      case "jamon":
        precio = 180;
        break;
      case "cerveza":
        precio = 400;
        break;
      case "gaseosa":
        precio = 500;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    carrito.push({producto,unidades,precio})
    console.log(carrito)
  } else {
    alert("ese producto  no esta disponible")
  }

  seleccion = prompt("Quiere otro producto?")

  while(seleccion === "no"){
    alert("gracias por su compra, vuelva pronto")
    
    carrito.forEach((carritoFinal) => {
        alert(` producto:(${carritoFinal.producto}) unidades:(${carritoFinal.unidades}) total a pagar$ ${carritoFinal.unidades * carritoFinal.precio} `)
    })
    break;
  }
}

const total = carrito.reduce((ecc,el)=> ecc + el.precio * el.unidades, 0)
alert(`el total a pagar es :${total}` )

}