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

localStorage.setItem(
"nombreUsuario",
nombre
);

document.getElementById(
"mensaje"
).innerHTML=
"LOGIN CORRECTO";


setTimeout(()=>{

window.location.href="nombre.html";

},500);

}

else{

document.getElementById(
"mensaje"
).innerHTML=
"COMPLETE LOS CAMPOS";

}

}
