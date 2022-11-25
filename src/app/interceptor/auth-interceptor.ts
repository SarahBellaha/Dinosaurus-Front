import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private localStorage: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let base64encodedData = 
        //Buffer.from(`${this.localStorage.getData("userEmail")}:${this.localStorage.getData("userPassword")}`)
        Buffer.from("Steve:motdepasse")
        .toString('base64');

            const headerReq = req.clone({
                headers: req.headers.set("Authorization", `Basic ${base64encodedData}`)
            });
            return next.handle(headerReq);
    }
}