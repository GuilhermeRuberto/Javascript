const teclado = require('prompt-sync')({sigint:true});

const arr1 = [];
for(i=0; i<10; i++ ){

    arr1[i] = teclado("Digite o nome :");
    
    }

    var nome = teclado("Digite o nome de busca :")
    var busca 

    for(i=0; i<10; i++){
    
        if(arr1[i]==nome){
          busca=true;
        }
    
    }

    if(busca==true){
        console.log("ACHEI!!")
    }
    else{
        console.log("Não achei")
    }
