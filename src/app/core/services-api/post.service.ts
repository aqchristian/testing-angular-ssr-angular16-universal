import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post.inteface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  getPosts(
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[];
        }
  ): Observable<Array<PostInterface>> {
    return this.http.get<Array<PostInterface>>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params,
      }
    );
  }
}
