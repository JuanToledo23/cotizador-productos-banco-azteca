import { Component, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { MatSidenav } from '@angular/material/sidenav';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  title = 'Migracion-Canales-Terceros';
  opened: boolean;
  rutaPosicion = 'Cotización';
  rutaActivada = true;

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

  kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * +((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
  }

  close() {
    this.sidenav.close();
    console.log(this.kFormatter(10000));
  }

  validaRuta(e) {
    if (e === 0) {
      this.rutaPosicion = '';
      this.rutaActivada = false;
    } else {
      this.rutaPosicion = e.target.innerText;
      this.rutaActivada = true;
    }
  }
}
