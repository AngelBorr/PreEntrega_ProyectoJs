/* LOGIN */

class Usuario{
    constructor(nombre, apellido, email, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;

    }


}


function almacenarEnStorage() {
    localStorage.setItem('listaDeUsuarios', JSON.stringify(usuarios))
}

let listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'))


const usuarios = []

usuarios.push(new Usuario("Juan","Perez", "juan.Perez@gmail.com.ar", "1234"))
usuarios.push(new Usuario("Gabriel","Garcia", "gabriel.garcia@gmail.com.ar", "12345"))
usuarios.push(new Usuario("Miguel","Coto", "miguel.coto@gmail.com.ar", "123456"))
usuarios.push(new Usuario("Angel","administrador", "administrador@gmail.com.ar", "1234567"))

almacenarEnStorage(('listaDeUsuarios', JSON.stringify(usuarios)))

alert("Bienvenido a TodosTusJuegos.com \n (Antes de comenzar debemos abrir la consola)")

console.log("Bienvenidos A TodosTusJuegos.com")

let inicioSecion = prompt("Ya tienes una cuenta? \n SI - Para ingresar con Usuario \n NO - Para registrarte \n (El ingreso es en minuscula)")

switch (inicioSecion) {

            
    
    case "no":

        let pregunta = new Usuario((prompt("Ingrese su Nombre")), (prompt("Ingrese su Apellido")), (prompt("Ingrese su e-mail")), (Number(prompt("Ingrese su password"))))
        
        
        usuarios.push(pregunta)

        console.log(pregunta)

        localStorage.setItem('listaDeUsuarios', JSON.stringify(usuarios))

        console.log(listaDeUsuarios)

        alert("gracias por ser parte de la Familia")

        let usuarioActivo = (prompt("ingrese su Usuario"))

        let passwordActivo = (prompt("ingrese su Contraseña"))

        alert("Bienvenido a TodosTusJuegos.com" + " " + usuarioActivo)

        console.log("Usuario:" + usuarioActivo, "\n Password: " + passwordActivo)

        break;


    case "si":

        let usuarioEnLista = (prompt("ingrese su Usuario"))

        let passwordEnLista = (prompt("ingrese su Contraseña"))

        alert("Bienvenido a TodosTusJuegos.com" + " " + usuarioEnLista)

        console.log("Usuario:" + usuarioEnLista, "\n Password: " + passwordEnLista)

        break;

}

class CatalogoGamer{
    constructor(nombreJuego, categoria, clasificacion,precio){
        this.nombreJuego = nombreJuego;
        this.categoria = categoria;
        this.clasificacion = clasificacion;
        this.precio = precio;
    }
}

const gamer = []

gamer.push(new CatalogoGamer("God Of War", "accion", "+18", "6000"))
gamer.push(new CatalogoGamer("Call Of Duty", "accion", "+18", "8000"))
gamer.push(new CatalogoGamer("Fifa 2023", "deporte", "-18", "8000"))
gamer.push(new CatalogoGamer("Fall Guys", "simulacion", "-18", "4000"))
gamer.push(new CatalogoGamer("Pokemon", "aventura", "-18", "7000"))
gamer.push(new CatalogoGamer("Box King Las Vegas", "deporte", "+18", "8000"))
gamer.push(new CatalogoGamer("Survival Humans", "simulacion", "+18", "9000"))
gamer.push(new CatalogoGamer("Minecraf", "aventura", "-18", "5000"))

almacenarEnStorage(('CatalogosDeJuegos', JSON.stringify(gamer)))

let operacion = prompt("¿Que te deseas hacer? \n - COMPRAR \n - ADMINISTRAR \n (El ingreso es en minuscula)")

console.log(operacion)

switch (operacion) {    

    case "administrar":    

        alert("La funcion del Adnimistrador es la incorporacion de juegos al catalogo, en esta ocasion debemos sumar 3 (tres) titulos nuevos. Empecemos")
        
        let ingresoGamer = 0

        while(ingresoGamer < 3){
            
            
            let catalogo = new CatalogoGamer((prompt("Ingrese el Nombre del Juego")), (prompt("Ingrese la categoria del Juego \n - Accion \n - Aventura \n - Simulacion \n - Deporte")), (prompt("Ingrese la clasificacion: \n * +18 \n * -18")), (Number(prompt("Ingrese el Precio \n - Solamente numeros"))))

            gamer.push(catalogo)
            ingresoGamer++
            alert("En la consola se mostrara el catalogo de juegos")
            console.log(gamer)
            

        }

    alert("Muchas gracias Administrador")
    
    break;

    case "comprar":

    let catalogoSiNo = (prompt("¿Como deseas ver el catalogolo de Juegos? \n Indique la opcion correcta: \n - 1: Catalogo Completo \n - 2: Filtrar los juegos por alguna categoria"))

        switch (catalogoSiNo) {
            case "1":
                console.log((JSON.stringify(gamer)))

                alert("Visualiza el Catalogo completo en la Consola")

                break;

            case "2":

                let eleccionDeCategoria = prompt("Elegi la Categoria por la cual deseas filtrar el catalogo: \n - Accion \n - Aventura \n - Simulacion \n - Deporte")

                switch (eleccionDeCategoria) {

                    case "accion":
                        const filtrarPorCategoriaAccion = gamer.filter(juego => juego.categoria == "accion");

                        console.log(JSON.stringify(filtrarPorCategoriaAccion));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaAccion))

                        break;

                    case "aventura":
                        const filtrarPorCategoriaAventura = gamer.filter(juego => juego.categoria == "aventura");

                        console.log(JSON.stringify(filtrarPorCategoriaAventura));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaAventura))

                        break;

                    case "simulacion":
                        const filtrarPorCategoriaSimulacion = gamer.filter(juego => juego.categoria == "simulacion");

                        console.log(JSON.stringify(filtrarPorCategoriaSimulacion));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaSimulacion))

                        break;

                    case "deporte":
                        const filtrarPorCategoriaDeporte = gamer.filter(juego => juego.categoria == "deporte");

                        console.log(JSON.stringify(filtrarPorCategoriaDeporte));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaDeporte))

                        break;

                    default:
                        alert("No has ingresado una opcion valida")

                }

            break;


            default:

        }
}

