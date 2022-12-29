//pedir nombre 
// pedir edad - condicional para el catalogo
//saludo de bienvenida
//mostrar el catalogo correspondiente acorde a la edad
//seleccion del juego para comprar

// calcular valor final de un producto seleccionado en funcion de impuestos y descuentos.
// quiero calcularle el iva a un producto final, mostrarle al usuario cuanto es solo el iva.
//luego quiero sumar el producto mas su iva y mostrarle al usuario
// luego restarle el descuento si pago en efectivo //o sumarle el interes si paga con tarjeta


// VARIABLES //

let godOfWard = 2500;
let callOfDuty = 3000;
let fifa2022 = 2000;

let minecraft = 3000;
let fallGuys = 1000;
let pokemon = 4000;

let intentos = 3;



// PROCESO //

let nombre = (prompt("ingrese su Nombre"))

let apellido = (prompt("ingrese su Apellido"))

alert("Bienvenido a TodosTusJuegos.com" + " " + nombre + " " + apellido)

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
