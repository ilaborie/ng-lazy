import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModBRoutingModule} from './mod-b-routing.module';
import {PageBComponent} from './page-b/page-b.component';
import {CoreModule} from 'app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ModBRoutingModule
  ],
  declarations: [PageBComponent]
})
export class ModBModule {
}
