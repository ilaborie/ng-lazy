import {ActionReducer, combineReducers} from '@ngrx/store';
import {routerReducer, RouterState} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import {compose} from '@ngrx/core/compose';
import {createSelector} from 'reselect';
import {environment} from '../environments/environment';
import {AuthenticationState} from './user.model';
import {authenticationReducer} from './mod-a/mod-a.reducer';

export interface State {
  authentication: AuthenticationState;
  router: RouterState;
}

export function buildReducers(addOn: { [index: string]: ActionReducer<any> } = {}) {
  const reducers = Object.assign({
    authentication: authenticationReducer,
    router: routerReducer
  }, addOn);

  const productionReducer: ActionReducer<State> = combineReducers(reducers);
  const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

  return function reducer(state: any, action: any) {
    if (environment.production) {
      return productionReducer(state, action);
    } else {
      return developmentReducer(state, action);
    }
  }
}
export function reducer(state: any, action: any) {
  return buildReducers()(state, action);
}

export const getAuthenticationState = (state: State) => state.authentication;
export const getUser = createSelector(getAuthenticationState, authState => authState ? authState.user : null);

