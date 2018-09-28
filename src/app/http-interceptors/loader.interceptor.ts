import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize, tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as LayoutActions from '../actions/layout.actions';
import * as LayoutReducer from '../reducers/layout.reducer';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private layoutStore: Store<LayoutReducer.State>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: new HttpHeaders({
        Accept: '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });
    this.layoutStore.dispatch(new LayoutActions.ToggleLoader());

    return next.handle(request).pipe(
      finalize(() => {
        this.layoutStore.dispatch(new LayoutActions.ToggleLoader());
      })
    );
  }
}
