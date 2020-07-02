import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private host = 'https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.host).pipe(map((response) => response['data']));
  }
}
