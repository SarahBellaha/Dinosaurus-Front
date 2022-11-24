import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toy } from '../Interfaces/Toy';
import { Transaction } from '../Interfaces/Transaction';
import { ToyClass } from '../classes/toy';

@Injectable({
  providedIn: 'root'
})
export class ToysServiceService {

  constructor(private http: HttpClient) {}

  private dinoUrl = "http://localhost:8080/toys";
  private usersUrl = "http://localhost:8080/users";

  getToys(): Observable<Toy[]>{

    return this.http.get<Toy[]>(this.dinoUrl);
  }

  getUserToys(id: number): Observable<Toy[]>{

    return this.http.get<Toy[]>(`${this.usersUrl}/toys/${id}`);
  }

  getToyDetail(id: number): Observable<Toy>{

    return this.http.get<Toy>(`${this.dinoUrl}/${id}`);
  }

  updateToyAvailability(id: number): Observable<Toy>{

    return this.http.put<Toy>(`${this.dinoUrl}/${id}`, {});
  }


  public saveToy(toy: ToyClass, id: number) {
    return this.http.post<ToyClass>(`${this.usersUrl}/${id}/toys`, toy);
  }
}
