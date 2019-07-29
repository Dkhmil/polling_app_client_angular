import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {logger} from "codelyzer/util/logger";
 
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let accessToken = localStorage.getItem('accessToken');
        if (accessToken != null) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }
 
        return next.handle(request);
    }
}
