import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }
  public findAll(): Observable<User[]> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('Steve:motdepasse'));

    const httpOptions = {
      headers: headers,
    };
    return this.http.get<User[]>(this.usersUrl, httpOptions);
  }

  
}
