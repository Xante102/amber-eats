import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = {
    _id: '',
    f_name: '',
    l_name: '',
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register',user);
  }

  login(authCredentials: any) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials);
  }

  setToken(token: string) {
    localStorage.setItem('token', token); 
  }

}
