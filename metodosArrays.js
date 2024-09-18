const nomes = ["gregory", "andrey", "bruno", "joarez"];
// Retorna o indeice do elemento
console.log(nomes.indexOf("andrey"));

// Adiciona um elemento ao final do array
nomes.push("davi");  
console.log(nomes);

// Para adicionar um elemento ao inicio do array
nomes.unshift("julio");
console.log(nomes);

// Remove um elemento do fim do array
nomes.pop();
console.log(nomes);

// Remove elemento do inicio
nomes.shift();
console.log(nomes);

// Remove um elemento apartir do seu indice
// Posso remover o elemento pelo indice passando só um parametro
// Ou posso remover a partir de um elemento
nomes.splice(2, 3);
console.log(nomes);

// contatena dois ou mais arrays
const carros = ["palio", "gol", "corsa", "uno"];
const pessoas = ["Jorginho", "Maria", "joao", "lorenzo"];

const novo = carros.concat(pessoas);
console.log(carros);
console.log(pessoas);
console.log(novo);