import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Migracion-Canales-Terceros';
  opened: boolean;
  rutaPosicion = 'Cotización';
  rutaActivada = true;

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
