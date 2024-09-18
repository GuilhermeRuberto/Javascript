function somaMatrizes(matrizA, matrizB) {
    let linhas = matrizA.length;
    let colunas = matrizA[0].length;
    let resultado = [];
    // Verifica se as dimensões das matrizes são compatíveis
    if (linhas !== matrizB.length || colunas !== matrizB[0].length) {
      console.log("As matrizes têm dimensões diferentes!");
      return;
    }
    // Realiza a soma elemento por elemento
    for (let i = 0; i < linhas; i++) {
      let linha = [];
      for (let j = 0; j < colunas; j++) {
        linha.push(matrizA[i][j] + matrizB[i][j]);
      }
      resultado.push(linha);
    }
    return resultado;
  }
  // Exemplo de uso
  let matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];
  let matrizResultado = somaMatrizes(matrizA, matrizB);
  console.log(matrizResultado);
  
    