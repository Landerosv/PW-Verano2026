
function potencia(base,exponente){
    let resultado = base;
    for(let i=1; i<exponente; i++){
        resultado = resultado * base;
    }
    console.log(resultado)
} // end inciso 1



//INCISO 2
function cajero() {
    let saldo = 5000;
    let op = 0;
    let deposito = 0;
    let retiro = 0;
    let salida = false;
do{
    console.log("--- CAJERO --- \n" +
        "1. Consultar saldo \n" +
        "2. Depositar \n" +
        "3. Retirar \n" +
        "4. Salir \n");
        op = parseInt(prompt("Ingrese una opción"));
        switch(op){
            case 1:
            console.log("Saldo actual: "+saldo);
            break;

            case 2:
            deposito = parseInt(prompt("Ingrese la cantidad a depositar"));
            if(isNaN(deposito) || deposito<=0){
                console.log("Cantidad inválida");
            } else {
                saldo = saldo + deposito;
                console.log("Depósito exitoso. Saldo actual: "+saldo);
            }
            break;

            case 3:
            retiro = parseInt(prompt("Ingrese la cantidad a retirar"));
            if(isNaN(retiro) || retiro<=0){
                console.log("Cantidad inválida");
            } else if(retiro>saldo){
                console.log("Fondos insuficientes");
            } else {
                saldo = saldo - retiro;
                console.log("Retiro exitoso. Saldo actual: "+saldo);
            }
            break;

            case 4:
            salida = true;
            break;

            default:
            console.log("Seleccione una opción valida")
            break;
        }// end switch
    }while(salida !=true)
}//end inciso 2

//inciso 3
function dados() {
    let dado1 = 0;
    let dado2 = 0;
    let intentos = 0;
    do{
        dado1 = Math.floor(Math.random()*6)+1;
        dado2 = Math.floor(Math.random()*6)+1;
        intentos++;
        console.log(dado1+" - "+dado2);
    }while(dado1 != dado2)
    console.log("Se necesitaron "+intentos+" lanzamientos.");
} //end inciso 3

// inciso 4
function adivinarNumero() {
    let numeroSecreto = Math.floor(Math.random()*100)+1;
    let intento = 0;
    let intentos = 0;
    let acertado = false;
    do{
        intento = parseInt(prompt("Adivina el número (1-100)"));
        intentos++;
        if(intento == numeroSecreto){
            console.log("Felicidades, adivinaste en "+intentos+" intentos");
            acertado = true;
        } else if(intento > numeroSecreto){
            console.log("Más pequeño");
        } else {
            console.log("Más grande");
        }
    }while(acertado == false && intentos < 7)

    if(acertado == false){
        console.log("Se acabaron los intentos. El número era "+numeroSecreto);
    }
} //end inciso 4

//inciso 5
function registroVentas() {
    let ventas = [];
    let continuar = "s";

    do {
        let vendedor = prompt("Nombre del vendedor:");
        let producto = prompt("Nombre del producto:");
        let cantidad = parseInt(prompt("Cantidad vendida:"));
        let precio = parseFloat(prompt("Precio unitario:"));

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio,
            total: cantidad * precio
        });

        continuar = prompt("¿Registrar otra venta? (s/n)");
    } while (continuar.toLowerCase() == "s");

    let totalVentas = ventas.length;

    let totalIngresos = ventas.reduce((acum, venta) => acum + venta.total, 0);

    let unidadesPorProducto = {};
    ventas.forEach(venta => {
        if (unidadesPorProducto[venta.producto]) {
            unidadesPorProducto[venta.producto] += venta.cantidad;
        } else {
            unidadesPorProducto[venta.producto] = venta.cantidad;
        }
    }); 

    let ventasPorVendedor = {};
    ventas.forEach(venta => {
        if (ventasPorVendedor[venta.vendedor]) {
            ventasPorVendedor[venta.vendedor] += venta.total;
        } else {
            ventasPorVendedor[venta.vendedor] = venta.total;
        } 
    }); 

    let mejorVendedor = "";
    let mejorMonto = 0;
    for (let vendedor in ventasPorVendedor) {
        if (ventasPorVendedor[vendedor] > mejorMonto) {
            mejorMonto = ventasPorVendedor[vendedor];
            mejorVendedor = vendedor;
        } 
    } 

    console.log("Total de ventas realizadas: " + totalVentas);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
    console.log("Unidades vendidas por producto:");
    for (let producto in unidadesPorProducto) {
        console.log("- " + producto + ": " + unidadesPorProducto[producto] + " unidades");
    }
    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + mejorMonto + ")");
} // end registroVentas

registroVentas();

potencia(5,4);
cajero();
dados();
adivinarNumero();
