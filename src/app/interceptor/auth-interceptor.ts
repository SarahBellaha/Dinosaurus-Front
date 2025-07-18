import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    loginService: LoginService = inject(LoginService);

    private base64Encode(str: string): string {
        return window.btoa(encodeURIComponent(str));
    }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = this.loginService.getData('userEmail') ?? 'test';
    const password = this.loginService.getData('userPassword') ?? 'password';

    const credentials = this.base64Encode(`${username}:${password}`);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Basic ${credentials}`)
    });

    return next.handle(authReq);
  }
}