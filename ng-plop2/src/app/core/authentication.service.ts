import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from 'app/core/user.model';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {

  private _user$ = new BehaviorSubject<User>(null);
  get user$(): Observable<User> {
    return this._user$;
  }

  constructor() {
    console.log('Building AuthenticationService');
  }

  login() {
    this._user$.next({name: 'Toto'});
  }

  logout() {
    this._user$.next(null);
  }

}
