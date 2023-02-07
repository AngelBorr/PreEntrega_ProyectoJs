let listadoDeUsuarios = [];

const listaDeUsuariosLS = JSON.parse(localStorage.getItem("ListaUsuario"));

if (listaDeUsuariosLS) {
    listadoDeUsuarios = listaDeUsuariosLS;
}

class Usuario {
    constructor(posicion, nombreCompleto, nombreUsuario, email, contrasena) {
        (this.posicion = posicion),
        (this.nombreCompleto = nombreCompleto),
        (this.nombreUsuario = nombreUsuario),
        (this.email = email),
        (this.contrasena = contrasena);
    }
}

/*function camposVaciosFormularioReturn(){
    if(pNombreCompleto === ""){
        Toastify({
            text: "No has ingresado tu Nombre Completo en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {            
                background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
            
        }).showToast();
        return
    }if(pNombreUsuario === ""){Toastify({
            text: "No has ingresado tu Nombre de Usuario en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {            
                background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
            
        }).showToast();
        return
    }if(pEmail === ""){Toastify({
        text: "No has ingresado tu E-mail en el campo indicado ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {            
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
        
    }).showToast();
    return
    }if(PContrasena === ""){Toastify({
        text: "No has ingresado una contraseña en el campo indicado ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {            
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
        
    }).showToast();
    return
    }

    // FALTA AGREGAR CONTRASEÑA CON CONTRASEÑA
}*/

function limpiarCamposFormulario() {
    const inputNombreCompleto = document.getElementById("nombreCompletoUsuario");
    const inputNombreUsuario = document.getElementById("nombreUsuario");
    const inputCorreoEmail = document.getElementById("correoEmail");
    const inputContrasena = document.getElementById("contrasena");

    inputNombreCompleto.value = "";
    inputNombreUsuario.value = "";
    inputCorreoEmail.value = "";
    inputContrasena.value = "";
}

/*function alerta() {
    Toastify({
        text: "Se ha creado exitosamente el registro!! \n Has Click para redireccionarte a la Pagina Principal",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        destination: "index.html",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {            
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        }
        
    }).showToast();
}*/

function guardarUsuario() {
    let pPosicion = listadoDeUsuarios.length + 1;
    let pNombreCompleto = document.getElementById("nombreCompletoUsuario").value;

    if (pNombreCompleto === "") {
        Toastify({
        text: "No has ingresado tu Nombre Completo en el campo indicado ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {
            background:
            "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
        }).showToast();
        return;
    }

    let pNombreUsuario = document.getElementById("nombreUsuario").value;

    if (pNombreUsuario === "") {
        Toastify({
        text: "No has ingresado tu Nombre de Usuario en el campo indicado ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {
            background:
            "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
        }).showToast();
        return;
    }

    let pEmail = document.getElementById("correoEmail").value;

    if (pEmail === "") {
        Toastify({
        text: "No has ingresado tu E-mail en el campo indicado ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {
            background:
            "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
        }).showToast();
        return;
    }

    let PContrasena = document.getElementById("contrasena").value;

    if (PContrasena === "") {
        Toastify({
        text: "No has ingresado una contraseña en el campo indicado ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {
            background:
            "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
        }).showToast();
        return;
    }

    const nuevoUsuario = new Usuario( pPosicion, pNombreCompleto, pNombreUsuario, pEmail, PContrasena);

    listadoDeUsuarios.push(nuevoUsuario);

    localStorage.setItem("ListaUsuario", JSON.stringify(listadoDeUsuarios));

    limpiarCamposFormulario();

    Toastify({
        text: "Se ha creado exitosamente el registro!! \n Has Click para redireccionarte a la Pagina Principal",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        destination: (window.Location= "index.html"),
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {
        background:
            "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
    }).showToast();


}

const registrarUsuario = document.getElementById("registroUsuario");

registrarUsuario.addEventListener("submit", function (event) {
    event.preventDefault();
});

const btnCrearUsuario = document.getElementById("btnCrearUsuario");

btnCrearUsuario.addEventListener("click", function () {
    guardarUsuario();

    /**/
});

