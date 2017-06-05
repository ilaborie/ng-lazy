import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModCRoutingModule } from './mod-c-routing.module';
import { PageCComponent } from './page-c/page-c.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModCRoutingModule
  ],
  declarations: [PageCComponent]
})
export class ModCModule { }
