const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
const arr2 = [];

var ver=true
var ver2=true

let i=0
let k=0

while(ver==true){
    
    if(teclado("Quer continuar ? ('PARE') ")=='PARE'){
    ver=false;
   }
   else{
   arr1[i] = parseInt(teclado("Digite o numero :"));
   i++;
   }
}

while(ver2==true){
    
    if(teclado("Quer continuar ? ('PARE') ")=='PARE'){
    ver=false;
   }
   else{
   arr1[k] = parseInt(teclado("Digite o numero :"));
   k++;
   }
}

