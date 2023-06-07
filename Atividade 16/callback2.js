const prompt = require('prompt-sync')();
// Não esquecer de instalar
// npm install prompt-sync

function exibeMensagensNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback();
}

// Executando
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', () => console.log('Essa é a segunda mensagem exibida na ordem'));