

export class ContaBancaria {
    private numeroConta: number;
    private saldo: number = 0;

    // Lista de observers (cada observer precisa ter o método executar)
    private observers: Array<{ executar(saldo: number): void }> = [];

    constructor(numeroConta: number, saldoInicial: number) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    // Adiciona observers
    addObserver(observer: { executar(saldo: number): void }) {
        this.observers.push(observer);
    }

    // Notifica todos os observers sempre que o saldo mudar
    private notificar() {
        for (const obs of this.observers) {
            obs.executar(this.saldo);
        }
    }

    depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor;
            this.notificar();
        } else {
            console.log("❌ Valor de depósito inválido.");
        }
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.notificar();
        } else {
            console.log("❌ Saldo insuficiente para saque.");
        }
    }

    getSaldo() {
        return this.saldo;
    }

    getNumeroConta() {
        return this.numeroConta;
    }
}
