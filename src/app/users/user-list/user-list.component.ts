import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'occupation', 'actions'];

  filterValue = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users = new MatTableDataSource<User, MatPaginator>([]);

  constructor(
    private router: Router,
    private userService: UserService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  applyFilter() {
    this.users.filter = this.filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.users.paginator = this.paginator;
    this.users.sort = this.sort;
  }

  ngOnInit(): void {
    this.userService.getUsers();
    this.userService.users.subscribe((data) => {
      //this.users = new MatTableDataSource(data);
      console.log(data);
      this.users.data = data;
    });

    this.users.filterPredicate = function (
      data: User,
      filter: string
    ): boolean {
      return data.email.toLowerCase().includes(filter);
    };
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  showDetails(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  editUser(user: User) {
    console.log(user);
    this.router.navigate(['/update', user.id]);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id);
  }
}
