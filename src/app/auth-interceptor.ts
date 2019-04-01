import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { pipe, Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  [x: string]: any;

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.auth.getAuthorizationToken();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next.handle(authReq).pipe(
      catchError(this.handleError),
      )
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
  }

  

