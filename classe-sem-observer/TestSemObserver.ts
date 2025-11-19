class ContaBancariaSemObserver {
  numero: number;
  saldo: number;

  constructor(numero: number, saldo: number) {
	this.numero = numero;
	this.saldo = saldo;
  }

  depositar(valor: number): void {
	this.saldo += valor;
	console.log(`Depósito: ${valor}, saldo atual: ${this.saldo}`);
  }

  sacar(valor: number): void {
	if (this.saldo >= valor) {
	  this.saldo -= valor;
	  console.log(`Saque: ${valor}, saldo atual: ${this.saldo}`);
	} else {
	  console.log(`Saque negado: saldo insuficiente (solicitado ${valor}, disponível ${this.saldo})`);
	}
  }
}

const conta = new ContaBancariaSemObserver(123, 100);

console.log("=== TESTE SEM OBSERVER ===");

conta.depositar(50);
conta.sacar(120);
conta.sacar(10);
