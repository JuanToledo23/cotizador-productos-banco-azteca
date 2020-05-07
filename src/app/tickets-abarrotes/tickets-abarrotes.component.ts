import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
