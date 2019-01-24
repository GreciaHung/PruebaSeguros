import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginManager } from '../manager/login-manager.services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        public loginManager: LoginManager,
         private router: Router,
        //  public snackBar: MatSnackBar
         ) {}


         intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${this.loginManager.getToken()}`
              }
            });
        
            return next.handle(request);
          }

    
}
