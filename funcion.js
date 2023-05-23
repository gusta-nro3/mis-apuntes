let nombre = "gustavo";
console.log (nombre);
nombre = "javier";
console.log (nombre);

//variables
var num_a = 4;                     // creadas e inicializadas.
var b = 6; 
 console.log (num_a + b);//10

b = num_a;                        // reasignandole otro valor.
console.log(num_a + b);//8

[num_a, b] = [10, 5];            // una vez creadas asignandole valores usando arreglos.
console.log (num_a+ b);//15

let num1 = "7";
let num2 = 13;
console.log(num1 + num2);//713  suma string


//ciclo while potencia 10
let resultado = 1;
let contador = 0;
while (contador < 10) {
    resultado *= 2;
    contador += 1;
}
console.log(resultado);

// funcion potencia de 10
var potencia = function (base, exponente) {
    let resultado = 1;
    for (let contador = 0; contador < exponente; contador += 1) {
        resultado *= base;
    }
    return resultado;
};
console.log(potencia(2, 10));


// triangulo
for (let linea = "#"; linea.length < 8; linea += "#")
console.log(linea);

// do while
let tuNombre;
do{
    tuNombre = prompt("Who are you?")
} while (!tuNombre);
console.log(tuNombre); 

// ciclo encuentra nro mayor al dado y además divisible por otro.
for (numero = 20; numero += 1;) {
    if (numero % 7 == 0){
        console.log(numero);
        break
    }
}

// de 0 a 100 divisibles por 3-5 o ambos
for ( let num = 0; num <= 100; num ++){
    let numeros = ""
    if (num % 3 == 0) numeros += "Fizz";
    if (num % 5 == 0) numeros += "Buzz";
    console.log(numeros || num);
}

// lluvia de &
    let size = 8;
    let grilla = "";
for ( let x = 0; x < size; x++ ) {
    for (let y = 0; y < size; y++){
        if ((x + y) % 2 == 0) {
            grilla += " ";
        } else{
            grilla += "&";
        }
    }
    grilla += "\n";
}
console.log(grilla);

//ARREGLOS
var miArreglo = [ 4, 5, 9, "Yungas", "Productos", 123, "en-fin"];
console.log(JSON.stringify(miArreglo));
console.log(miArreglo.length); // 7
console.log(miArreglo[0]);     // 4
console.log(miArreglo[6]);     // en-fin
console.log(miArreglo[miArreglo.length-1]);// en-fin
console.log(miArreglo.at(-1));             // en fin
console.log(miArreglo.toSorted());         // ordena de menor a mayor
console.log(miArreglo.with(miArreglo.length-2, "Pensar"));//reemplaza en el indice dado
console.log(miArreglo.toReversed());       // reversa
console.log(miArreglo.toSpliced(0, 3));    // quita tres elementos desde el indice dado
console.log (miArreglo);//toSorted,toReversed,toSpliced no modifican el arreglo origen.
miArreglo.push("yo");             // añade un nuevo elemento al final del arreglo
miArreglo[miArreglo.length] = "otroyo";// alternativa al metodo push
console.log(miArreglo);           // muestra el arreglo con el nuevo elemento, console.log([].push());muestra la nueva longitud
miArreglo.pop();                  // remueve el ultimo elemento y lo retorna
console.log(miArreglo);           // muestra el arreglo con el elemento removido
console.log(miArreglo.pop());     // aca remueve otro elemento final del arreglo y lo devuelve
miArreglo.shift();                // remueve el primer elemento del arreglo
console.log(miArreglo);           // muestra el arreglo con el elemento removido, console.log([].shift()); muestra la remoción.
miArreglo.unshift(4);             // añade un elemento al principio del arreglo
console.log(miArreglo);           // muestra el arreglo con el elemento nuevo
console.log( miArreglo.slice(3,5)); //devuelve un nuevo arreglo con los elementos del indice 3 y 4
console.log(miArreglo.concat([miArreglo.slice(3, 5)]));
var num = [35, 45, 20, 50, 30, 55]
var elegidos = num.filter(condicion);// método filtern
function condicion (x) {
    return x >= 35;
}
console.log(num);
console.log(elegidos);

let newNum = num.map((element) => element + 10);//método map.
console.log(newNum);

//Funciones
 let a = 5; 
 if(true) {
    let b = 5;
    var c = 2;
    console.log(a+b+c);
 }
