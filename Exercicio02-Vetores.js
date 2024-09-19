/** Ler um vetor de 10 elementos. Crie um segundo vetor, com todos os elementos na ordem inversa,
ou seja, o último elemento passará a ser o primeiro, o penúltimo será o segundo e assim por diante.
Imprima os dois vetores. */

const vetor1 = [1001,1002,1003,1004,1005,1006,1007,1008,1009,1010];
const vetor2 = [1001,1002,1003,1004,1005,1006,1007,1008,1009,1010];
let j = 9;
for(let i=0;i<=10;i++){
    vetor1[i] = vetor2[j];
    j--;
}
console.log("Mostrando vetor 1");
for(let i=0;i<10;i++){
    console.log(vetor1[i]);
}
console.log("Mostrando vetor 2");
for(let i=0;i<10;i++){
    console.log(vetor2[i]);
}