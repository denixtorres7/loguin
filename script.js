function login(){

const nombre=
document.getElementById("nombre").value;

const email=
document.getElementById("email").value;

const password=
document.getElementById("password").value;

if(

nombre!="" &&
email!="" &&
password!=""

){

/* guarda el nombre */

localStorage.setItem(
"nombreUsuario",
nombre
);

document.getElementById(
"mensaje"
).innerHTML=
"LOGIN CORRECTO";

}

else{

document.getElementById(
"mensaje"
).innerHTML=
"COMPLETE LOS CAMPOS";

}

}
