let numLinhas = 5;
let numColunas = 5;

let mat = [];
let mat2 = [];
let mat3 = [];

//função para aleatorizar os numeros//
function aleatorizadornum() {
    return parseInt(Math.random() * (10 - 0));
  }


//aleatorizar os numeros da matriz 1 e zerar a matriz 3
for (let i = 0; i < numLinhas; i++) {
    mat[i] = [];
    mat3[i] = [];
    for (let j = 0; j < numColunas; j++) {
        mat3[i][j] = 0;
        mat[i][j] = aleatorizadornum();
    }
}
//aleatorizar os numeros da matriz 2
for (let i = 0; i < numLinhas; i++) {
    mat2[i] = [];
    for (let j = 0; j < numColunas; j++) {
        mat2[i][j] = aleatorizadornum();
    }
}

//multiplica as 2 matrizes
for (let i = 0; i < numLinhas; i++) {
    
    for (let j = 0; j < numColunas; j++) {

        mat3[i][j] = mat[i][j] * mat2[i][j];

    }
}
console.log("mat1")
console.log(mat)
console.log("mat2")
console.log(mat2)
console.log("mat3")
console.log(mat3)