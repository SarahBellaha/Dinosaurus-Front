import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly http: HttpClient = inject(HttpClient);

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  url: string = '/api/login';

  public logUser(userEmail: string, userPassword: string): Observable<User> {
    const body = {
      email: userEmail,
      password: userPassword,
    };

    return this.http.post<User>(this.url, body);
  }
}
