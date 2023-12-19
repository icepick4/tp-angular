import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: HomeComponent },
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
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
        HomeButtonComponent,
        TitleComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatIconModule,
        MatSortModule,
        MatButtonModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatTableModule,
        HttpClientModule,
    ]
})
export class AppModule {}
