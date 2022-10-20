import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.component.html',
  styleUrls: ['./lampada.component.css']
})
export class LampadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var atual_state = 'DESLIGADA';

    function mudaEstado() {
      atual_state === 'DESLIGADA' ? atual_state = 'LIGADA' : atual_state = 'DESLIGADA';
      return atual_state;
    }

    function ligaDesliga() {

      if (atual_state === 'DESLIGADA')
        (<HTMLImageElement>document.getElementById("lampada")).src = 'assets/ligada.jpg';
      else
        (<HTMLImageElement>document.getElementById("lampada")).src = 'assets/desligada.jpg';

      mudaEstado();
    }

    (<HTMLImageElement>document.getElementById("lampada")).addEventListener("click", ligaDesliga);



  


  }
  
    
  ligaDesliga(){
    var lampada = 'DESLIGADA';

      if (lampada === 'DESLIGADA'){
        lampada = 'assets/desligada.jpg'
        
      }else {
        lampada = 'assets/ligada.jpg'
      }
      
  }
  

    
    




    

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



  

}
