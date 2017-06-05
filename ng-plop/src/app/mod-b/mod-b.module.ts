import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';

import {ModBRoutingModule} from './mod-b-routing.module';
import {PageBComponent} from './page-b/page-b.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    ModBRoutingModule
  ],
  declarations: [PageBComponent]
})
export class ModBModule {
}
