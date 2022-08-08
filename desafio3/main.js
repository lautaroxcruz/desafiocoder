//>> Consigna: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
//Utilizar algunos de los métodos o propiedades vistos en la clase.
//>>Aspectos a incluir en el entregable:
//Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee array para agrupar elementos similares.
//>>Ejemplo:
//Podemos crear arrays para los objetos identificados en el simulador de la clase anterior, Ejemplo: Array de Productos, Array de Personas,Array de Libros, Array de Autos,  Array de Comidas,  Array de Bebidas, Array de Tareas, etc.

let Cafe = [
  {
      nombre:"PERÚ ",
      peso:"250G",
      precio: 3200
  },
  {
      nombre:"COLOMBIA",
      peso:"250G",
      precio:2700
  },
  {
      nombre:"GUATEMALA",
      cantidad:"250G",
      precio:3200
  }
]
let compra=parseInt(prompt("Hola, bienvenido a Coffeeshop! le gustaría adquirir alguna variedad? \ningrese el numero del producto que desee \n1-Peru\n2-Colombia\n3-Guatemala\n4-solo estoy viendo :)"));
if(compra<4){
  alert("el valor a pagar es de $"+Cafe[compra-1].precio)
}