import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/authentication.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../core/user.model';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {

  user$: Observable<User>;

  constructor(private authenticationService: AuthenticationService) {
    this.user$ = authenticationService.user$;
  }

  ngOnInit() {
  }

}
