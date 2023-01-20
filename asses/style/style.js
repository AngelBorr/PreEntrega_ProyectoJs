//pedir nombre 
// pedir edad - condicional para el catalogo
//saludo de bienvenida
//mostrar el catalogo correspondiente acorde a la edad
//seleccion del juego para comprar

// calcular valor final de un producto seleccionado en funcion de impuestos y descuentos.
// quiero calcularle el iva a un producto final, mostrarle al usuario cuanto es solo el iva.
//luego quiero sumar el producto mas su iva y mostrarle al usuario
// luego restarle el descuento si pago en efectivo //o sumarle el interes si paga con tarjeta



// LOGIN //


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

//localStorage.setItem('listaDeUsuarios', JSON.stringify(usuarios))
alert("Bienvenido a TodosTusJuegos.com")

let inicioSecion = prompt("Ya tienes una cuenta? \n SI - Para ingresar con Usuario \n NO - Para registrarte \n (El ingreso es en minuscula)")

switch (inicioSecion) {
    case "no":
        let pregunta = new Usuario((prompt("Ingrese su Nombre")), (prompt("Ingrese su Apellido")), (prompt("Ingrese su e-mail")), (Number(prompt("Ingrese su password"))))
    

        usuarios.push(pregunta)

        localStorage.setItem('listaDeUsuarios', JSON.stringify(usuarios))
        
        console.log(listaDeUsuarios)

        alert("gracias por ser parte de la Familia")
        
        let usuarioActivo = (prompt("ingrese su Usuario"))

        let passwordActivo = (prompt("ingrese su Contraseña"))

        alert("Bienvenido a TodosTusJuegos.com" + " " + usuarioActivo )

        break;
        
    
    case "si":

    let usuarioEnLista = (prompt("ingrese su Usuario"))

    let passwordEnLista = (prompt("ingrese su Contraseña"))

    alert("Bienvenido a TodosTusJuegos.com" + " " + usuarioEnLista )

        //funcion que valide los datos ingresados

        /* function validacionDeNombre(ingresoDeNombreUsuario){
            Object.is((usuarios.values(propiedades => propiedades.nombre)), ingresoDeNombreUsuario)
        }

        function validacionDePassword(ingresoDePasswordUsuario){
            Object.is((usuarios.values(propiedades => propiedades.password)), ingresoDePasswordUsuario)
            
        }

         //crear un promp para nombre y password

        let ingresoDeNombreUsuario;

        let resultadoValidacionNombre;


        do {
            ingresoDeNombreUsuario = (prompt("Ingresa tu nombre de Usuario"))

            resultadoValidacionNombre = (validacionDeNombre)
            
        } while (resultadoValidacionNombre = true) {
            alert("Bienvenido a TodosTusJuegos.com " + ingresoDeNombreUsuario)
                
        }

        let ingresoDePasswordUsuario; 

        let resultadoValidacionPassword;
    

        do {
            ingresoDePasswordUsuario = (prompt("Ingresa tu Password"))

            resultadoValidacionPassword = (validacionDePassword)
            
        } while (resultadoValidacionPassword = true) {
            alert("Bienvenido a TodosTusJuegos.com")
                
        } */
        
        
}

class CatalogoGamer{
    constructor(nombre, categoria, clasificacion,precio){
        this.nombre = nombre;
        this.apellido = categoria;
        this.email = clasificacion;
        this.password = number(precio);
    }
}

const gamer = []

gamer.push(new CatalogoJuegos("God Of War","Accion", "+18", 6000))
gamer.push(new CatalogoJuegos("Call Of Duty","Accion", "+18", 8000))
gamer.push(new CatalogoJuegos("Fifa 2023","Deporte", "-18", 8000))
gamer.push(new CatalogoJuegos("Fall Guys","Simulacion", "-18", 4000))
gamer.push(new CatalogoJuegos("Pokemon","Aventura", "-18", 7000))
gamer.push(new CatalogoJuegos("Box King Las Vegas","Deporte", "+18", 8000))
gamer.push(new CatalogoJuegos("Survival Humans","Simulacion", "+18", 9000))
gamer.push(new CatalogoJuegos("Minecraf","Aventura", "-18", 5000))

almacenarEnStorage("CatalogosDeJuegos", JSON.stringify(gamer))

let operacion = prompt("¿Que te deseas hacer? \n - COMPRAR \n - ADMINISTRAR \n (El ingreso es en minuscula)")



