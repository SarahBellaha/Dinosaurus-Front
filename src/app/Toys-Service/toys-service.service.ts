import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Toy } from '../Interfaces/Toy';

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


  public saveToy(toy: Toy, id: number) {
    return this.http.post<Toy>(`${this.usersUrl}/${id}/toys`, toy);
  }

  removeToy(id: number){
    console.log(id, "transaction")
    return this.http.delete<Toy>(`http://localhost:8080/toys/${id}`);
  }
}
