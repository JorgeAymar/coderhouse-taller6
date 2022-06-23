
// Taller Coderhouse 

class Product { // clase producto
    constructor(name, country, price, description){ //funcion contructora producto
        this.name = name //atributo
        this.country = country //atributos
        this.price = price //atributos en dolares
        this.description = description //atributos
    }
    calculatePriceIVA(){ //funciones o metodos
        let IVA = 19
        return (this.price) + ((this.price * IVA) / 100)
    }
    getName(){ //funciones o metodos
        return this.name
    }

    getCountry(){ //funciones o metodos
        return this.country
    }

    getPrice(){ //funciones o metodos
        return this.price
   }

   getDescription(){ //funciones o metodos
    return this.description
}
}

// Se crea la clase con detalles de Pedidos
class DetallePedido {
    constructor(product, persona){
        this.product = product
        this.persona = persona   
    }
}

// Clasde de Pedido
class Pedido{
    constructor(date, pedido){
        this.date = date
        this.pedido = pedido
    }
}


// Se crean lista de Objeto de Productos Iniciales
const listaProductos = []

function ProductosGenerar(array){
    array.push(new Product("Naara", "Portugal", 500, "Yate para vacaciones en Mediterraneo, zarpa de Isla en Portugal"))
    array.push(new Product("My Princess", "Miami", 150, "Yate para vacaciones en caribe, zarpa de Miami"))
    array.push(new Product("La Lolita", "Spain", 100, "Yate para vacaciones en caribe, zarpa de Islas Canarias"))
    array.push(new Product("Gone with the Wind", "Italy", 175, "Yate para vacaciones en caribe, zarpa de Porto Italiano"))
    array.push(new Product("Sea Wolf", "Chile", 100, "Yate para vacaciones en caribe, zarpa de Valparaisio"))
    array.push(new Product("Girl Gome", "Miami", 100, "Yate para vacaciones en caribe, zarpa de Miani"))
    array.push(new Product("Niza", "Portugal", 50, "Yate para vacaciones en Mediterraneo, zarpa de Isla en Portugal"))
    array.push(new Product("My Princess", "Miami", 75, "Yate para vacaciones en caribe, zarpa de Miami"))
}

console.log('Listado de Embarcaciones para Rentar')

// for (let i = 0; i < listaProductos.length; i++){
//     console.log(" ")
//     console.log(" Nombre Embarcación: " + listaProductos[i].getName())
//     console.log(" Pais Origen: " + listaProductos[i].getCountry())
//     console.log(" Precio Alojamiento Mes: US$ " + listaProductos[i].getPrice())
//     console.log(" Descripción: " + listaProductos[i].getDescription())
//     console.log(" Precio con IVA: US$ " + listaProductos[i].calculatePriceIVA());
// }

// for (const listaProducto of listaProductos){
//     console.log(" ")
//     console.log(" Nombre Embarcación: " + listaProducto.getName())
//     console.log(" Pais Origen: " + listaProducto.getCountry())
//     console.log(" Precio Alojamiento Mes: US$ " + listaProducto.getPrice())
//     console.log(" Descripción: " + listaProducto.getDescription())
//     console.log(" Precio con IVA: US$ " + listaProducto.calculatePriceIVA());
// }

// Lista los productos disponibles 
listaProductos.forEach((item, index, array) => {
    console.log(" ")
    console.log (item)
})

console.log(' ')
console.log('*** Fin del Proceso ***')

// Ejemplo de busqueda de item de venta
const localiza = listaProductos.find((item) => item.name === 'Naara')
console.log("Buscar Producto por Nombre")
console.log (" ")
console.log(localiza)
console.log("*** fin de listado enconrados ***")

// Ejemplo de encontrar Productos mas economicos
const economicos = listaProductos.filter((item) => item.price <= 100 )
console.log("Buscar Productos economicos")
console.log(" ")
console.log(economicos)
console.log("*** fin de listado economicos ***")


// Ejemplo lista nombres Yates
const newlist = listaProductos.map((item) => item.name)
console.log("Productos listados por nombre")
console.log(" ")
console.log(newlist)
console.log("*** fin de listado nombes de yates ***")

// Genera Nueva lista ordenada de Productos nombres ascendetes
const listOrdenada = listaProductos.sort((a,b) => {
    if (a.name > b.name){
        return 1
    }
    if (a.name < b.name){
        return -1
    }

    // a es igual a b
    return 0
})

console.log(" Nueva lista de productos ordenadas por nombre")
console.log(" ")
console.log(listOrdenada)
console.log("*** fin de la lista ordenada ***")


// Calcula total $$ de invetanrio de productos
const total = listaProductos.reduce((accum, item) => accum + item.price, 0)
console.log("Imprime total inventario del sitio")
console.log(" ")
console.log("el total del inventario es US$: " + total)
console.log("*** fin total inventario ***")


// Simula una compra
let idCompra = 5 // dato se podria pedir por pantalla
let cantPersonas = 3 // dato se puede pedir por pantalla

if ((idCompra >= 0) && (idCompra < listaProductos.length)) {
    const myDetallePedido = new DetallePedido(listaProductos[idCompra], cantPersonas)
    const myPedido = new Pedido (Date(), myDetallePedido)

    // Imprime Compra
    console.log(" ")
    console.log("Compra Simulada Impresion")

    console.log(myPedido)
    console.log(myDetallePedido)
    console.log(" Total a pagar: US$ " + cantPersonas * listaProductos[idCompra].calculatePriceIVA())
}
else {
    console.log("")
    console.log("Problemas al Imprimir la venta")
    console.log("Error esta tratando de comprar un producto que no existe")
}


// Recorre la lista de productos e imprime en cada tarjeta informacion de elementos.
function ProductosTarjetaImprimir(array){
    array.forEach((item, index) => {
        let elem = document.getElementById("card" + index);

        myHTML =  `<h4 class="card-title">Yatch: ${item.name} </h4> 
        <p class="card-text"> ${item.description} </p> 
        <p class="card-text"> <h6> Pais: ${item.country} </h6> </p>  
        <p class="card-text"> <strong> Precio US$ ${item.price} por Noche </strong> </p> 
        <a href="#" ID="boton-${index}" class="btn btn-primary">Comprar</a>`

        elem.innerHTML = myHTML
        //console.log(myHTML)
    })
}

// let elem = document.getElementById("card2")
// elem.innerHTML = 'Hola mundo'

//console.log(collection)

// for (let i = 0; i < collection.length; i++) 
//   collection[i].style.backgroundColor = "red";
// }

function BotonActivar(array){
    array.forEach((item, index) => {
        let miBoton = document.getElementById("boton-" + index)

        miBoton.addEventListener('click', function() {
            alert('Has hecho clic!! en boton: ' + item.name)
        })
    })    
}

function BotonActivarName(name, text) {
    let miBoton = document.getElementById(name)

    miBoton.addEventListener('click', function() {
        alert(text)
    })
}


ProductosGenerar(listaProductos)
ProductosTarjetaImprimir(listaProductos)
BotonActivar(listaProductos)
BotonActivarName("buscar", "Inicia busqueda de productos")
BotonActivarName("registrar", "vamos a pantalla de registro de cliente")
BotonActivarName("conocer", "presentamos pantalla de conocer mas sobre servicio")
BotonActivarName("ofertas", "mostramos listas de ofertas y mas")
