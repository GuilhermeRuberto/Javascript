let numLinhas = 10;
let numColunas = 15;

let mat = [];
let soma = [];
let resp1 = [];
let resp2 = 0;
let resp3;

//função para aleatorizar os numeros//
function aleatorizadornum() {
    return parseInt(Math.random() * (99 - 0));
  }




//aleatorizar os numeros da matriz inteira
for (let i = 0; i < numLinhas; i++) {
    mat[i] = [];
    for (let j = 0; j < numColunas; j++) {
        mat[i][j] = aleatorizadornum();
    }
}

//setar a array da soma das linhas para 0 para realizar o calculo apos o set
for(let i=0; i<10; i++){

    soma[i]=0
}


//somar os numeros da matriz por linhas
for(let i=0; i<numLinhas; i++) {
    
    
    for (let j = 0; j < numColunas; j++) {

        
        soma[i] = soma[i] + mat[i][j]

    }
}

//verificar se é par ou impar a soma das linhas
for(let i=0; i<10; i++){

    if(soma[i]%2==0){
        resp1[i]="Par"
    }
    else{
        resp1[i]="Impar"
    }

}

//soma de todas as linhas
for(let i=0; i<numLinhas; i++) {

    resp2 = soma[i] + resp2

}
//verificar se a soma de todas as linhas é par ou impar
if(resp2%2 == 0){

    resp3="O resultado final é par"
}
else{

    resp3="O resultado final é impar"
}

console.log(mat);
console.log("Agora as somas das colunas")
console.log(soma);
console.log("Agora vamos ver se a soma é par ou impar")
console.log(resp1)
console.log("Agora vamos ver o resultado final")
console.log(resp2)
console.log(resp3)




