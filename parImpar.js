// Par o impar

/* --> Crear una función expresada que al recibir un numero como parametro imprimima por consola 
“El número es par” si lo es, o “El número es impar” si no lo es. En el caso que el numero fuese 0 mostrar   
un mensaje de error. Se debe incluir un if ternario en script. */


function parImpar(numero){

   let resultado = numero == 0 ? "Error": numero % 2 == 0 ? "El número es par" :  "El número es impar";
   return resultado
}

console.log(parImpar(70));
console.log(parImpar(93));
console.log(parImpar(0));

 
//____________________________________________________________________________ //

let parImpar = function(num) {
   if (num == 0){
      console.log('error'); 
   } else {
      num % 2 == 0 ? console.log('es par') : console.log('es impar'); 
   } 
   }
   parImpar(5); // ejercuto funcion, no aplico console.log por que ya lo utilizamos dentro de la funcion//
   