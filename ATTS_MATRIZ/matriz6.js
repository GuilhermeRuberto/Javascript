const teclado = require('prompt-sync')({sigint:true});

let verificacao = 0;

let numLinhas = 4;
let numColunas = 4;
let mat = [];



//zerar a matriz
for (let i = 0; i < numLinhas; i++) {
    mat[i] = [];
    
    for (let j = 0; j < numColunas; j++) {

        mat[i][j] = 0;
    }
}

console.log("Digite os numeros que queres colocar na matriz 4x4")
//adicionando os numeros na matriz
for (let i = 0; i < numLinhas; i++) {
    
    console.log("Linha")

    for (let j = 0; j < numColunas; j++) {

        mat[i][j] = parseInt(teclado("Digite um numero : "));
    }
}


do{

    console.log("----------Agora vamos fazer algumas coisas com a matriz usando o menu abaixo----------")
    console.log("-------Para navegar basta digitar os numeros no teclado de acordo com o sumário-------")
    console.log(" ")
    console.log("-------------------------------(1) = Imprimir a matriz--------------------------------")
    console.log("------------(2) = Somar os quadrados de todos os elementos da primeira coluna---------")
    console.log("-------------------(3) = Somar todos os elementos da terceira linha-------------------")
    console.log("------------------ (4) = Somar os elementos da diagonal principal;--------------------")
    console.log("--------------(5) = Somar todos os elementos de índice par da segunda linha-----------")
    console.log("----------------------------------(0) = sair do programa------------------------------")
    verificacao=parseInt(teclado(""))

    switch(verificacao){

        case 1:
            console.log(mat);
            break;

        case 2:
            let soma = 0
            for (let j = 0; j < numColunas; j++) {

                soma = mat[0][j] + soma};
                console.log(soma);
            break;

        case 3:
            let soma1 = 0;
            for (let j = 0; j < numColunas; j++) {

                soma1 = mat[2][j] + soma1};
                console.log(soma1);
            break;

        case 4:
            let vetor = [];

            for (let i = 0; i < numLinhas; i++) {

                vetor[i]=mat[i][i]
            
            }
            console.log(vetor)
            break;

        case 5:
            let soma2 = 0;
            for (let j = 0; j < numColunas; j++) {

                if(mat[1][j]%2==0){
                    soma2 = mat[1][j] + soma2}};
                console.log(soma2);
            break;
    }

    
    

}while(verificacao!==0);
