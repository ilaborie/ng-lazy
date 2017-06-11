import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import {PreloadingStrategy, Route} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomPreloader implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      const delay = route.data.delay ? route.data.delay : 0;
      return of(true).delay(delay).flatMap(_ => fn());
    } else {
      return of(null);
    }
  }
}
