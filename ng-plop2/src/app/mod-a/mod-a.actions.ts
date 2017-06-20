import {Action} from '@ngrx/store';
import {User} from '../user.model';


export const LOGIN = '[Authentication] Login';
export const LOGIN_OK = '[Authentication] Login OK';
export const LOGIN_ERROR = '[Authentication] Login ERROR';
export const LOGOUT = '[Authentication] Logout';


/**
 * Login
 */
export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {
  }
}

/**
 * Login OK
 */
export class LoginOkAction implements Action {
  readonly type = LOGIN_OK;

  constructor(public payload: User) {
  }
}

/**
 * Login ERROR
 */
export class LoginErrorAction implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload: Error) {
  }
}
/**
 * Logout
 */
export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor(public payload = {}) {
  }
}


/**
 * Actions
 */
export type Actions = LoginAction
  | LoginOkAction
  | LoginErrorAction
  | LogoutAction;
