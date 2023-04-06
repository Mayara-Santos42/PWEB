function calcular() 
{
    let nome = prompt("Digite seu nome:");
    let n1 = parseFloat(prompt("Digite o primeiro numero:"));
    let n2 = parseFloat(prompt("Digite o segundo numero:"));

    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let produto = n1 * n2;
    let divisao = n1 / n2;
    let restoDiv = n1 % n2;

    alert("Soma: "+soma);
    alert("Subtração: "+subtracao);
    alert("Produto: "+produto);
    alert("Divisão: "+divisao);
    alert("Resto da divisão: "+restoDiv);
}