import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {LoginComponent} from './users/login/login.component';
import {RegisterComponent} from './users/register/register.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {
    path: 'register', component: UsersComponent,
    children: [{ path: '', component: RegisterComponent }]
  },
  {
    path: 'login', component: UsersComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: 'user-profile', component: UserProfileComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
