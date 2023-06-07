const prompt = require('prompt-sync')();
// Não esquecer de instalar
// npm install prompt-sync

function saudacao(nome) {
  console.log('Oi ' + nome);
}

function entradaNome(callback) {
  var nome = prompt('Digite seu nome: ');
  callback(nome);
}

entradaNome(saudacao);