function Retangulo(x, y)  {
   
  this.x = x;
  this.y = y;

this.calculaArea = function() {
  return this.x * this.y;
}
}
var x = prompt(" Digite a base do retangulo");
var y = prompt(" Digite a altura do retangulo");

const retangulo = new Retangulo(x, y);

alert("A area do retangulo é: " + retangulo.calculaArea());

function Conta (nomeCorrentista, banco, numeroConta, saldo) {
  this.nomeCorrentista = nomeCorrentista;
  this.banco = banco;
  this.numeroConta = numeroConta;
  this.saldo = saldo;

  this.getNomeCorrentista = function() {
      return this.nomeCorrentista;
  }

  this.setNomeCorrentista = function(nomeCorrentista) {
      this.nomeCorrentista = nomeCorrentista;
  }

  this.getBanco = function() {
      return this.banco;
  }

  this.setBanco = function(banco) {
      this.banco = banco;
  }

  this.getNumeroConta = function() {
      return this.numeroConta;
  }

  this.setNumeroConta = function(numeroConta) {
      this.numeroConta = numeroConta;

  }

  this.getSaldo = function() {
      return this.saldo;
  }
  this.setSaldo = function(saldo) {
      this.saldo = saldo;
  }
}

function CorrenteComSaldoEspecial (nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
  this.saldoEspecial = saldoEspecial;
  
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo, saldoEspecial);

  this.getSaldoEspecial = function() {
      return this.saldoEspecial;
  }
  
  this.setSaldoEspecial = function(saldoEspecial){
      this.saldoEspecial = saldoEspecial;
  }
}
  CorrenteComSaldoEspecial.prototype = Object.create(Conta.prototype);
  CorrenteComSaldoEspecial.prototype.constructor = CorrenteComSaldoEspecial;
  

 function PoupancaComJurosDataVencimento(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
  this.juros = juros;
  this.dataVencimento = dataVencimento;
      Conta.call(this, nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento);

      this.getJuros = function () {
          return this.juros
      }

      this.setJuros = function(juros) {
          this.juros = juros;
        };
      
        this.getDataVencimento = function() {
          return this.dataVencimento;
        };
      
        this.setDataVencimento = function(dataVencimento) {
          this.dataVencimento = dataVencimento;
        };
 }
      
   
      PoupancaComJurosDataVencimento.prototype = Object.create(Conta.prototype);
      PoupancaComJurosDataVencimento.prototype.constructor = PoupancaComJurosDataVencimento;

var corrente1 = new CorrenteComSaldoEspecial('Mayara', 'Banco A', '12345', 1000, 500);
document.write('<br>Corrente com Saldo Especial: <br>');
document.write('<br>Nome do correntista: ' + corrente1.getNomeCorrentista()); 
document.write('<br>Banco: ' + corrente1.getBanco());
document.write('<br>Número da conta: ' + corrente1.getNumeroConta());
document.write('<br>Saldo : ' + corrente1.getSaldo());
document.write('<br>Saldo Especial: ' + corrente1.getSaldoEspecial());


var poupanca1 = new PoupancaComJurosDataVencimento('Sabrina', 'Banco B', '54321', 5000, 0.05, '01/06/2023');
document.write('<br><br>Poupança com Juros e Data de Vencimento:<br>');
document.write('<br>Nome do correntista: ' + poupanca1.getNomeCorrentista());
document.write('<br>Banco: ' + poupanca1.getBanco());
document.write('<br>Numero da conta: ' + poupanca1.getNumeroConta());
document.write('<br>Saldo: ' + poupanca1.getSaldo());
document.write('<br>Juros: ' + poupanca1.getJuros());
document.write('<br>Data de Vencimento: ' + poupanca1.getDataVencimento());
