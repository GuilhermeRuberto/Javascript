let numLinhas = 5;
let numColunas = 10;


let mat = [];

//função para aleatorizar os numeros//
function aleatorizadornum() {
    return parseInt(Math.random() * (99 - 0));
  }


//aleatorizar os numeros da matriz inteira
for (let i = 0; i < numColunas; i++) {
    mat[i] = [];
    for (let j = 0; j < numLinhas; j++) {
        mat[i][j] = aleatorizadornum();
    }
}

console.log(mat)