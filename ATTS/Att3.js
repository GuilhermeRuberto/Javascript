const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
const arr2 = [];
const arr3 = [];

for(i=0; i<10; i++ ){

    arr1[i] = teclado("Digite o numero :");
    
    }


for(i=0; i<10; i++){
    
    if(i%2==0){
        arr3[i]=i/2
    }
    else{
        arr2[i]=i*3
    }

}

console.log(arr1)
console.log(arr2)
console.log(arr3)