import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelacion-despues-entrega',
  templateUrl: './cancelacion-despues-entrega.component.html',
  styleUrls: ['./cancelacion-despues-entrega.component.scss']
})
export class CancelacionDespuesEntregaComponent implements OnInit {
  busquedaCancelacion=true;
  resultadosCancelacion= false;
  showResultados(){
    this.resultadosCancelacion=true;
    this.busquedaCancelacion=false;
  }
  volverBuscar(){
    this.resultadosCancelacion=false;
    this.busquedaCancelacion=true;
  }
  detallesClienteCancelacion=false;
  showDetallesCliente(){
    this.detallesClienteCancelacion=true;
    this.resultadosCancelacion=false;
    this.busquedaCancelacion=false;
  }
  buscarOtroCliente(){
    this.detallesClienteCancelacion=false;
    this.resultadosCancelacion=false;
    this.busquedaCancelacion=true;
  }

  constructor() { }

  ngOnInit() {
  }

}
