// Funciones declarativas
// tienen la palabra reservada function y el nombre de la funcion.

// console.log(miFuncion(15))

function miFuncion(parametro) {
  return parametro;
}

// Funciones Anonimas

const miFuncionAnonima = () => {
  return 2;
};

// console.log(miFuncionAnonima())

// Callbacks

// Es una funcion que se pasa como parametro a otra funcion

// const primeraFuncion = (nombre, callback) => {

//    callback(nombre)
//     console.log('Hola soy la primera funcion')

// }

// const segundaFuncion = (nombre) => {

//     console.log('Hola soy la segunda funcion y me pasaron ' + nombre + "por parametro")
// }

// primeraFuncion("diego", segundaFuncion);

// Primera funcion
const ejecutarFuncion = (callback) => {
  //Mostrame los nombres de los datos que traje por medio de la api.

  nombres.api = [];

  // console.log('Primero imprimo esto y a los 3 segundos se imprime la segunda funcion que llamamos callback')
  setTimeout(() => {
    callback();
  }, 10000);
};

const imprimirMensaje = () => {
  console.log("Hola soy la funcion que se paso como parametro"); //llamada api donde va a traer datos.
  // Por lo general tiene un retraso.

  // cuando tenga todos los datos que solicito. Tiene que ejecutar la primera funcion
};

// ejecutarFuncion(imprimirMensaje)
//SetTimeout

// Callback es una funcion que ejecuta otra funcion que le pasamos por parametro.

const nuevaFucion = (segundaFuncion) => {
  console.log("Hola soy la nueva funcion");
  segundaFuncion();
};

const imprimirMensaje2 = () => {
  console.log("Hola soy la funcion que se paso como parametro");
};

// nuevaFucion(imprimirMensaje2)

//CRUD

// Create Read Update Delete
//ABM (Alta Baja Modificacion)

// Carrito de compras. Hacer que se pueda Agregar, Listar y Eliminar un producto.

// Crear un array de productos. Cada producto tiene un nombre  ---> Nombre del array --> productos

// Tengo que agregar productos al array ---> Agregar productos al array --> push

// Tengo que listar los productos del array ---> Listar productos del array --> for

// Tengo que eliminar un producto del array ---> Eliminar productos del array --> splice

// Carrito de compras.

let productos = ["Coca Cola", "Pepsi", "Fanta"];

//Agregar productos al array

const agregarProducto = (producto) => {
  productos.push(producto);
  console.log(`Agragaste el producto ${producto} al carrito`);
};

//Listar productos del array

const listarProductos = () => {
  if (productos.length === 0) {
    console.log("No hay productos en el carrito");
  } else {
    productos.forEach((pepito, index) => {
      console.log(`El producto ${pepito} esta en la posicion ${index}`);
    });
  }
};

//Eliminar productos del array

const eliminarProducto = (producto) => {
   const productoAEliminar = productos.indexOf(producto);
    if (productoAEliminar > -1) {
        productos.splice(productoAEliminar, 1);
        console.log(`Eliminaste el producto ${producto} del carrito`);
    } else {
        console.log(`No existe el producto ${producto} en el carrito`);
    }
};

// agregarProducto("Coca Cola");
listarProductos();
eliminarProducto("Fernet");
console.log(productos);

// Tarea.

// Carrito le tenemos que hacer toda la UI. Tenemos que agregar productos al carrito por pantalla. 

// Tenemos que filtrar por nombre de producto. Mostrarlo en pantalla. Averiguar con que metodo de array puedo hacer un filtro.

// Mostrar en pantalla que producto se agrega, cual se elimina y los que estan en el carrito.