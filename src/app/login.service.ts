import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from './classes/user';
import { User } from './Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public saveData(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public getData(key: string){
    return localStorage.getItem(key);
  }

  public removeData(key: string){
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  url: string = 'http://localhost:8080/login';

  public logUser(userEmail: string, userPassword: string): Observable<User>{
    const body = {
      email: userEmail,
      password: userPassword
    }

    return this.http.post<User>(this.url, body);
  }

}
