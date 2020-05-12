import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { MatDialog } from '@angular/material/dialog';
import { DialogSurtir } from './dialogs/dialogosSurtir';

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
  ];

  minValue = 2500;
  maxValue = 10000;
  options: Options = {
    floor: 100,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return String(this.kFormatter(value));
        case LabelType.High:
          return String(this.kFormatter(value));
        case LabelType.Floor:
          return String(this.kFormatter(value));
        default:
          return String(this.kFormatter(value)) + '+';
      }
    },
    getLegend: (value: number): string => {
      console.log(value);
      if (value === 100) {
        return '<b>JUAN</b>';
      }
      return '';
    }
  };

  constructor(public dialog: MatDialog) { }
  ngOnInit() {}

  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * +((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
  }

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

  abrirModalSurtir(){
    const dialogRef = this.dialog.open(DialogSurtir);
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }
}
