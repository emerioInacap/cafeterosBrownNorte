//Variables para carrito

const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];



eventListeners()
function eventListeners(){

    //carrito

    //Cuando se presiona para agregar carrito
    listaProductos.addEventListener('click', agregarProducto);
}


// ------- Funciones carrito----------

//Funcion que añade producto al carrito
function agregarProducto(e){
    e.preventDefault();

    //Delegation para agregar producto navegando ( Traversing the DOM)
    if(e.target.classList.contains('enlace_producto')){
        const producto = e.target.parentElement.parentElement;

        //enviamos el producto seleccionado para tomar sus datos
        leerDatosProducto(producto)
       
        
    }
    
}



// Lee datos del producto

function leerDatosProducto(producto){
    const infoProducto = {
        imagen : producto.querySelector('img').src,
        nombre: producto.querySelector('.info_producto .nombre_producto').textContent,
        precio: producto.querySelector('.info_producto .precio_producto').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }

    if(articulosCarrito.some( producto => producto.id === infoProducto.id )){
        const productos = articulosCarrito.map( producto => {
            if( producto.id === infoProducto.id ){
                producto.cantidad ++;
                return producto
            }else{
                return producto
            }
        })
        articulosCarrito = [...productos]
    }else{
        articulosCarrito = [ ...articulosCarrito, infoProducto ]
    }

    carritoHTML();

}



//Muestra los productos seleccionados en el carrito
function carritoHTML(){

   // vaciarCarrito(); // Limpia productos duplicados
    
    articulosCarrito.forEach( producto => {
        
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            
        `;
        
        contenedorCarrito.appendChild(row);
        console.log(contenedorCarrito)
    } )

}

// Elimina los cursos del carrito en el DOM
/*function vaciarCarrito() {

    console.log('limpiando')
}

*/