import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: MatTableDataSource<User>;

  displayedColumns: string[] = ['name', 'email', 'occupation'];

  filterValue = '';

  applyFilter() {
    this.users.filter = this.filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    let users: User[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'zzzz',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        occupation: 'Web Developer',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'aaaa',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        occupation: 'Web Designer',
      },
    ];

    this.users = new MatTableDataSource(users);

    this.users.filterPredicate = function (
      data: User,
      filter: string
    ): boolean {
      return data.email.toLowerCase().includes(filter);
    };
  }
}