let eleccionDeJuegoCompra = (prompt("Elegi el juego que deseas comprar (sin puntos,comas y espacios). Ejemplos: \n * minecraft \n * fallguys \n * pokemon"))

let godOfWar = 6000
let callOfDuty = 8000
let fifa2023 = 8000
let fallGuys = 4000
let pokemon = 7000
let boxKingLasVegas = 8000
let survivalHumans = 9000
let minecraft = 5000

switch (eleccionDeJuegoCompra){
    case "minecraft":
        productosFinales = minecraft;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Minecraft")
        console.log("El valor es de $ " + productosFinales)                  
    break;

    case "fallguys":
        productosFinales = fallGuys;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Fall Guys")
        console.log("El valor es de $ " + productosFinales)                     
    break;

    case "pokemon":
        productosFinales = pokemon;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Pokemon")
        console.log("El valor es de $ " + productosFinales) 
    break;
                    
    case "godofwar":
        productosFinales = godOfWar;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Gog Of War")
        console.log("El valor es de $ " + productosFinales)                  
    break;

    case "callofduty":
        productosFinales = callOfDuty;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Call Of Duty")
        console.log("El valor es de $ " + productosFinales) 
    break;

    case "fifa2023":
        productosFinales = fifa2023;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Fifa 2023")
        console.log("El valor es de $ " + productosFinales) 
    break;

    case "boxkinglasvegas":
        productosFinales = boxKingLasVegas;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Box King Las Vegas")
        console.log("El valor es de $ " + productosFinales) 
    break;

    case "survivalhumans":
        productosFinales = survivalHumans;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Survival Humans")
        console.log("El valor es de $ " + productosFinales) 
    break;

    default:
    
}

let iva = productosFinales*0.21

console.log("Iva = $ " + iva)
            
let productoFinalConIva = (productosFinales + iva)

console.log("Sub Total = $ " + productoFinalConIva)

alert ("El valor final es de $" + productoFinalConIva + ", aceptar para continuar y pasar a medios de pago")



do {

    let calcularDescuentoOInt = prompt ("Ingresa el tipo de pago, si paga en efectivo tiene un descuento de $500 y si lo hace con tarjeta de credito va a tener un recargo de $800 \n 1 para pagar en efectivo \n 2 para pagar con tarjeta")

    switch (calcularDescuentoOInt) {
        case "1":
            pagoEnfectivo = Number(500);
            alert("Recibistes un descuento de $" + pagoEnfectivo + " por pago en efectivo")
            console.log("Medio de pago = Efectivo")
            console.log("Descuento = $ " + pagoEnfectivo)
        break;

        case "2":
            pagoEnTarjeta = Number(800);
            alert("Recibistes un interes de $" + pagoEnTarjeta + " por pago con Tarjeta de Credito")
            console.log("Medio de pago = Tarjeta de Credito")
            console.log("Interes = $ " + pagoEnTarjeta)                
        break;

        default:
            alert("no has ingresado la opcion correcta, vuelve a intentarlo")
                        
                        
    }

    switch (calcularDescuentoOInt) {
        case "1":
            precioFinalMasDesc = (productoFinalConIva - pagoEnfectivo)
            alert("el valor final es del juego es de $" + precioFinalMasDesc)
            console.log("Precio Total = $ " + precioFinalMasDesc)
            alert("gracias por su compra")
        break;

        case "2":
            precioFinalMasInt = (productoFinalConIva + pagoEnTarjeta)
            alert("el valor final es del juego es de $" + precioFinalMasInt)
            console.log("Precio Total = $ " + precioFinalMasInt)
            alert("gracias por su compra")
        break;

        default:
                        
    }

    console.log("gracias por su compra")

}while(confirm = !true){





            
}


