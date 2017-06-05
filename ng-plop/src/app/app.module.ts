import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ModAModule} from './mod-a/mod-a.module';
import {ModBModule} from './mod-b/mod-b.module';
import {ModCModule} from './mod-c/mod-c.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModAModule,
    ModBModule,
    ModCModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
