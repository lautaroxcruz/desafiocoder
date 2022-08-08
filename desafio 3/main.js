//>> Consigna: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
//Utilizar algunos de los métodos o propiedades vistos en la clase.
//>>Aspectos a incluir en el entregable:
//Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee array para agrupar elementos similares.
//>>Ejemplo:
//Podemos crear arrays para los objetos identificados en el simulador de la clase anterior, Ejemplo: Array de Productos, Array de Personas,Array de Libros, Array de Autos,  Array de Comidas,  Array de Bebidas, Array de Tareas, etc.

let granosCafe = [
    {
      nombre: Perú,
      ubicacion: "Villa Rica",
      cantidad: "250G",
      tipoDeTostado: "Tueste claro",
      puntuacion: 86,
      precioFinal: "$3.200",
   
    },
   
    {
      nombre: Colombia,
      ubicacion: "Tolima",
      cantidad: "250G",
      tipoDeTostado: "Tueste medio",
      puntuacion: 84,
      precioFinal: "$2.700",
    },
  {
    nombre: Guatemala,
    ubicacion: "HUEHUETENANGO",
    cantidad: "250G",
    tipoDeTostado: "Tueste claro",
    puntuacion: 86,
    precioFinal: "$3.200",
  },
   
  {
    nombre: PAPÚANUEVAGUINEA,
    ubicacion: "WAHGI VALLEY",
    cantidad: "250G",
    tipoDeTostado: "TUESTE CLARO",
    puntuacion: 86.50,
    precioFinal: "$3.900",
  }
  ]
   
  let compra=parseInt(prompt("¡Hola! ¿te gustaría adquirir alguna variedad de cafe? \ningrese el numero del producto que desee \n1-Perú\n2-Colombia\n3-Guatemala\n4-PAPÚANUEVAGUINEA\n5-Solo observo :)"));
  if(compra<4){
      alert("el valor a pagar es de $"+granosCafe[compra-1].precioFinal)
  };
  
