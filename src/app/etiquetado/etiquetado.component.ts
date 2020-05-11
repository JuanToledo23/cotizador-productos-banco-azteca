import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etiquetado',
  templateUrl: './etiquetado.component.html',
  styleUrls: ['./etiquetado.component.scss']
})
export class EtiquetadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit(): void {
  //   document.getElementsByClassName('mat-tab-header-pagination-before')[0].remove();
  //   document.getElementsByClassName('mat-tab-header-pagination-after')[0].remove();
  // }

<<<<<<< HEAD
  // articulosEtiquetas = [
  //   {id:1, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
  //   {id:2, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
  //   {id:3, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
  //   {id:4, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
  //   {id:5, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
  //   {id:6, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
  //   {id:7, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"}
  // ]
=======
  articulosEtiquetas = [
    {check:false, id:1, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
    {check:false, id:2, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
    {check:false, id:3, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
    {check:false, id:4, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
    {check:false, id:5, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
    {check:false, id:6, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"},
    {check:false, id:7, sku:"83990286", descripcion: "Refrigerador Acros Acros", codigo:"83990286", precio:"83990286"}
  ]

  articulosAnadidos =  [

  ]

  varDescripcion = false;

  showResultadosEtiquetas(){
    this.varDescripcion = true;
  }

  agregarAnadidos(){
    console.log("HOLA");
    this.articulosEtiquetas.forEach(element => {
      console.log(element);
      if (element.check === true){
        console.log("si");
        this.articulosAnadidos.push(element);
      }
    });
  }


>>>>>>> a3d05103436d98c2a203be0ade991d88abad54b5
}
