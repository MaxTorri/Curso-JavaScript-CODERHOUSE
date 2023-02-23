// const BLANCO = " "
// // let entrada = prompt("ingresar nombre") + BLANCO + prompt("ingresar apellido") + BLANCO + prompt("ingresar edad") + BLANCO + prompt("ingresar fecha de nacimiento");
// // let salida = (entrada);
// // alert (salida + BLANCO + "ingresado");

// let nombreIngresado = prompt("Maximiliano");
// let apellidoIngresado = prompt('Maximiliano');
// let edadIngresado = prompt('Maximiliano');
// let NacimientoIngresado = prompt('Maximiliano');

// if (nombreIngresado == BLANCO) {
//     alert("Error datos mal ingresados");
// } else {
//     alert("Accediendo al sistema");
// }

// let entrada = prompt("Nombre")+prompt("Apellido")+prompt("Edad");
// const ESPACIO = ""
// if (entrada == "") {
//     alert("ERROR AL INGRESAR")
// }else{
//     alert("DATOS INGRESADOS:"+" "+entrada)
// } 


// // console.log("Hola, bienvenido a mi JavaScript");let nombre = "";let edad;nombre = prompt("Ingrese el nombre")// console.log("NOMBRE INGRESADO:"+" "+nombre)if(nombre == ""){alert("INGRESE UN VALOR")}else{alert("NOMBRE INGRESADO:"+" "+nombre)}let monto = Number(prompt("Ingrese el valor"))let monto2 = Number(prompt("ingrese valor 2"))let total = monto+monto2// console.log(total)if(total < 500){alert("Aun no superas los 500")}else if(total < 1000){alert("Bien! ya superaste los 500")}else{alert("VALOR INGRESADO:"+" "+total+ " Bien! superaste los 1000!")}



// // console.log("Hola, bienvenido a mi JavaScript");let nombre = "";nombre = prompt("Ingrese el nombre")// console.log("NOMBRE INGRESADO:"+" "+nombre)if(nombre == ""){alert("INGRESE UN VALOR")}else{alert("NOMBRE INGRESADO:"+" "+nombre)}let monto = Number(prompt("Ingrese el valor"))let monto2 = Number(prompt("ingrese valor 2"))let total = monto+monto2console.log(total)if(total < 500){alert("Aun no superas los 500")}else if(total < 1000){alert("Bien! ya superaste los 500")}else{alert("VALOR INGRESADO:"+" "+total+ " Bien! superaste los 1000!")}let edad = Number(prompt("ingrese edad"))if(edad > 16 && edad < 65){console.log("esta entre 10 y 50")} else {console.log("NO esta entre 10 y 50")}

// // https://www.w3schools.com/js/js_typeof.asp

const PRODUCTOS = [
    { nombre: "EDGE", precio: 310},
    { nombre: "SU57", precio: 370},
    { nombre: "SU75", precio: 390},
    { nombre: "SU47", precio: 290},
    { nombre: "SU35", precio: 250},
    { nombre: "F22", precio: 350},
    { nombre: "A4", precio: 110},
];

/* Como hacer un JSON legible para usuario (stringify) o para trabajar con codigo (parse) */
/* const productosJsonLegible = JSON.stringify(PRODUCTOS);

const productosJsonArray = JSON.parse(productosJsonLegible);

console.log(productosJsonLegible); */

let carrito = []

let seleccion = prompt ("Hola, desea comprar algun producto. SI O NO")

while (seleccion != "SI" && seleccion != "NO"){
    alert("Porfavor ingresa SI O NO")
    seleccion = prompt ("Hola desea comprar algo? SI O NO")
}

if (seleccion == "SI") {
    alert("A continuacion nuestra lista de productos")
    let todosLosProductos = PRODUCTOS.map ((PRODUCTOS) => PRODUCTOS.nombre + " " + PRODUCTOS.precio + "$");
    alert (todosLosProductos.join(" - "));
} else if (seleccion == "NO"){
    alert ("Gracias por venir. Hasta pronto!")
}

while (seleccion != "NO") {
    let producto = prompt ("Agrega un producto a tu carrito de compras")
    let precio = 0

    if (producto == "EDGE" || producto == "SU57" || producto == "SU75" || producto == "SU47" || producto == "SU35" || producto ==  "F22" || producto == "A4") {
        switch (producto) {
            case "EDGE":
                precio = 310
                break;
            case "SU57":
                precio = 370
                break;
            case "SU75":
                precio = 390
                break;
            case "SU47":
                precio = 290
                break;
            case "SU35":
                precio = 250
                break;
            case "F22":
                precio = 350
                break;
            case "A4":
                precio = 110
                break;
            default:
                break;
        }
    let unidades = parseInt (prompt ("Cuantas unidades desea llevar?"))

    carrito.push ({producto, unidades, precio})
    console.log (carrito)
    } else {
        alert ("No tenemos ese producto disponible")
    }
    seleccion = prompt ("Desea seguir comprando?")
    
    while (seleccion === "NO"){
        alert ("Gracias por su compra! Hasta pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`Total a pagar es: ${total}`);

console.log ("Hola");




function saludar(){
    alert("hola");
    return 3:
}

document.write(saludar)