const BLANCO = " "
let entrada = prompt("ingresar nombre") + BLANCO + prompt("ingresar apellido") + BLANCO + prompt("ingresar edad") + BLANCO + prompt("ingresar fecha de nacimiento");
let salida = (entrada);
alert (salida + BLANCO + "ingresado");
if (nombreIngresado == BLANCO) {
    alert("Error datos mal ingresados");
} else {
    alert("Accediendo al sistema");
}

let entradas = prompt("Nombre")+prompt("Apellido")+prompt("Edad");
const ESPACIO = ""
if (entrada == "") {
    alert("ERROR AL INGRESAR")
}else{
    alert("DATOS INGRESADOS:"+" "+entradas)
} 


console.log("Hola, bienvenido a mi JavaScript");let nombre = "";let edad;nombre = prompt("Ingrese el nombre")// console.log("NOMBRE INGRESADO:"+" "+nombre)if(nombre == ""){alert("INGRESE UN VALOR")}else{alert("NOMBRE INGRESADO:"+" "+nombre)}let monto = Number(prompt("Ingrese el valor"))let monto2 = Number(prompt("ingrese valor 2"))let total = monto+monto2// console.log(total)if(total < 500){alert("Aun no superas los 500")}else if(total < 1000){alert("Bien! ya superaste los 500")}else{alert("VALOR INGRESADO:"+" "+total+ " Bien! superaste los 1000!")}
