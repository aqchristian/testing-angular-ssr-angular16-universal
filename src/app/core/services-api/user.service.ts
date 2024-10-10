import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers(
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[];
        }
  ): Observable<Array<UserInterface>> {
    return this.http.get<Array<UserInterface>>(
      'https://jsonplaceholder.typicode.com/users',
      {
        params,
      }
    );
  }
}
