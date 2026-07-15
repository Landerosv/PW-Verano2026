//var nombre = "Luis";
//let pomedio = 9.8;
//const edad = 20;
/*
    if(true){
        var libro = "libro 1";
        let animal= "perro";
    }
     console.log(libro);
    // console.log(animal);
  */
    //let n1 = parseInt(prompt("ingresa un número"));
    //let n2 = parseInt(prompt("ingresa un número"));
   // console.log(n1);
   // console.log(n2);
    //let suma = n1+n2;
    let resta = 10-5;
    let multiplicacion = 10*5;
    let division = 10/5;
    let residuo = 10%3;
   // console.log("suma",suma);
    console.log("resta",resta);
    console.log("multiplicacion",multiplicacion);
    
    console.log(5>3);
    console.log(5<3);
    console.log(5===5);
    console.log(5==="5");

    let calificacion = 85;
    if (calificacion >= 90){
        console.log("Excelente");
    } else if(calificacion>=70){
        console.log("aprobado");
    } else{
        console.log("reporbado");
    }
    let tabla=5;
    for(let i=1; i<=5; i++){
        console.log(`${tabla} x ${i} = {tabla*i}`)
    }

    function saludar(nombre){
        console.log("hola "+nombre);
    }
    saludar("luis");

    let persona = {
        nombre: "juan",
        edad: 20,
        ciudad: "tepic"
    }
    console.log(persona);
    persona.nombre ="carlos";
    persona.carrera = 'ISC';

    console.log(persona);

    let numeros = [1,2,3,4,5];
    numeros.forEach(numero =>{
        console.log(numero);
    });
    let dobles = numeros.map(numero => {
        return numero*2;
    });
    
    console.log(dobles);