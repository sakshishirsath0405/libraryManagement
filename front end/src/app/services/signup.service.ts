import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = 'http://localhost:8080/api/user';
  // HttpClient package is imported and send request and to get response
 constructor(private httpClient:HttpClient) { }

 //method named as registerlogin is created and its takes class object as a parameter
 registerSignup(login:Login):Observable<Object>{
   //to display email and password in console
  console.log(login);

  // to transfer the input to bsckend with the help of post
  return this.httpClient.post(`${this.baseUrl}`,login);
 }
}
