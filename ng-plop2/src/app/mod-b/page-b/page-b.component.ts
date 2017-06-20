import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../user.model';
import {Store} from '@ngrx/store';
import {getUser, State} from '../../app.reducer';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<State>) {
    this.user$ = store.select(getUser);
  }

  ngOnInit() {
  }

}
