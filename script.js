const usuario = {

    nombre: "DENIZE",
    email: "admin@test.com",
    password: "1234"
};

function login(){

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(

        nombre.toUpperCase() === usuario.nombre &&
        email === usuario.email &&
        password === usuario.password

    ){

        // GUARDAR NOMBRE
        localStorage.setItem(
            "nombreUsuario",
            nombre
        );

        document.getElementById("mensaje").innerHTML =
        "LOGIN CORRECTO";

        // SI QUIERES CAMBIAR DE PÁGINA
        // window.location.href="home.html";

    }else{

        document.getElementById("mensaje").innerHTML =
        "DATOS INCORRECTOS";
    }
/* =====================
PLACEHOLDER GRIS
===================== */

.nombre::placeholder,
.email::placeholder,
.password::placeholder{

color:rgba(120,120,120,.8);

font-weight:700;

}


/* =====================
GUIAS TEMPORALES
===================== */

.guia{

position:absolute;

background:red;

color:white;

padding:6px 10px;

font-size:16px;

font-weight:bold;

border-radius:10px;

z-index:9999;

box-shadow:0 0 12px red;

}


/* NOMBRE */

.guiaNombre{

top:18%;
left:50%;

transform:translateX(-50%);

}


/* EMAIL */

.guiaEmail{

top:40%;
left:58%;

}


/* PASSWORD */

.guiaPassword{

top:49%;
left:58%;

}


/* BORDES TEMPORALES */

.nombre{

border:2px dashed red!important;

}

.email{

border:2px dashed blue!important;

}

.password{

border:2px dashed lime!important;

}

.btn-login{

border:3px solid magenta!important;

}
}
