import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor (private signupService:SignupService,private router: Router){

  }
  signupForm = new FormGroup({
    full_names: new FormControl(''),
    phone_nos: new FormControl(''),
    emails: new FormControl(''),
    addresss: new FormControl(''),
    passwords: new FormControl(''),
  });
  login:Login=new Login();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginUser(){
    if (this.signupForm.valid) {
    console.log(this.login);
    this.signupService.registerSignup(this.login).subscribe(data=>{
      this.router.navigate(['/login'])
     window.alert("Signup is succesful");
    },
    error=> window.alert("sorry Signup is not successful")
    );
  }
 }

}
