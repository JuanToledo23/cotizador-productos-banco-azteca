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

  ngAfterViewInit(): void {
    document.getElementsByClassName('mat-tab-header-pagination-before')[0].remove();
    document.getElementsByClassName('mat-tab-header-pagination-after')[0].remove();
  }

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

  varBtnCheck = false;

  showResultadosEtiquetas(){
    this.varDescripcion = true;
  }

  checkEvaluacion (articuloEtiqueta){
    this.varBtnCheck = false;
    articuloEtiqueta.check = !articuloEtiqueta.check;

    this.articulosEtiquetas.forEach(element => {
      if (element.check){
        this.varBtnCheck = true;
      }
    })
  }

  agregarAnadidos(){

    this.articulosEtiquetas.forEach(element => {
      console.log(element);
      if (element.check === true){

        this.articulosAnadidos.push(element);
      }
    });
    this.verificaAnadidos();
  }
  varAnadidos  = false

  delete(i){
    this.articulosAnadidos.splice(i,1);
    this.verificaAnadidos();
  }

  verificaAnadidos (){
    console.log(this.articulosAnadidos.length);
    if(this.articulosAnadidos.length === 0){
      this.varAnadidos = false;
    } else {
      this.varAnadidos = true;
    }
  }


}