const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
const arr2 = [];

let ver=true
let ver2=true

let i=0
let k=0
console.log("Digite os numeros quer deseja comparar")
while(ver==true){
    
    if(teclado("Quer continuar ? ('PARE') ")=='PARE'){
    ver=false;
   }
   else{
   arr1[i] = parseInt(teclado("Digite o numero :"));
   i++;
   }
}
console.log("Digite os numeros da proxima array para terminar a comparação")
while(ver2==true){
    
    if(teclado("Quer continuar ? ('PARE') ")=='PARE'){
    ver2=false;
   }
   else{
   arr1[k] = parseInt(teclado("Digite o numero :"));
   k++;
   }
}

for(j=0;j<arr1.length;j++){

    if(arr1[i]==arr2[i]){

        console.log("Os numeros são iguais")

    }
    else{
        console.log("Os numeros são diferentes")
    }

}

