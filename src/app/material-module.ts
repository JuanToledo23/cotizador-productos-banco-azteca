import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
