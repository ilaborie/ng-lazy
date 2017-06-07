import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModBRoutingModule} from './mod-b-routing.module';
import {PageBComponent} from './page-b/page-b.component';
import {SharedModule} from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModBRoutingModule
  ],
  declarations: [PageBComponent]
})
export class ModBModule {
}
