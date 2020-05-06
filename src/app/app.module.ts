import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { TicketsAbarrotesComponent } from './tickets-abarrotes/tickets-abarrotes.component';
import { EtiquetadoComponent } from './etiquetado/etiquetado.component';
import { CancelacionDespuesEntregaComponent } from './cancelacion-despues-entrega/cancelacion-despues-entrega.component';
import { SurtimientoComponent } from './surtimiento/surtimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizadorComponent,
    TicketsAbarrotesComponent,
    EtiquetadoComponent,
    CancelacionDespuesEntregaComponent,
    SurtimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
