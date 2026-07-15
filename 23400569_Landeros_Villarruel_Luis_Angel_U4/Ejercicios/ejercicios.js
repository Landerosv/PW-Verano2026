

function ejercicio1(){
   console.log("-- EJERCICIO 1 --") 
   let n1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    let n2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    console.log("Número 1: "+n1);
    console.log("Número 2: "+n2);
    if(n1==n2){
        console.log("Son iguales");
    } else if (n1>n2){
        console.log(n1+" es mayor que "+n2);
    }else{
        console.log(n2+" es mayor que "+n1);
    }
} // end ejercicio 1

/*
    NOTA: si ve el ejercicio 2 raro, lo es, es raro, lo que pasa es que
    yo tenia planeado que salieran los números en un intervalo de 1
    segundo, pero como se amontonaba con el ejercicio 3 y además
    me dio pereza reescribir todo con un ciclo while, simplemente
    cambié el 1000 por un 0
*/

function ejercicio2(){
    console.log("-- EJERCICIO 2 --")
    let num=0;
  let id =  setInterval(() => {
        num= Math.floor(Math.random()* (5 - 0 + 1)) +0;
        console.log("Número: "+num)
        if(num === 0){
            clearInterval(id);
            console.log("Ya salió el 0")
        }

    }, 0);
}// end ejercicio 2

function ejercicio3(){
    console.log("-- EJERCICIO 3 --");
    let n = Math.floor(Math.random() * (10 -2 + 1)) +2;
    console.log("tabla del "+n);
    for(let i=1; i<=10; i++){
        console.log(n+" * "+1+" = "+n*i);
    }// end for

}// end ejercicio 3

function ejercicio4(){
        console.log("-- EJERCICIO 4 --");
       //  let aNum = new Array(10);
        let cpar = 0;
        let cimpar = 0;
        for(let i=1; i<=10; i++){
            let n = parseInt(prompt("Ingresa el digito No. "+i));
            if(isNaN(n)){
                console.log("ingresa un NUMERO");
                i--;
                continue;
            };
            if(n %2 === 0){
                cpar++;
            }else{
                cimpar++;
            }

        }// end for
        console.log("Cantidad de par: "+cpar);
        console.log("cantidad de impar: "+cimpar)

}
function ejercicio5(){
        console.log("-- EJERCICIO 5 --");
        let valido = false;
        let cantidad = 0;
        let comision= 0;
        while( valido === false){
           cantidad = parseInt(prompt("Ingresa la cantidad que vendiste $$$"));
           if(isNaN(cantidad) || cantidad <5000 || cantidad>30000){
                console.log("ingresa una cantidad valida (entre $5000 y $30000)")
           }else if(cantidad>=10000){
                comision = cantidad *0.15;
                valido = true;
           }else{
                comision = cantidad * 0.10;
                valido= true;
           }
        }
        console.log("Total de ventas $"+cantidad);
        console.log("Comision $"+comision);
}

////// LINEAS DE EJECUCIÓN DE MIS EJERCICIOS //////

setTimeout(ejercicio1,1000);
setTimeout(ejercicio2,2000);
setTimeout(ejercicio3,3000);
setTimeout(ejercicio4,4000);
setTimeout(ejercicio5,5000);
