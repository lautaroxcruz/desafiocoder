//ENTREGA 2




//cantidad de productos
let numAdd = parseInt(prompt("Ingrese la cantidad de productos que desee comprar:(ingrese solo numeros)"));

//precios
let precioProductos = 0;
let preciofinal = 0;

//precio de productos
for (let i = 0; i < numAdd; i++) {
    let precioSinIva = parseFloat(prompt("Ingrese precio de producto:(Solo numeros)"));
    let precioConIva = calcularIva(precioSinIva);
    precioProductos += precioConIva;
}

//calculando descuento en productos
if (numAdd < 2) {
    preciofinal = precioProductos;
} else if (numAdd >= 2 && numAdd <= 5) {
    let descuento = (precioProductos * 10) / 100;
    preciofinal = precioProductos - descuento;
} else if (numAdd >= 6) {
    let descuento = (precioProductos * 20) / 100;
    preciofinal = precioProductos - descuento;
} else {
    alert("Error: ingrese un numero");
}

//funcion de iva
function calcularIva(precio) {
    let precioConIva = precio * 1.21;
    return precioConIva;
}


console.log("Total: " + precioProductos);
console.log("Total con descuento: " + preciofinal);