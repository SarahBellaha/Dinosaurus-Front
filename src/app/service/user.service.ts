import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  private readonly usersUrl = '/api/users';
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  getUserDetail(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  getRequests(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.usersUrl}/requests/${id}`);
  }

  getReservations(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.usersUrl}/reservations/${id}`);
  }

  // ---- Ajout transaction à la réservation du jouet ----

  addTransaction(
    takerId: number,
    toyId: number,
    ownerId: number
  ): Observable<Transaction> {
    return this.http.post<Transaction>(
      `${this.usersUrl}/${takerId}/${toyId}/transactions`,
      { toyOwnerId: ownerId }
    );
  }

  removeTransaction(id: number) {
    console.log(id, 'transaction');
    return this.http.delete<Transaction>(
      `http://localhost:8080/transactions/${id}`
    );
  }
  
}
