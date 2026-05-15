function login(){

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(nombre !== "" && email !== "" && password !== ""){

        localStorage.setItem("nombreUsuario", nombre);

        document.getElementById("mensaje").innerHTML = "LOGIN CORRECTO";

    }else{

        document.getElementById("mensaje").innerHTML = "COMPLETE LOS CAMPOS";

    }
}
