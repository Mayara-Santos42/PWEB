function maiorNumero(num1, num2, num3) {
    var maior = Math.max(num1, num2, num3);
    return maior;
  }
  
  function ordenarNumeros(num1, num2, num3) {
    var numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
      return a - b;
    });
    return numeros;
  }
    