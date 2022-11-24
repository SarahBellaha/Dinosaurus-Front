import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';
import { UserClass } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private usersUrl = 'http://localhost:8080/users';

  //getUserDetail(id: number, username: string, password: string): Observable<User>{
  getUserDetail(id: number): Observable<User> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(`Steve:motdepasse`));
    // headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

    const httpOptions = {
      headers: headers,
    };

    return this.http.get<User>(`${this.usersUrl}/${id}`, httpOptions);
  }

  getRequests(id: number): Observable<Transaction[]> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(`Steve:motdepasse`));

    const httpOptions = {
      headers: headers,
    };

    return this.http.get<Transaction[]>(
      `${this.usersUrl}/requests/${id}`,
      httpOptions
    );
  }

  getReservations(id: number): Observable<Transaction[]> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(`Steve:motdepasse`));

    const httpOptions = {
      headers: headers,
    };

    return this.http.get<Transaction[]>(
      `${this.usersUrl}/reservations/${id}`,
      httpOptions
    );
  }

  // ---- Ajout transaction à la réservation du jouet ----

  addTransaction(
    takerId: number,
    toyId: number,
    ownerId: number
  ): Observable<Transaction> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('Steve:motdepasse'));

    const httpOptions = {
      headers: headers,
    };

    return this.http.post<Transaction>(
      `${this.usersUrl}/${takerId}/${toyId}/transactions`,
      { toyOwnerId: ownerId },
      httpOptions
    );
  }

  public save(user: UserClass) {
    return this.http.post<UserClass>(this.usersUrl, user);
  }
}
