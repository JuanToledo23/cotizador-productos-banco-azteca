import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDatosGenerales } from './dialogDatosGenerales';
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

  abrirModalDatosGenerales(){
    const dialogRef = this.dialog.open(DialogDatosGenerales);

    dialogRef.afterClosed().subscribe(() => {
      
    });
  }
  constructor(public dialog: MatDialog) { }
}