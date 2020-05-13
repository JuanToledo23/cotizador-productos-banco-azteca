import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogHuella } from '../tickets-abarrotes/dialogs/dialogHuella';

@Component({
  selector: 'app-surtimiento',
  templateUrl: './surtimiento.component.html',
  styleUrls: ['./surtimiento.component.scss']
})
export class SurtimientoComponent implements OnInit {
  productos = [
    {sku: 83789326, descripcion: "M00A3001 / MUEBLE QUALLY GRUPO", precio: "$11,299", cantidad: "1", descuentos: "0", especial: "0", subtotal: "$11,299"},
    {sku: 34567888, descripcion: "Seguro Vidamax", precio: "$800", cantidad: "1", descuentos: "0", especial: "0", subtotal: "$800"},
  ];

  abrirModalHuella(){
    const dialogRef = this.dialog.open(DialogHuella);

    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

  constructor(public dialog: MatDialog) { }
  delete(i){
    this.productos.splice(i,1);
  }

  ngOnInit() {
  }

}
