import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {
  selected = 'option1';
  ocultar = false;
  ocultar2 = false;
  elementosAgregados = [];

  productos = [
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 98560934, descripcion: "MUEBLE QUALLY GRUPO  \"LUNE\"", precio: "$3948"},
    {sku: 83789326, descripcion: "M00A3001 / MUEBLE QUALLY GRUPO", precio: "$3509"},
    {sku: 34567888, descripcion: "MUEBLE QUALLY GRUPO  \"A\"", precio: "$9876"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 98560934, descripcion: "MUEBLE QUALLY GRUPO  \"LUNE\"", precio: "$3948"},
    {sku: 83789326, descripcion: "M00A3001 / MUEBLE QUALLY GRUPO", precio: "$3509"},
    {sku: 34567888, descripcion: "MUEBLE QUALLY GRUPO  \"A\"", precio: "$9876"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 98560934, descripcion: "MUEBLE QUALLY GRUPO  \"LUNE\"", precio: "$3948"},
    {sku: 83789326, descripcion: "M00A3001 / MUEBLE QUALLY GRUPO", precio: "$3509"},
    {sku: 34567888, descripcion: "MUEBLE QUALLY GRUPO  \"A\"", precio: "$9876"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"},
    {sku: 98560934, descripcion: "MUEBLE QUALLY GRUPO  \"LUNE\"", precio: "$3948"},
    {sku: 83789326, descripcion: "M00A3001 / MUEBLE QUALLY GRUPO", precio: "$3509"},
    {sku: 34567888, descripcion: "MUEBLE QUALLY GRUPO  \"A\"", precio: "$9876"},
    {sku: 83990286, descripcion: "MUEBLE QUALLY GRUPO  \"D\"", precio: "$9120"}
  ]

  constructor() { }
  ngOnInit() {}

  agregarProducto(producto:any){
    this.elementosAgregados.push(producto);
    this.ocultar2 = true;
  }

  eliminarFila(e) {
    this.elementosAgregados.splice(this.elementosAgregados.indexOf(e), 1);
  }

  buscar(e){
    if(e.charCode === 13)
    {
      this.ocultar = true;
    }
  }
}
