var idade = new Array();
var sexo = new Array();
var opniao = new Array();

function salvarInformacao() {
    idade.push(parseInt(document.getElementById("idade").value));
    sexo.push(document.querySelector('input[name="sexo"]:checked').value);
    opniao.push(parseInt(document.getElementById("opniao").value));

    console.log(idade);
    console.log(sexo);
    console.log(idade.length);
}

function imprimirResultado() {
    var soma = 0, maisNova, maisVelha, mulheres = 0, homens = 0, otimo = 0, pessimo = 0;

    for (var index = 0; index < idade.length; index++) {

        soma += idade[index];

        if (maisVelha == undefined && maisNova == undefined) {
            maisVelha = idade[index];
            maisNova = idade[index];
        }

        if (maisNova > idade[index]) {
            maisNova = idade[index];
        }

        if (maisVelha < idade[index]) {
            maisVelha = idade[index];
        }

        if (opniao[index] == 1) {
            pessimo += 1;
        } else if (opniao[index] == 4 || opniao[index] == 3) {
            otimo += 1;
        }

        if (sexo[index] == "feminino") {
            mulheres += 1;
        } else {
            homens += 1;
        }
    }

    var media = (soma / idade.length).toFixed(2);
    var percentOtimo = ((otimo / idade.length) * 100).toFixed(2);
    
    document.getElementById("media").textContent = ('Média da idade das pessoas que responderam ao questionário: ' + media);
    document.getElementById("maisNova").textContent =('Idade da pessoa mais velha: ' + maisVelha);
    document.getElementById("maisVelha").textContent = ('Idade da pessoa mais nova: ' + maisNova);
    document.getElementById("pessimo").textContent = ('Quantidadede de pessoas que responderam péssimo: ' + pessimo);
    document.getElementById("otimo").textContent = ('Porcentagem de pessoas que responderam ótimo e bom: ' +  percentOtimo + "%");
    document.getElementById("mulheres").textContent = ('Número de mulheres: ' + mulheres);
    document.getElementById("homens").textContent = ('Número de homens: ' + homens);


    console.log(idade);
    console.log(sexo);
    console.log(idade.length);
    console.log(media);
    console.log(mulheres);
}