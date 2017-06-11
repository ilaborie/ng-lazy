import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/authentication.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../core/user.model';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {
  user$: Observable<User>;

  constructor(private authenticationService: AuthenticationService) {
    this.user$ = authenticationService.user$;
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }

}
