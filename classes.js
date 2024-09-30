// Cria uma classe
class Carro{
    // Chama o método construtor para atrinuir os valores as propriedades
    constructor(valor1,valor2,valor3, valor4){
        this.marca = valor1;
        this.modelo= valor2;
        this.ano = valor3;
        this.cor = valor4;
    }
    // Cria um metodo da buzina de cada carro
    Buzina(){
        return this.modelo + " biiiiiii";
    }
}
// Cria um objeto para minha classe e atribui valores a ele
const uno = new Carro("Fiat", "Uno", 2005, "Branco");
const Gol = new Carro("Volkswagen", "Gol", 2010, "Vermelho");
const Celta = new Carro("Chevrolet", "Celta", 2005, "Preto"); 
// imprimi os valores atribuidos
console.log(Celta);
console.log(Celta.Buzina());
