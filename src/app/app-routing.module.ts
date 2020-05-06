import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { TicketsAbarrotesComponent } from './tickets-abarrotes/tickets-abarrotes.component';
import { EtiquetadoComponent } from './etiquetado/etiquetado.component';
import { CancelacionDespuesEntregaComponent } from './cancelacion-despues-entrega/cancelacion-despues-entrega.component';
import { SurtimientoComponent } from './surtimiento/surtimiento.component';

const routes: Routes = [
  { path: 'cotizador', component: CotizadorComponent },
  { path: 'ticketsAbarrotes', component: TicketsAbarrotesComponent },
  { path: 'etiquetado', component: EtiquetadoComponent },
  { path: 'cancelacionDespuesEntrega', component: CancelacionDespuesEntregaComponent },
  { path: 'surtimiento', component: SurtimientoComponent },
  { path: '',   redirectTo: '/cotizador', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
