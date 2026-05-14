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
}
