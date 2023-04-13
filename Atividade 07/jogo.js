var escolhas = ["Papel","Tesoura","Pedra"];
var jogador;
var computador;

function exibirRes(resultado){
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;
}

function aleatoria(){
    var indice = Math.floor(Math.random() * 3);
    escolhaComp = escolhas[indice];
}

function vencedor() {
    if (jogador == computador) {
        exibirRes("Empate!");
    } else if (jogador == "Pedra") {
        if (computador == "Tesoura") {
            exibirRes("Pedra quebra tesoura. Você venceu!");
        } else {
            exibirRes("Papel cobre a pedra. Você perdeu!");
        }
    } else if (jogador == "Papel") {
        if (computador == "Pedra") {
            exibirRes("Papel cobre a pedra. Você venceu!");
        } else {
            exibirRes("Tesoura corta papel. Você perdeu!");
        }
    } else if (jogador == "Tesoura") {
        if (computador == "Papel") {
            exibirRes("Tesoura corta papel. Você venceu!");
        } else {
            exibirRes("Pedra quebra tesoura. Você perdeu!");
        }
    }
}

function jogar(escolha) {
    jogador = escolha;
    aleatoria();
    vencedor();
}

document.getElementById("Pedra").addEventListener("click", function() { jogar("Pedra"); });
document.getElementById("Papel").addEventListener("click", function() { jogar("Papel"); });
document.getElementById("Tesoura").addEventListener("click", function() { jogar("Tesoura"); });
document.getElementById("Limpar").addEventListener("click", function() { window.location.reload(); });