import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RinnoInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        request = request.clone({
            headers: request.headers.set("Authorization", "Token 2b6fa9689d2a7fd69608d1d36db04e2cf52cae9c")
        });

        return next.handle(request);
    }
}
