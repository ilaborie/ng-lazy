import {AuthenticationState} from '../user.model';
import {Actions, LOGIN_ERROR, LOGIN_OK, LoginErrorAction, LoginOkAction, LOGOUT} from './mod-a.actions';

export function authenticationReducer(state: AuthenticationState, action: Actions): AuthenticationState {
  switch (action.type) {
    case LOGIN_OK: {
      const user = (action as LoginOkAction).payload;
      return {...state, user};
    }
    case LOGIN_ERROR: {
      const err = (action as LoginErrorAction).payload;
      console.error('Oops', err);
      return {...state, user: null};
    }
    case LOGOUT : {
      return {...state, user: null};
    }
    default:
      return state;
  }
}
