
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = localStorage.getItem('token');

    // Cach 1
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    // });

    // Cach 2
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer authToken` }
    })

    return next.handle(authReq);
  }

}



