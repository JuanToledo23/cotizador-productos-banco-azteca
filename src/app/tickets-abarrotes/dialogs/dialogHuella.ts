import {Component} from '@angular/core';
@Component({
    selector: 'dialog-Huella',
    templateUrl: 'dialogHuella.html',
})
export class DialogHuella {
  intento2: boolean = true;
  clickEvent(){
    this.intento2 = false;
    this.numeroIntentos++;      
  }
  numeroIntentos= 1;
}