import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'https://657c5063853beeefdb992c14.mockapi.io/api/users';
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  public getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + '/' + id);
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + '/' + user.id, user);
  }

  public deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(this.baseUrl + '/' + id);
  }
}
