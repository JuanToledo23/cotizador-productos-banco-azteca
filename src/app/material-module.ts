import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    MatSliderModule,
    MatTableModule
  ]
})
export class MaterialModule { }
