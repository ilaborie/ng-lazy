import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

import {ModARoutingModule} from './mod-a-routing.module';
import {AuthenticationEffects} from './mod-a.effects';
import {PageAComponent} from './page-a/page-a.component';
import {Store} from '@ngrx/store';
import {buildReducers, State} from '../app.reducer';
import {authenticationReducer} from './mod-a.reducer';

@NgModule({
  imports: [
    CommonModule,
    ModARoutingModule,
    EffectsModule.run(AuthenticationEffects)
  ],
  declarations: [PageAComponent]
})
export class ModAModule {

  constructor(store: Store<State>) {
    const reducer = buildReducers({authentication: authenticationReducer});
    store.replaceReducer(reducer);
  }
}
