import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumInterface } from '../models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private readonly http: HttpClient) {}

  getAlbums(
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[];
        }
  ): Observable<Array<AlbumInterface>> {
    return this.http.get<Array<AlbumInterface>>(
      'https://jsonplaceholder.typicode.com/albums',
      {
        params,
      }
    );
  }
}
