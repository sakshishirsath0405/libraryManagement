import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8080/api/login';
   // HttpClient package is imported and send request and to get response
 
  constructor(private httpClient:HttpClient ,private router:Router) { }

  //method named as registerlogin is created and its takes class object as a parameter
  registerLogin(login:Login):Observable<Object>{
    //to display email and password in console
   console.log(login);
   if (login.email === 'gari@gmail.com' && login.password === '123456') {
    this.setToken('abcdefghijklmnopqrstuvwxyz');
   }
   // to transfer the input to bsckend with the help of post
   return this.httpClient.post(`${this.baseUrl}`,login);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}