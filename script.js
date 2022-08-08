//ENTREGA 1 
//bucles for

//let numeroIngresado = parseInt (prompt("Ingrese numero a multiplicar por dos hasta llegar a diez")) ; 
//for (let i=2; i <= 10 ; i++) {
 //   let resultado = numeroIngresado * i;
  //  console.log(numeroIngresado + " * " + i + "=" + resultado) ;
//}

// condicionales 
// numero

//var culpable = window.prompt("¿eres culpable?"); // si, no

	//if(culpable=="si"){
		//document.write("vas a la cárcel");
	//}else if(culpable=="no"){
	//	document.write("vas a casa");
	//}else{
		//document.write("la documentación por favor");
//	}


// ENTREGA 2
function
let (nota1, nota2, nota3);
alert("Ingresa tus notas");
nota1 = prompt('Ingresa la 1ra. nota:');

nota2 = prompt('Ingresa la 2da. nota:');

nota3 = prompt('Ingresa la 3ra. nota:');

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
let pro;
pro = (nota1 + nota2 + nota3) / 3;
if (pro >= 7) {
   document.write('¡Promocionaste!');
} else {
    if (pro >= 4) {
       document.write('Regular');
    } else {
        document.write('Desaprobado');
    }
}

// Funcion 
function calcular3notas(num1) {
    let notas = num1 / 3;
    alert("La calificacion final de las tres notas" + notas);
}

calcular3cuotas(preciofinal);

// ENTREGA 3 

// Array en granos de cafe 

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

let compra=parseInt(prompt("¡Hola! ¿te gustaría adquirir alguna variedad de cafe? \ningrese el numero del producto que desee \n1-Perú\n2-Colombia\n3-Guatemala\n4-PAPÚANUEVAGUINEA\n5-solo estoy viendo :)"));
if(compra<4){
    alert("el valor a pagar es de $"+granosCafe[compra-1].precioFinal)
};


  