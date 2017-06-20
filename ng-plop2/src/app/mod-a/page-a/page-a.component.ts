import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {User} from '../../user.model';
import {getUser, State} from '../../app.reducer';
import {LoginAction, LogoutAction} from '../mod-a.actions';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<State>) {
    this.user$ = store.select(getUser);
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LoginAction({name: 'Toto'}));
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

}
