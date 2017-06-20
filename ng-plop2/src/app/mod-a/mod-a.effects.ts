import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import {LOGIN, LoginErrorAction, LoginOkAction} from './mod-a.actions';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(LOGIN)
    .map(toPayload)
    .debounceTime(300) // Simulate a long http request
    .map(user => new LoginOkAction(user))
    .catch(err => of(new LoginErrorAction(err as Error)));

  constructor(private actions$: Actions) {
  }
}
