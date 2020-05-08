import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


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

  close() {
    this.sidenav.close();
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
