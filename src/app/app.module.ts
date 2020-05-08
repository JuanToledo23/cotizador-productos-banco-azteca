import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { TicketsAbarrotesComponent } from './tickets-abarrotes/tickets-abarrotes.component';
import { EtiquetadoComponent } from './etiquetado/etiquetado.component';
import { CancelacionDespuesEntregaComponent } from './cancelacion-despues-entrega/cancelacion-despues-entrega.component';
import { SurtimientoComponent } from './surtimiento/surtimiento.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

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
    MaterialModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    Ng5SliderModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
