import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModBRoutingModule} from './mod-b-routing.module';
import {PageBComponent} from './page-b/page-b.component';

@NgModule({
  imports: [
    CommonModule,
    ModBRoutingModule
  ],
  declarations: [PageBComponent]
})
export class ModBModule {
}
