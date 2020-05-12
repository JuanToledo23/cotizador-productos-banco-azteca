import {Component} from '@angular/core';
@Component({
    selector: 'dialog-Surtir',
    templateUrl: 'dialogSurtir.html',
})
export class DialogSurtir {
  intento2: boolean = true;
  clickEvent(){
    this.intento2 = false;
    this.numeroIntentos++;      
  }
  numeroIntentos= 1;
}