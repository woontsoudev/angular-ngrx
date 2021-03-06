import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { HttpErrorHandler } from '../services/http-error-handler.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private httpError: HttpErrorHandler) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        this.httpError.handleError(error);
        return throwError(error);
      })
    );
  }
}
