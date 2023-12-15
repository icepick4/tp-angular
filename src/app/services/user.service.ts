import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = new BehaviorSubject<User[]>([]);
  selectedUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpService) {}

  public getUsers(): void {
    this.http.getUsers().subscribe((data: User[]) => {
      this.users.next(data);
    });
  }

  public selectUser(id: string) {
    const sub = this.http.getUser(id).subscribe((data) => {
      this.selectedUser.next(data);
      sub.unsubscribe();
    });
  }

  public createUser(user: User): void {
    this.http.createUser(user).subscribe((data) => {
      this.getUsers();
    });
  }

  public updateUser(user: User): void {
    this.http.updateUser(user).subscribe((data) => {
      this.getUsers();
    });
  }

  public deleteUser(id: string): void {
    this.http.deleteUser(id).subscribe((data) => {
      this.getUsers();
    });
  }
}
