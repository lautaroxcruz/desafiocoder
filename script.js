//bucles for

let numeroIngresado = parseInt (prompt("Ingrese numero a multiplicar por dos hasta llegar a diez")) ; 
for (let i=2; i <= 10 ; i++) {
    let resultado = numeroIngresado * i;
    console.log(numeroIngresado + " * " + i + "=" + resultado) ;
}

// condicionales 
// Numero

var culpable = window.prompt("¿eres culpable?"); // si, no

	if(culpable=="si"){
		document.write("vas a la cárcel");
	}else if(culpable=="no"){
		document.write("vas a casa");
	}else{
		document.write("la documentación por favor");
	}

	