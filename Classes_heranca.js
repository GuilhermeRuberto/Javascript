class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    fazerBarulho(){
        console.log("Barulho do animal");
    }
    Comer(){
        console.log("Comendo...");
    }
}   
class Cachorro extends Animal{
    constructor(nome, idade, raca){
        super(nome, idade);
        this.raca = raca;
    }
    latir(){
        console.log("O cachorro ${this.nome} esta latindo!");
    }
}
class Gato extends Animal{
    constructor(nome, idade, corPelagem){
        super(nome, idade);
        this.corPelagem = corPelagem;
    }
    miar(){
        console.log("O gato ${this.nome} esta miando");
    }
}

const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Miau", 2, "Branco");

cachorro1.latir();
gato1.Comer();