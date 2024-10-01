/* Jogo de batalha naval em javascript
 * Data - 27/09/2024
 * Autor - Diego Paiani Cardoso
 * Projeto realizado na UC de Lógica de programação
*/
const teclado = require('prompt-sync')({sigint:true});
let Fim_Jogo = true;

while(Fim_Jogo){
    let Quant_Barco = 12;
    let Tamanho_Tabuleiro = 5;
    let Quant_Jogadas = 12;
    let JogadaX;
    let JogadaY;
    let Quant_Tiros = 12;
    let Pontuacao = 0;
    let Tabuleiro = []; 
   
    for(let i = 0; i < Tamanho_Tabuleiro; i++){         
        Tabuleiro[i] = [];                              
        for(let j = 0; j < Tamanho_Tabuleiro; j++){     
            Tabuleiro[i][j] = false;                    
        }
    } 
    for( let i = 0; i < Quant_Barco; i++){
        let posX = parseInt(Math.floor(Math.random()*5)); 
        let posY = parseInt(Math.floor(Math.random()*5)); 
        Tabuleiro[posX][posY] = true;                     
    }
    console.log(Tabuleiro);

    for(let indice = 0; indice < Quant_Jogadas; indice++){
        JogadaX = parseInt(teclado("Digite a posição em X: "));
        JogadaY = parseInt(teclado("Digite a posição em Y: "));
        
        if(isNaN(JogadaX) || isNaN(JogadaY)){
            console.log("Digite um número válido");
            JogadaX = parseInt(teclado("Digite a posição em X: "));
            JogadaY = parseInt(teclado("Digite a posição em Y: "));
        }
        Quant_Tiros--;
        
        if(Tabuleiro[JogadaX][JogadaY] == true){
            console.log("*****************************");
            console.log("****   Barco naufragado   ***");
            console.log("*****************************");
            Tabuleiro[JogadaX][JogadaY] = false;    
            Pontuacao += 10;                
        }
        
        else if(Tabuleiro[JogadaX][JogadaY] == false){
            console.log("*****************************");
            console.log("******   Tiro na água   *****");
            console.log("*****************************");
        }
        console.log("*****************************");
        console.log("Tiros: ", Quant_Tiros);
        console.log("Pontos: ", Pontuacao);
        console.log("*****************************");
        
        if(Quant_Tiros == 0){
            if(Pontuacao >= 70){
                console.log("*****************************");
                console.log("*** Parabéns, Você Venceu ***");
                console.log("*****************************");  
            }else{
                console.log("*****************************");
                console.log("*** Que pena! Você Perdeu ***");
                console.log("*****************************");
            }
            let continuar = teclado("** Deseja jogar novamente?, se sim digite n: ");
            if(continuar !== "n"){
                Fim_Jogo = false;
                console.log("Adeus...");
            }
        }
    }
}


    

