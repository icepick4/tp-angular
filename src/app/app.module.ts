import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/update/:id', component: UpdateUserComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SingleUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
