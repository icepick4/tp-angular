import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: MatTableDataSource<User> = new MatTableDataSource<User>();

  displayedColumns: string[] = ['name', 'email', 'occupation', 'actions'];

  filterValue = '';

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private router: Router, private userService: UserService) {}

  applyFilter() {
    this.users.filter = this.filterValue.trim().toLowerCase();
  }

  // @ts-expect-error
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.users.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userService.getUsers();
    this.userService.users.subscribe((data) => {
      //this.users = new MatTableDataSource(data);
      this.users.data = data;
    });

    this.users.filterPredicate = function (
      data: User,
      filter: string
    ): boolean {
      return data.email.toLowerCase().includes(filter);
    };

    this.users.sort = this.sort;
  }

  showDetails(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  editUser(user: User) {
    this.router.navigate(['/update', user.id]);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id);
  }
}
