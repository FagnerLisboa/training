import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit {
  public saldo!: number;
  public saque!: number;
  public deposito!: string;
  public valor!: string;
  sair!: string;

  constructor() { }

  ngOnInit(): void {

  }

  consultarSaldo({ saldo }: { saldo: 0.00; }) {
    
    this.valor = (` saldo atual é de R$${0.00}`);
    
    }

  realizarDeposito(){
    this.saldo += parseFloat(this.deposito);
    alert('Deposito realizado com sucesso!');
    return this.saldo;
  }

  realizarSaque(){
    let saque = this.realizarSaque;
    this.saque = parseFloat(`saque`);

    if (this.saque > this.saldo) {
      alert('Não é possível realizar o saque');
      return this.saldo;
    }
    
    this.saldo -= this.saque;
    alert('Saque realizado com sucesso!');
    return this.saldo;
  }

  onClickSaldo(){
    console.log(this.consultarSaldo);
    console.log(this.realizarDeposito);
    console.log(this.realizarSaque);
    
    
    

  }
 
}
