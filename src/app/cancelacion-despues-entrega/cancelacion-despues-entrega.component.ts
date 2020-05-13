import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelacion-despues-entrega',
  templateUrl: './cancelacion-despues-entrega.component.html',
  styleUrls: ['./cancelacion-despues-entrega.component.scss']
})
export class CancelacionDespuesEntregaComponent implements OnInit {
  busquedaCancelacion=true;
  resultadosCancelacion= false;

  detallesClienteCancelacion=false;
  verificacionCliente= false;

  selected = 'option1';

  showResultados(){
    this.resultadosCancelacion=true;
    this.busquedaCancelacion=false;
  }
  volverBuscar(){
    this.resultadosCancelacion=false;
    this.busquedaCancelacion=true;
  }
 
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

  filtrar_dato(){
    this.detallesClienteCancelacion = false;
    this.verificacionCliente = true;
  }

  constructor() { }

  ngOnInit() { }
 


  productos = [
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    {pedido: 83990286, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"},
    
  ];

  articulos = [
    {articulo: 2, descripcion: 'amsungTV 21" MCL21N11', fhora:"01/02/2020 13:00:00"}
    
  ];


}

