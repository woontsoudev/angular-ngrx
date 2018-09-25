import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
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
    this.layoutStore.dispatch(new LayoutActions.ToggleLoader());

    return next.handle(req).pipe(
      finalize(() => {
        this.layoutStore.dispatch(new LayoutActions.ToggleLoader());
      })
    );
  }
}
