import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Toy } from '../Interfaces/Toy';

@Injectable({
  providedIn: 'root',
})
export class ToysServiceService {
  private readonly http: HttpClient = inject(HttpClient);

  private readonly toyUrl = 'http://localhost:8080/toys';
  private readonly usersUrl = 'http://localhost:8080/users';

  getToys(): Observable<Toy[]> {
    return this.http.get<Toy[]>(this.toyUrl);
  }

  getUserToys(id: number): Observable<Toy[]> {
    return this.http.get<Toy[]>(`${this.usersUrl}/toys/${id}`);
  }

  getToyDetail(id: number): Observable<Toy> {
    return this.http.get<Toy>(`${this.toyUrl}/${id}`);
  }

  updateToyAvailability(id: number): Observable<Toy> {
    return this.http.put<Toy>(`${this.toyUrl}/${id}`, {});
  }

  public saveToy(toy: Toy, id: number) {
    return this.http.post<Toy>(`${this.usersUrl}/${id}/toys`, toy);
  }

  removeToy(id: number) {
    console.log(id, 'transaction');
    return this.http.delete<Toy>(`${this.toyUrl}/${id}`);
  }
}