//console.log(b); let es mas rectrictivo no se puede utilizar fuera del bloque {}.
    console.log(c); // var sí se ve fuera del bloque donde fue declarado.
    console.log(a); // aquí let sí se ve porque está fuera de las {}. 

 // Parámetros
 function saluda (quien){
    console.log("hola " + quien);
 }
 saluda("Gustavo");                          // cuando se le pasa lo que pide.
    console.log("chau");                          

function saludar (quien) {
    return ("hola " + quien);
}
    console.log ( saludar("Javier", "Gustavo")); // ignora el segundo parámetro.
    console.log ( saludar("Marcos"));
    console.log( "chau");

function salude (quien = "che") {
    return ("hola " + quien);
}
    console.log(salude());                       // cuando se le asigna un valor de respaldo.
    console.log("chau");

function saludo (quien) {
    let nombre = quien;
    return () => nombre;
}
    let guardar1 = nombre;
     console.log(guardar1);
   
function minimo (nro1, nro2) {
    return(Math.min(nro1, nro2));
}

    console.log(minimo(9, 54));
    console.log(minimo(34, 98));
    console.log(minimo(123, 54));
    console.log(minimo(5, -9));

function maximo (nro1, nro2) {
    if (nro1 < nro2) {
        return nro2;
    } else{
        return nro1;
    }
}
    console.log(maximo(9, 54));
    console.log(maximo(34, 98));
    console.log(maximo(123, 54));
    console.log(maximo(5, -9));

function contarFs (cadena, F) {
    let contador = 0;
    for ( let i = 0; i <= cadena.length - 1; i++) {
        if ( cadena[i] == F) {
            contador ++;
        }
    }
        return contador;
}
    console.log(contarFs( "FofitoFOFo", "F")); //3

var unArreglo = [ 52, 19, 11, 1970, 3];  // suma los elementos del arreglo.
var sumaTotal = 0;
for ( let i = 0; i < unArreglo.length; i++) {
    sumaTotal += unArreglo[i]   
}
    console.log(sumaTotal);//2055

function anioDeMiMuerte ( arreglo){       // funcion que suma los elementos de un arreglo
    var anio = 0;
    for ( let i = 0; i < arreglo.length; i++ ) {
        anio += arreglo[i];
    }
    return anio;
}

    console.log(anioDeMiMuerte([52, 19, 11, 1970, 3]));
    console.log(anioDeMiMuerte([48, 28, 1, 1975, 28]));
    console.log(anioDeMiMuerte([13, 25, 11, 2009, 19]));

//operador spread
var misNumeros = [52, 19, 11, 1970, 3];   // suma los elem, del arreglo usando el operador.
function sumarlos (a, b, c, d, e ){
     return(a + b + c + d + e);
}
    console.log( sumarlos(...misNumeros));

//operador rest
function lista(...numeros) {
    console.log(numeros);
}
    lista(3,4,5,6,12);

function max (...num) {
    if( num.length == 0) {
        return 0;
    } else {
        let max = 0;
        for( let i = 0; i < num.length; i++ ) {
            if ( num[i] > max ) {
                max = num[i];
            }
        }
             return max;
    }
     
}

console.log(max(2, 3, 5, 6,87));
console.log( max());

// objetos
var miObjeto ={
    "negocio": "cotillon",
    "nombre" : "Mágico",
    "fecha inauguracion" : " 03 marzo 2003",
    "direccion" : "Ramirez sn",
}

console.log(miObjeto["negocio"]);             //.
console.log(miObjeto.nombre);                 //.
console.log(miObjeto["fecha inauguracion"]);  //se accede a una propiedad del objeto.
miObjeto.propietario = "Carina N";            //se crea una propiedad
console.log(JSON.stringify(miObjeto) );
console.log(miObjeto);
console.log(Object.keys(miObjeto));           //devuelve las propiedades del objeto, en un arreglo.
console.log(Object.values(miObjeto));         //devuelve los valores de las prop. en un arreglo.3
console.log(Object.entries(miObjeto));       //devuelve los pares [propiedad, valor].
delete miObjeto.propietario;                 //borra la propiedad y su valor.
console.log(JSON.stringify(miObjeto));      
console.log(miObjeto.hasOwnProperty("propietario"));//false































