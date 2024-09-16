/** Faça um programa que lê 10 números inteiros do teclado e armazene em um vetor. Ao final
imprima o vetor armazenado nos dois sentidos. */

const teclado = require('prompt-sync')({sigint:true});
const array = [null,null,null,null,null,null,null,null,null,null];
for(let i=0;i<10;i++){
    var Buffer = parseInt(teclado("digite o número: "));
    array[i] = Buffer;
}
console.log("Imprimi crescente");
for(let i=0;i<10;i++){
    console.log(array[i]);
}

console.log("Imprimi decrescente");
for(let i=9;i>=0;i--){
    console.log(array[i]);
}
