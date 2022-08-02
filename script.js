//ENTREGA 1 
//bucles for

let numeroIngresado = parseInt (prompt("Ingrese numero a multiplicar por dos hasta llegar a diez")) ; 
for (let i=2; i <= 10 ; i++) {
    let resultado = numeroIngresado * i;
    console.log(numeroIngresado + " * " + i + "=" + resultado) ;
}

// condicionales 
// numero

var culpable = window.prompt("¿eres culpable?"); // si, no

	if(culpable=="si"){
		document.write("vas a la cárcel");
	}else if(culpable=="no"){
		document.write("vas a casa");
	}else{
		document.write("la documentación por favor");
	}


// ENTREGA 2

let nota1, nota2, nota3;
nota1 = prompt('Ingrese 1ra. nota:');
nota2 = prompt('Ingrese 2da. nota:');
nota3 = prompt('Ingrese 3ra. nota:');

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