import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.component.html',
  styleUrls: ['./lampada.component.css']
})
export class LampadaComponent implements OnInit {
  lampada: string;
  isLigada: boolean;

  constructor() { }

  ngOnInit(): void {
    this.lampada = 'assets/desligada.jpg';
    this.isLigada = true;
  }

  ligaDesliga() {
    if (this.isLigada === true) {
      this.lampada = 'assets/desligada.jpg';
      this.isLigada = false;
    } else {
      this.lampada = 'assets/ligada.jpg';
      this.isLigada = true;
    }
  }
}


//*********************************************OUTRO METODO*************************************************/

  // var atual_state = 'DESLIGADA';
  // function mudaEstado() {
  //   atual_state === 'DESLIGADA' ? atual_state = 'LIGADA' : atual_state = 'DESLIGADA';
  //   return atual_state;
  // }
  // function ligaDesliga() {
  //   if (atual_state === 'DESLIGADA')
  //     (<HTMLImageElement>document.getElementById("lampada")).src = 'assets/ligada.jpg';
  //   else
  //     (<HTMLImageElement>document.getElementById("lampada")).src = 'assets/desligada.jpg';
  //   mudaEstado();
  // }
  // (<HTMLImageElement>document.getElementById("lampada")).addEventListener("click", ligaDesliga);