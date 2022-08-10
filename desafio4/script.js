// ENTREGA 4 
//Codificar la funcionalidad inicial del simulador. 
//Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.
// Array en granos de cafe 

//DECLARACION DE PRODUCTOS
const Producto = [
  { nombre: "Colombia", precio: 2700 },
  { nombre: "Peru", precio: 3200 },
  { nombre: "Guatemala", precio: 3200 },
  { nombre: "PAPÚA NUEVA GUINEA", precio: 3900 },
];

//CLASE PARA CONSTRUIR NUEVOS OBJETOS
class cafe {
  constructor(nombre, precio) {
      this.nombre = nombre
      this.precio = precio
  }
}

// FUNCTION PARA AGG NUEVAS VARIEDADES DE CAFE
function agregarcafe() {
  let nombreCafe = prompt("ingrese el nombre del cafe")
  let nuevoPrecio = prompt("ingrese el precio")


  let cafenuevo = new cafe(nombreCafe, nuevoPrecio,)

  Producto.push(cafenuevo)
  console.log(Producto)
  return null;

}

//CARRITO
let carrito = [];

//FUNCTION PARA AGG AL CARRO
const addCarrito = () => {
  let nombre = prompt("Ingrese una variedad")
  let resultado = Producto.find((n) => n.nombre.toLowerCase() === nombre.toLowerCase());


  if (resultado) {
      carrito.push(resultado);
      console.log(carrito);
  } else {
      alert("Esta variedad no esta disponible");
  }
};

//PRECIO FINAL FUNCTION
function precioFinal() {
  let totalPrecios = carrito.reduce(((acumulador, carrito) => acumulador + carrito.precio), 0);
  return totalPrecios;
}

// interaccion con el usuarioo 
let proceso = true;
do {
  let intUsuario = prompt("Desea comprar(Si/No) o Agregar un producto a stock").toLowerCase()

  while (intUsuario != "si" && intUsuario != "no" && intUsuario != "add") {
      alert("Por favor ingrese una opcion")
      intUsuario = prompt("Desea comprar(Si/No) o Agregar un producto(ADD)")
  }
  //Si el usuario quiere comprar, agrega al carrito y devuelve precio final
  if (intUsuario == "si") {
      let continuar = true;
      do {
          alert("Nuestra lista de productos")
          let todosLosProductos = Producto.map((Producto) => Producto.nombre + " $" + Producto.precio);
          alert(todosLosProductos.join(" - "));
          addCarrito()
          let afirmativo = prompt("Desea continuar?(Si/No)").toUpperCase()
          if (afirmativo == "NO") {
              continuar = false;

          }
      } while (continuar == true)
      alert("Precio final es: " + precioFinal())
  }

  else if (intUsuario == "add") {
      let continuar = true;

      //agregar variedad de cafe a productos
      do {
          agregarcafe();
          alert("Cafe agregados")
          let afirmativo = prompt("Desea agregar otro Cafe?(Si/No)").toUpperCase();
          if (afirmativo == "NO") {
              continuar = false;

          }
      } while (continuar == true)
      alert("Cafe/s agregados");
      let seguir = prompt("Desea continuar en la pagina?(Si/No)").toUpperCase
      if (seguir == "NO") {
          proceso = false;
      }
  }
  else if (intUsuario == "no") {
      proceso = false;
  }

} while (proceso == true);

alert("¡Hasta luego!")