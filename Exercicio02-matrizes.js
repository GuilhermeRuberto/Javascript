// Função auxiliar para gerar números reais aleatórios entre 0 e 100
function gerarNumeroRealAleatorio() {
    return (Math.random() * 100).toFixed(2);  // Gera um número real com duas casas decimais
}

// Inicializa a matriz de 50 por 50
let matriz = [];
for (let i = 0; i < 50; i++) {
    matriz[i] = [];
    for (let j = 0; j < 50; j++) {
        matriz[i][j] = parseFloat(gerarNumeroRealAleatorio());
    }
}

// Vetor para armazenar os elementos da diagonal principal
let diagonalPrincipal = [];

// Preenche o vetor com os elementos da diagonal principal da matriz
for (let i = 0; i < 50; i++) {
    diagonalPrincipal.push(matriz[i][i]);
}

// Imprime o vetor com os elementos da diagonal principal
console.log("Vetor da diagonal principal:", diagonalPrincipal);
