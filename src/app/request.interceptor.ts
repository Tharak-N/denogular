import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private credentials: AuthService
  ) {}

  isLoginInstance = (request: HttpRequest<any>) => {
    if(request.url.includes('login')) return true
    return false
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.isLoginInstance(request) && !!this.credentials.getToken() ){
      return next.handle(request.clone({
        setHeaders: {
          Authorization: `Bearer ${ this.credentials.getToken() }`,
        },
      }));
    }
    else {
      return next.handle(request)
    }
  }
}
