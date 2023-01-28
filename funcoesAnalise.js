var coeficiente;

function populacao(){
var areaEdificacao = document.getElementById('area').value;
var densidade = document.querySelector('input[name = "densidade"]:checked').value;
var populacao = areaEdificacao/densidade;
if (!isNaN(populacao) && populacao !== Infinity) {
   document.getElementById('resultado').innerHTML = populacao;
   numeroDeSaidas(populacao);
   LarguraPortaMinima(populacao,areaEdificacao);
} else {
   document.getElementById('resultado').innerHTML = "Valor inválido";
   document.getElementById('numeroSaidas').innerHTML = "N/A";
   document.getElementById('larguraSaida').innerHTML = "N/A";
}
}

//densidade ver tabela A5 IT 05 Parte 01

function numeroDeSaidas(populacao){
if(populacao<=50){
   document.getElementById('numeroSaidas').innerHTML = "01";
} else if(populacao>50 && populacao<=500){
   document.getElementById('numeroSaidas').innerHTML = "02";
}else if(populacao>500 && populacao<=1000){
   document.getElementById('numeroSaidas').innerHTML = "03";
} else {
   document.getElementById('numeroSaidas').innerHTML = "04";
}
}

//Acrescentar outras variáveis
function LarguraPortaMinima(populacao,areaEdificacao){
var A1 = document.getElementById("A1").checked;
var A2 = document.getElementById("A2").checked;
var A3 = document.getElementById("A3").checked;
var B1 = document.getElementById("B1").checked;
var B2 = document.getElementById("B2").checked;
var C1 = document.getElementById("C1").checked;
var C2 = document.getElementById("C2").checked;
var C3 = document.getElementById("C3").checked;
var D1 = document.getElementById("D1").checked;
var D2 = document.getElementById("D2").checked;
var D3 = document.getElementById("D3").checked;
var D4 = document.getElementById("D4").checked;
var E1 = document.getElementById("E1").checked;
var E2 = document.getElementById("E2").checked;
var E3 = document.getElementById("E3").checked;
var E4 = document.getElementById("E4").checked;
var E5 = document.getElementById("E5").checked;
var E6 = document.getElementById("E6").checked;
var F6 = document.getElementById("F6").checked;

var F6a = document.getElementById("F6a").checked;
var F7 = document.getElementById("F7").checked;
var F7a = document.getElementById("F7a").checked;
var F7b = document.getElementById("F7b").checked;
var F8 = document.getElementById("F8").checked;
var F8a = document.getElementById("F8a").checked;
var F9 = document.getElementById("F9").checked;
var E5 = document.getElementById("E5").checked;
var E6 = document.getElementById("E6").checked;
var F6 = document.getElementById("F6").checked;
// ATENTAR PARA OS GRUPOS REPETIDOS NA PÁGINA HTML COMO O F6, F7,F10 DIFERENCIAR NOME DAS VARIÁVEIS PARA ESTES GRUPOS

var larguraPortaMinimaPorPessoa = 0;

if(A1 === true){
   larguraPortaMinimaPorPessoa = 4.1;
}
else if(A2 === true){
   larguraPortaMinimaPorPessoa = 4.1;
}
else if(A3 === true){
   larguraPortaMinimaPorPessoa = 4.1;
}
else if(B1 === true){
   larguraPortaMinimaPorPessoa = 4.1;
}
else if(B2 === true){
   larguraPortaMinimaPorPessoa = 4.1;
}
else if(C1 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(C2 === true){
   larguraPortaMinimaPorPessoa = 4.1;
}
else if(C3 === true){
   larguraPortaMinimaPorPessoa = 6;
}
else if(D1 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(D2 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(D3 === true){
   larguraPortaMinimaPorPessoa = 4.6;
}
else if(D4 === true){
   larguraPortaMinimaPorPessoa = 6;
}
else if(E1 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(E2 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(E3 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(E4 === true){
   larguraPortaMinimaPorPessoa = 3.6;
}
else if(E5 === true){
   larguraPortaMinimaPorPessoa = 6.2;
}
else if(E6 === true){
   larguraPortaMinimaPorPessoa = 6.2;
}
else if(F6 === true){
   larguraPortaMinimaPorPessoa = 6;
}

//larguraMinimaPorPessoa ver tabela A9 IT 05 Parte 01

var larguraPorta = (populacao*larguraPortaMinimaPorPessoa)/1000;
if (!isNaN(larguraPorta) && larguraPorta !== Infinity) {
   document.getElementById('larguraSaida').innerHTML = larguraPorta;
} else {
   document.getElementById('larguraSaida').innerHTML = "Valor inválido";
}
}




