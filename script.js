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

//aplicar arrays en objetos como por ejemplo en bebidas 
$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").addClass("active");
    });
  
    $("#sidebarCollapseX").on("click", function() {
      $("#sidebar").removeClass("active");
    });
  
    $("#sidebarCollapse").on("click", function() {
      if ($("#sidebar").hasClass("active")) {
        $(".overlay").addClass("visible");
        console.log("it's working!");
      }
    });
  
    $("#sidebarCollapseX").on("click", function() {
      $(".overlay").removeClass("visible");
    });
  });
  