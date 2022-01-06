import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //////modifying the authorisatins  . .set("Access-Control-Allow-Origin", "*")
    const changedReq = req.clone({
      headers: req.headers
        .set('Access-Control-Allow-Headers', 'Content-Type')
        .set('Access-Control-Allow-Methods', 'POST')
        .set('Authorization', 'Bearer ' + this._auth.getValue('token')),
    });
    return next.handle(changedReq);
  }
}
