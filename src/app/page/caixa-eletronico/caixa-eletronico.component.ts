import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit {
  valor: number;
  saldo = 50;
  sair: boolean;
  showSaldo: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showSaldo = false; 0
  }
  consultarSaldo() {
    this.showSaldo = true;
  };

  realizarDeposito() {
    this.saldo += this.valor;
  };

  realizarSaque() {
    if (this.saldo = this.saldo) {

      this.saldo -= this.valor

      this.valor <= this.saldo;

      console.log("ok");

    } else {
      this.saldo <= 0;

      console.log("SEM SALDO");
    }
  };
}