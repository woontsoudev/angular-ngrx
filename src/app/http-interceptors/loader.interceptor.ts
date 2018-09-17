import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize, tap } from 'rxjs/operators';
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
    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          console.log('---> status:', evt.status);
          this.layoutStore.dispatch(new LayoutActions.ToggleLoader());
        }
      }),
      finalize(() => {
        setTimeout(() => {
          this.layoutStore.dispatch(new LayoutActions.ToggleLoader());
        }, 1000);
      })
    );
  }
}
