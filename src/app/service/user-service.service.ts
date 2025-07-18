import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private readonly usersUrl: string = '/api/users';

  private readonly http = inject(HttpClient);
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
