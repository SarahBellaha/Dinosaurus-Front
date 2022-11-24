import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../Interfaces/Transaction';
import { User } from '../Interfaces/User';
import { UserClass } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private usersUrl = "http://localhost:8080/users";


  getUserDetail(id: number): Observable<User>{

    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  getRequests(id: number): Observable<Transaction[]>{

    return this.http.get<Transaction[]>(`${this.usersUrl}/requests/${id}`);
  }

  getReservations(id: number): Observable<Transaction[]>{

    return this.http.get<Transaction[]>(`${this.usersUrl}/reservations/${id}`);
  }

  
  // ---- Ajout transaction à la réservation du jouet ---- 

  addTransaction(takerId: number, toyId: number, ownerId: number): Observable<Transaction>{

    return this.http.post<Transaction>(`${this.usersUrl}/${takerId}/${toyId}/transactions`, {toyOwnerId: ownerId});
  }

  public save(user: UserClass) {
    return this.http.post<UserClass>(this.usersUrl, user);
  }


}
