import {Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CotizadorService } from 'src/app/services/cotizadorService';
import { DialogPresupuesto } from './dialogPresupuesto';


@Component({
    selector: 'dialog-Surtir',
    templateUrl: 'dialogSurtir.html',
    styleUrls: ['dialogSurtir.component.scss']
})

export class DialogSurtir {
  constructor( public cotizadorService: CotizadorService, public dialog: MatDialog) { }

  abrirModalPresupuesto(){
    const dialogRef = this.dialog.open(DialogPresupuesto);
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  
}
