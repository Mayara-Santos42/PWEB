const fs = require('fs');
const data = fs.readFileSync('cidades.txt');

// A execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());