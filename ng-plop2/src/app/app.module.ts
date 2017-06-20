import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {reducer} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
