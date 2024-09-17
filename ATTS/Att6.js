const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
const pares = [];
const impares = [];

let ver=true
let i=0

console.log("Digite os numeros quando quiser parar digite 'PARE'")

while(ver==true){
    
    if(teclado("Quer continuar ? ('PARE') ")=='PARE'){
    ver=false;
   }
   else{
   arr1[i] = parseInt(teclado("Digite o numero :"));
   i++;
   }
}

for(k=0;k<arr1.length;k++){

    if(arr1[k]%2==0){
        pares[k]=arr1[k]
    }
    else{
        impares[k]=arr1[k]
    }
}

pares.sort();

impares.reverse();

console.log(arr1)
console.log(pares)
console.log(impares)