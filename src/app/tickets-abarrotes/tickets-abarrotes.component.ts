import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogHuella } from './dialogs/dialogHuella';

@Component({
  selector: 'app-tickets-abarrotes',
  templateUrl: './tickets-abarrotes.component.html',
  styleUrls: ['./tickets-abarrotes.component.scss']

})
export class TicketsAbarrotesComponent implements OnInit {
  busquedaAbarrotes=true;
  resultadosCliente= false;
  showResultados(){
    this.resultadosCliente=true;
    this.busquedaAbarrotes=false;
  }
  volverBuscar(){
    this.resultadosCliente=false;
    this.busquedaAbarrotes=true;
  }
  detallesClienteUnico=false;
  showDetallesCliente(){
    this.detallesClienteUnico=true;
    this.resultadosCliente=false;
    this.busquedaAbarrotes=false;
  }
  buscarOtroCliente(){
    this.detallesClienteUnico=false;
    this.resultadosCliente=false;
    this.busquedaAbarrotes=true;
  }

  abrirModalHuella(){
    const dialogRef = this.dialog.open(DialogHuella);

    dialogRef.afterClosed().subscribe(() => {
      
    });
  }
   

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    document.getElementsByClassName('mat-tab-header-pagination-before')[0].remove();
    document.getElementsByClassName('mat-tab-header-pagination-after')[0].remove();
  }

}