switch (operacion) {

    

    case "administrar":
    

        alert("La funcion del Adnimistrador es incorporar al catalogo nuevos juevos. Empecemos")
        
        

        let ingresoGamer = 0

        while(ingresoGamer < 3){
            

            let catalogo = new CatalogoGamer((prompt("Ingrese el Nombre del Juego")), (prompt("Ingrese la categoria del Juego \n - Accion \n - Aventura \n - Simulacion \n Deporte")), (prompt("Ingrese la clasificacion: \n * +18 \n * -18")), (Number(prompt("Ingrese el Precio \n - Solamente numeros"))))

            gamer.push(catalogo)
            ingresoGamer++
            alert("Este es el catalogolo completo" + (gamer))
            
            

            
            break;
            


        }
    

    case "comprar":


    // VARIABLES //

    let godOfWard = 2500;
    let callOfDuty = 3000;
    let fifa2022 = 2000;

    let minecraft = 3000;
    let fallGuys = 1000;
    let pokemon = 4000;

    let intentos = 3;



    // PROCESO //



    let edad = Number(prompt("Ingresa tu edad para poder mostrarte el catalogo de juegos correspondiente"))

    if (edad <= 18) {
        alert("Ingresastes" + " " + edad + " " + "años de edad, para ti tenemos el siguiente catalogo:" + " " + "Minecraft," + " " + "Fall Guys" + " " + "y" + " "+ "Pokemon")

            
        }else{
            alert("Ingresastes" + " " + edad + " " + "años de edad, para ti tenemos el siguiente catalogo" + " " + "God Of Ward," + " " + "Call Of Duty" + " " + "y" + " " + "Fifa 2022")

            
    };

    if (edad <= 18){
        let juego = prompt("Ingresa el juego que deseas comprar (sin puntos,comas y espacios). Ejemplos: \n * minecraft \n * fallguys \n * pokemon")
        switch (juego){
            case "minecraft":
                productosFinales = minecraft;
                alert("el valor es de " + "$" + productosFinales + " " + "+ iva")                  
                break;

            case "fallguys":
                productosFinales = fallGuys;
                alert("el valor es de " + "$" + productosFinales + " " + "+ iva")                    
                break;

            case ("pokemon"):
                productosFinales = fallGuys;  
                alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
                break;
                
                default:
                    
                    break;
            }
    }else{
        if (edad >= 19) {
            let juego = prompt("Ingresa el juego que deseas comprar (sin puntos,comas y espacios). Ejemplos: \n * godOfWard \n * callOfDuty \n * fifa2022")
            switch (juego) {
                case "godofward":
                productosFinales = godOfWard;
                alert("el valor es de " + "$" + productosFinales + " " + "+ iva")                  
                    break;

                case "callofduty":
                productosFinales = callOfDuty;
                alert("el valor es de " + "$" + productosFinales + " " + "+ iva")                    
                    break;

                case ("fifa2022"):
                productosFinales = fifa2022;  
                alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
                    break;
                
                default:
                    break;
            }
        }
    }

    let iva = productosFinales*0.21
        
    productoFinalConIva = (productosFinales + iva)

    alert ("El valor final es de $" + productoFinalConIva + ", aceptar para continuar y pasar a medios de pago")



    do {

            let calcularDescuentoOInt = prompt ("Ingresa el tipo de pago, si paga en efectivo tiene un descuento de $500 y si lo hace con tarjeta de crecito va a tener un recargo de $500 \n 1 para pagar en efectivo \n 2 para pagar con tarjeta")

            switch (calcularDescuentoOInt) {
                case "1":
                    pagoEnfectivo = Number(500);
                    alert("Recibistes un descuento de $" + pagoEnfectivo + " por pago en efectivo")                
                    break;

                case "2":
                    pagoEnTarjeta = Number(500);
                    alert("Recibistes un interes de $" + pagoEnTarjeta + " por pago con Tarjeta de Credito")                
                    break;

                default:
                    alert("no has ingresado la opcion correcta, vuelve a intentarlo")
                    break;
                    
            }

            switch (calcularDescuentoOInt) {
                case "1":
                    precioFinalMasDesc = (productoFinalConIva - pagoEnfectivo)
                    alert("el valor final es del juego es de $" + precioFinalMasDesc)
                    alert("gracias por su compra")
                    break;

                case "2":
                    precioFinalMasInt = (productoFinalConIva + pagoEnTarjeta)
                    alert("el valor final es del juego es de $" + precioFinalMasInt)
                    alert("gracias por su compra")
                    break;

                default:
                    break;
    }

    }while(confirm = !true){
        
    }

        
    

}        


