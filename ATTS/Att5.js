const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
console.log("Digite os primeiros 10 numeros")
for(i=0; i<10; i++ ){

    arr1[i] = parseInt(teclado("Digite os numeros :"));
    
    }

console.log("Digite os proximos 10 numeros")

for(i=0; i<10; i++ ){

        arr2[i] = parseInt(teclado("Digite os numeros :"));
        
    }

for(i=0; i<10; i++ ){

        arr3[i] = arr1[i]-arr2[i]
        
    }

for(i=0; i<10; i++ ){

        arr4[i] = arr1[i]+arr2[i]
        
    }

for(i=0; i<10; i++ ){

        arr5[i] = arr1[i]*arr2[i]
        
    }

    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)
    console.log(arr5)