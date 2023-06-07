var soma = 0;

for (var i = 2; i < process.argv.length; i++) {
  soma += Number(process.argv[i]);
}

console.log('Soma = ' + soma);