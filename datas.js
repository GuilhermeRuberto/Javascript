data = new Date();
//console.log(data);
// pegar o ano
let ano = data.getFullYear();
//console.log(ano);
// mes atual
let mes = data.getMonth();
//console.log(mes);
const mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let MesNovo = mesesAno[data.getMonth()];
//console.log(MesNovo);
// dia do mes
let diaMes = data.getDate();
//console.log(diaMes);
let horas = data.getHours();
console.log(horas);
let min = data.getMinutes();
console.log(min);
let seg = data.getSeconds();
console.log(seg);
// Pegar a data no padrao dia/mes/ano
let databr = data.toLocaleString("pt-BR",{dateStyle:"short"});
console.log(databr);

d = new Date();
diames = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();
/** preenche coom zero na frente */
function addZero(x){return x < 10 ? '0' + x: '' + x;};

let dataPadraoBr = addZero(diames) + "/" + addZero(mes) + "/" + ano;
//console.log(dataPadraoBr);

/** para validar a data */
var hoje = new Date();
var vencimento = new Date(2022,0,15);

if(hoje < vencimento){
    console.log("Está vencida");
}else{
    console.log("Ainda não venceu");
}
/** diferença em dias */
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo/(24*60*60*1000));
console.log(diferencaDias + " Dias");
