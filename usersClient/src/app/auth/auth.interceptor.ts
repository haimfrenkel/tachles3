import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Context } from 'ag-grid-community';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/login', )) {
      return next.handle(request);
   }
   if (request.url.includes('/data.gov.il', )) {
    return next.handle(request);
 }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`,
      }
    });    
    return next.handle(request);
  }
}