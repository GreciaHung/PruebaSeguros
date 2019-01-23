import { Injectable} from '@angular/core';
import { HttpRequest,HttpHandler, HttpEvent,HttpInterceptor,HttpErrorResponse} from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { Router} from '@angular/router';
import { catchError} from 'rxjs/internal/operators';
import { MatSnackBar } from '@angular/material';
import { LoginManager } from '../manager/login-manager.services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public loginManager: LoginManager,
         private router: Router,
         public snackBar: MatSnackBar) {}


    /**
     * intercept all XHR request
     * @param request
     * @param next
     * @returns {Observable<A>}
     */
    intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

          const token = this.loginManager.getToken();

          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${ token }`
            }
          });
        /**
         * continues request execution
         */
        return next.handle(request).pipe(catchError((error, caught) => {
            this.handleAuthError(error);
            return of(error);
        }) as any);
    }


    /**
     * manage errors
     * @param err
     * @returns {any}
     */
    private handleAuthError(err: HttpErrorResponse): Observable < any > {
        if (err instanceof HttpErrorResponse && err.status === 401) {
            console.log('handled error ' + err.status);
            this.loginManager.deleteToken();
            this.snackBar.open('Sesión expirada!!! por favor vuelva a ingresar a la plataforma', null, {
                duration: 3000
              });
            this.router.navigate([`/`]);
            return of(err.message);
        }
        throw err;
    }
}
