/** json
 * significa javascript object notation que traduzindo fica notação de objetos js
 * é basicamente uma forma de converter um objeto em texto e ao contrario tbm
 * 
 * transmitir dados entre sistemas de forma simples já que o formato de texto é usado 
 * por praticamente todas as linguagens de programação
 * 
 * para trabalhar com json usamos dois métodos
 * 
 * JSON.parse() -> converte textos no padrao JSON em objetos
 * JSON.stingify() -> converte objetos em texto padrão JSON
 */
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
//console.log(carro.modelo); 
console.log(typeof(carro));
// converte de objeto para texto
let texto = JSON.stringify(carro); 
//document.getElementById("area").innerHTML = carro;
console.log(typeof(texto));
// converte de texto para objeto
let obj = JSON.parse(texto);
console.log(typeof(obj));
