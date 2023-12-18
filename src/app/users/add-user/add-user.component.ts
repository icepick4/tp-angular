import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user!: User;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      name: '',
      email: '',
      occupation: '',
      bio: '',
      id: '',
    };
  }

  addUser() {
    this.userService.createUser(this.user);
  }
}
