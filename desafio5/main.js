//Carrito

/* let carrito = JSON.parse(localStorage.getItem("carrito"));
if (carrito) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = [];
} */
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//clase constructora de nuevo objetos
class cafe {
    constructor(nombre, precio, foto, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.foto = foto
    }
}


//productos ya declarados
const producto = [];

function cargarProductos() {
    producto.push(new cafe("Perú", 1200, "./img/peru.png", 001));
    producto.push(new cafe("Colombia", 3200, "./img/colombia.png", 002));
    producto.push(new cafe("Guatemala", 1900, "./img/guatemala.png", 003));
    producto.push(new cafe("Papua Nueva Guinea", 1200, "./img/papua-nueva-guinea.png", 004));
}

cargarProductos();

//traigo de la api y lo pusheo a un array
const librosApi = [];

async function apiLibros() {
    const APIGET = "./js/productos.json";
    const resp = await fetch(APIGET);
    const data = await resp.json();
    data.forEach(e => producto.push(new libro(e.nombre, e.puntaje, e.precio, e.foto, e.id)))
    /* producto.push(data); */
    /* producto = productos.concat(librosApi); */
}

//funcion de dibujo de carrito
function dibujarCarrito() {
    let renglonesCarrito = '';

    carrito.forEach(
        (elemento) => {
            renglonesCarrito += `
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;
}


const contenedorCarritoCompras = document.querySelector('#items');
const contenedorDeProductos = document.getElementsByClassName("row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center");

const addProductos = contenedorDeProductos[0];

function crearCard(producto) {
    //footer card
    let footerCard = document.createElement("div");
    footerCard.className = "card-footer p-4 pt-0 border-top-0 bg-transparent"
    //boton
    let botonAgregar = document.createElement("div");
    botonAgregar.className = "text-center"
    botonAgregar.className = "btn btn-outline-dark mt-auto";
    botonAgregar.innerText = "Agregar";

    //card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body p-4";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio}</p>
    `;
    cuerpoCarta.append(footerCard);
    cuerpoCarta.append(botonAgregar);

    //imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //CARD
    let carta = document.createElement("div");
    carta.className = "card h-100 m-4";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    let colum = document.createElement('div');
    colum.className = "col mb-5";
    colum.append(carta);
    //dibujado desde el storage
    let total = precioFinal();
    let precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML = "$" + total;
    dibujarCarrito();
    //agregar algunos eventos
    botonAgregar.onclick = () => {
        //agregado el sweetalert
        cartelAdd();

        let elementoCarrito = new ElementoCarrito(producto, 1);
        carrito.push(elementoCarrito);
        let total = precioFinal();
        let precioTotal = document.getElementById("precioTotal");
        precioTotal.innerHTML = "$" + total;
        dibujarCarrito();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    return carta;

}


async function dibujarCatalogoProductos() {
    await apiLibros();
    addProductos.innerHTML = "";
    producto.forEach(
        (producto) => {
            console.log(producto);
            let contenedorCarta = crearCard(producto);
            addProductos.append(contenedorCarta);
        }
    );

};
dibujarCatalogoProductos();

//funcion preciofinal
function precioFinal() {
    let totalPrecios = carrito.reduce(((acumulador, carrito) => acumulador + carrito.producto.precio), 0);
    return totalPrecios;


}
//funcion de cartel de Sweet
function cartelAdd() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1000
    })
}
