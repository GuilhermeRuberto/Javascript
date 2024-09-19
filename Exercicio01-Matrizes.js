/** Faça um algoritmo que construa uma matriz de nome MAT de 10 linhas e 15 colunas contendo
números inteiros. Em seguida escreva a soma dos elementos de cada linha e se a soma dos
elementos é par ou impar. Por fim escreva a soma dos elementos de cada coluna e se a soma dos
elementos é par ou impar. */

// Função auxiliar para gerar números inteiros aleatórios entre 0 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 101);
}

// Inicializa a matriz MAT de 10 linhas e 15 colunas
let MAT = [];
for (let i = 0; i < 10; i++) {
    MAT[i] = [];
    for (let j = 0; j < 15; j++) {
        MAT[i][j] = gerarNumeroAleatorio();
    }
}

// Função para verificar se um número é par ou ímpar
function verificarParidade(soma) {
    return soma % 2 === 0 ? "par" : "ímpar";
}

// Soma dos elementos de cada linha
for (let i = 0; i < MAT.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < MAT[i].length; j++) {
        somaLinha += MAT[i][j];
    }
    console.log(`Soma dos elementos da linha ${i + 1}: ${somaLinha} (${verificarParidade(somaLinha)})`);
}

// Soma dos elementos de cada coluna
for (let j = 0; j < 15; j++) {
    let somaColuna = 0;
    for (let i = 0; i < 10; i++) {
        somaColuna += MAT[i][j];
    }
    console.log(`Soma dos elementos da coluna ${j + 1}: ${somaColuna} (${verificarParidade(somaColuna)})`);
}
