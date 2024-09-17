const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
for(i=0; i<10; i++ ){

    arr1[i] = teclado("Digite o numero :");
    
    }
let k=9;
const arr2 =[];
for(i=0; i<10; i++){


    arr2[k]=arr1[i];
    k--;

}

console.log(arr1)
console.log(arr2)