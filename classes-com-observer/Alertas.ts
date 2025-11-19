

export class MostrarSaldo {
    executar(saldo: number) {
        console.log("Novo saldo: " + saldo);
    }
}

export class AlertaSaldoBaixo {
    executar(saldo: number) {
        if (saldo < 50) {
            console.log("ALERTA: Saldo menor que 50!");
        }
    }
}
