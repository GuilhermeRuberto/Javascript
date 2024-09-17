let numLinhas = 5;
let numColunas = 5;

let vetor = [];
let mat = [];

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


for (let i = 0; i < numLinhas; i++) {

    vetor[i]=mat[i][i]

}

console.log(mat)
console.log("Agora pegando a diagonal da esquerda superior para a direita inferior")
console.log(vetor)