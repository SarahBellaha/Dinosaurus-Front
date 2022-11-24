import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toy } from '../Interfaces/Toy';
import { Transaction } from '../Interfaces/Transaction';

@Injectable({
  providedIn: 'root'
})
export class ToysServiceService {

  constructor(private http: HttpClient) {}

  private dinoUrl = "http://localhost:8080/toys";

  getToys(): Observable<Toy[]>{

    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa("Steve:motdepasse"));

    const httpOptions = {
      headers: headers
    }

    return this.http.get<Toy[]>(this.dinoUrl,httpOptions);
  }

  getToyDetail(id: number): Observable<Toy>{

    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa("Steve:motdepasse"));

    const httpOptions = {
      headers: headers
    }

    return this.http.get<Toy>(`${this.dinoUrl}/${id}`,httpOptions);
  }

  updateToyAvailability(id: number): Observable<Toy>{

    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa("Steve:motdepasse"));

    const httpOptions = {
      headers: headers
    }

    return this.http.put<Toy>(`${this.dinoUrl}/${id}`,httpOptions);
  }


  
}
