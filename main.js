
let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");

if (nombre != "" && apellido != "") {
    alert(`su nombre es: ${nombre} ${apellido}`);
} else {
    alert(`Se requiere nombre y apellido para continuar.`);
    nombre = prompt("ingrese su nombre");
    apellido = prompt("ingrese su apellido")
}
let edad = parseInt(prompt("Ingrese su edad"));
if (edad < 18) {
    alert("Debes ser mayor de edad para continuar");
} else {
    alert("Eres mayor de edad. Puedes continuar");
}
let usuario = prompt("ingrese su nombre de usuario");
while (usuario !="pepito"){
    alert ("nombre de usuario incorrecto, por favor, ingrese uno válido");
    usuario = prompt("ingrese su nombre de usuario=pepito")
}

let email = prompt("ingrese su email");
while (email !="none@example.com"){
    alert("email incorrecto");
    email = prompt("Ingrese su email=none@example.com");
}
function saludar(){
    alert(`Hola, ¿es usted ${nombre} ${apellido}, cuenta con una edad de ${edad} años, su usuario es ${usuario} y su email de ingreso es ${email}?`)
}
saludar();

let confirmacion = prompt("¿Esta información es correcta? En caso de que sus datos sean correctos, escriba 'sí' y en caso de que sus datos no sean correctos, escriba 'no'");
while(confirmacion === "no"){
    alert("por favor, ingrese sus datos nuevamente")
    let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");

if (nombre != "" && apellido != "") {
    alert(`su nombre es: ${nombre} ${apellido}`);
} else {
    alert(`Se requiere nombre y apellido para continuar.`);
}
let edad = parseInt(prompt("Ingrese su edad"));
if (edad < 18) {
    alert("Debes ser mayor de edad para continuar");
} else {
    alert("Eres mayor de edad. Puedes continuar");
}
let usuario = prompt("ingrese su nombre de usuario");
while (usuario !="pepito"){
    alert ("nombre de usuario incorrecto, por favor, ingrese uno válido");
    usuario = prompt("ingrese su nombre de usuario=pepito")
}
let email = prompt("ingrese su email");
while (email !="none@example.com"){
    alert("email incorrecto");
    email = prompt("Ingrese su email=none@example.com");
}
}
function saludarUsuario(){
    alert(`Gracias por confirmar. Usted ha ingresado sus datos correctamente. Te damos la bienvenida.`)
}
saludarUsuario();
