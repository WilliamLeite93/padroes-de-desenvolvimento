import { ContaBancaria } from "./ContaBancaria.js";
import { MostrarSaldo, AlertaSaldoBaixo } from "./Alertas.js";

console.log("===== TESTE COM OBSERVER =====");

const conta = new ContaBancaria(123, 100);


conta.addObserver(new MostrarSaldo());
conta.addObserver(new AlertaSaldoBaixo());

console.log("\n--- Depósito de 50 ---");
conta.depositar(50);  // observers são notificados automaticamente

console.log("\n--- Saque de 30 ---");
conta.sacar(30);      // observers são notificados

console.log("\n--- Saque de 110 (saldo fica baixo) ---");
conta.sacar(110);     // deve disparar alerta de saldo baixo

console.log("\n--- Tentando sacar 500 (erro esperado) ---");
conta.sacar(500);     // erro, não notifica
