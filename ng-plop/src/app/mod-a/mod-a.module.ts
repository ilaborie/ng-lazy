import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModARoutingModule } from './mod-a-routing.module';
import { PageAComponent } from './page-a/page-a.component';

@NgModule({
  imports: [
    CommonModule,
    ModARoutingModule
  ],
  declarations: [PageAComponent]
})
export class ModAModule { }