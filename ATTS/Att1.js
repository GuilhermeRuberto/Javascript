const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
for(i=0; i<10; i++ ){

    arr1[i] = teclado("Digite o numero :");
    
    }

console.log(arr1)