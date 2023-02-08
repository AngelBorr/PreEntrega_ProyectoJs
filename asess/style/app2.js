class Usuario {
    constructor(posicion, nombreCompleto, nombreUsuario, email, contrasena) {
        (this.posicion = posicion),
        (this.nombreCompleto = nombreCompleto),
        (this.nombreUsuario = nombreUsuario),
        (this.email = email),
        (this.contrasena = contrasena);
    }
}

let usuariosRegistradosManual = [

    new Usuario("0", "Agustin Borrego", "Agus.borr", "agustin.g.borrego@gmail.com", 9876),
    new Usuario("1", "Tomas Borrego", "TomasGamer", "tomas.borr@gmail.com", 2501),
    new Usuario("2", "Angel Borrego", "Angelborr", "angel_borr@gmail.com", 12345),
    new Usuario("3", "Soledad Kopf", "Solekopf", "soledad.kopf@gmail.com", 201286)
    
]
    
localStorage.setItem("ListaUsuario", JSON.stringify(usuariosRegistradosManual));






/*btnIniciarSesion.addEventListener("click", function iniciarSesion(){
    
})*/


//listaDeUsuariosLS = localStorage.getItem("ListaUsuario")

/*function arrayForEach() {

    emailRegistrado = document.getElementById("emailUsuarioRegistrado").value

    contrasenaRegistrada = document.getElementById("contrasenaUsuarioRegistrado").value

    arrayListadoDeUsuarios = JSON.parse(localStorage.getItem("ListaUsuario"))

    arrayListadoDeUsuarios.forEach((user) => {
        userEmail = user.email

        if (emailRegistrado) {
        userEmail == emailRegistrado
        return true
        }

    })

    

    arrayListadoDeUsuarios.forEach((user) => {
        userContrasena = user.contrasena

        if (contrasenaRegistrada) {
        userContrasena == contrasenaRegistrada
        return true
        }
    })

    if((emailRegistrado = true) && (contrasenaRegistrada = true)){
        /* console.log(emailRegistrado)
        console.log(userEmail)
        console.log (contrasenaRegistrada)
        console.log(userContrasena)
        window.location = "http://127.0.0.1:5501/asess/pages/principal.html";
    }else{
        /* console.log(emailRegistrado)
        console.log(userEmail)
        console.log (contrasenaRegistrada)
        console.log(userContrasena) 
        alert("Los datos ingresados son incorrectos")
    }
}
    

const btnIniciarSesion = document.getElementById("btnIniciarSesion")

btnIniciarSesion.addEventListener("click", arrayForEach())



//console.log(listaDeUsuariosLS)
    
/*    arrayListadoDeUsuarios = JSON.parse(localStorage.getItem("ListaUsuario"))//listaDeUsuariosLS

    arrayListadoDeUsuarios.forEach((user) => {

        const userEmail = user.email

        const userContrasena = user.contrasena
        
        const emailRegistrado = document.getElementById("emailUsuarioRegistrado").value

        const contrasenaRegistrada = document.getElementById("contrasenaUsuarioRegistrado").value

        if((emailRegistrado == userEmail) && (contrasenaRegistrada == userContrasena)){
            /* console.log(emailRegistrado)
            console.log(userEmail)
            console.log (contrasenaRegistrada)
            console.log(userContrasena)
            window.location = "principal.html";
        }else{
            /* console.log(emailRegistrado)
            console.log(userEmail)
            console.log (contrasenaRegistrada)
            console.log(userContrasena)
            alert("Los datos ingresados son incorrectos")
        }
    })

})*/

/* function logearUsuario (){

    // generar una const donde se pida al local stoprage la lista y se busque en el array estos valores y los compare

    let nombreCompleto = document.getElementById("nombreCompletoUsuario").value;
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let email = document.getElementById("correoEmail").value;
    let contrasena = document.getElementById("contrasena").value;

    if(email == "angel_borr@hotmail.com" && contrasena == "1234"){
        window.location = "principal.html";
    }else{
        alert("Los datos ingresados son incorrectos")
    }

} */
