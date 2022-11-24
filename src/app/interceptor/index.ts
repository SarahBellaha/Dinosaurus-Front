import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "./auth-interceptor";

export const httpInterceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
];