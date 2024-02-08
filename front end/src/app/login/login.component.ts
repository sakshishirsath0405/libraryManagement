import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  faLock = faLock;
    constructor(private loginservice:LoginService,private router: Router){
  }
  // creating an object for login class 
//   login:Login=new Login();

//   loginForm = new FormGroup({
//     email: new FormControl(''),
//     password: new FormControl(''),
//   });
//   //calling login service as constructor parameter
//   constructor(private loginservice:LoginService,private router: Router){
//   }
//   ngOnInit():void{  if (this.loginservice.isLoggedIn()) {
//     this.router.navigate(['admin']);
//   }}

//   // user defined method to provide alert msg after submitting input 
//   loginUser(){
//     this.router.navigate(['/admin']);
//     if (this.loginForm.valid) {
//      console.log(this.login);
//      this.loginservice.registerLogin(this.login).subscribe(data=>{
//       this.router.navigate(['/admin']);
//       window.alert("login is succesful");
//      },
//      error=> window.alert("sorry login is not successful")
//      );
//   }
// }


login:Login=new Login();

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
loginUser(){
  console.log(this.login);
  this.loginservice.registerLogin(this.login).subscribe(data=>{
    this.router.navigate(['/admin'])
   window.alert("Login is succesful");
  },
  error=> window.alert("sorry Login is not successful")
  );
}

}

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginComponent implements OnInit {
//   login:Login=new Login();
//   credentials={
//     userName:'',
//     password:''
//   }
//   constructor(private loginService : LoginService , private router : Router) { }

//   ngOnInit(): void {
//   }

//   loginUser(){
//     console.log(this.login);
//     this.loginService.registerLogin(this.login).subscribe(data=>{
//      window.alert("login is succesful");
//     },
//     error=> window.alert("sorry login is not successful")
//     );
//  }
//   onSubmit()
//   {
//     if(this.credentials.userName!='' && this.credentials.password!='')
//     {
//       console.log("login details submitted");

//       // this.loginService.doLogin(this.credentials).subscribe(
//       //   (response:any)=>{
//       //     console.log(response);
//       //     this.loginService.loginUser(response.token,this.credentials);
//       //     console.log(response.token+" fg "+this.credentials);
//       //     window.location.href="/pensionCalculation";
//       //   },
//       //   error=>{
//       //     Swal.fire('Invalid!','Wrong garima sername or password','error');     
//       //   }
        
        
//     //  )
    

//     }else{
//       console.log("empty fields");
//     }
//   }

// }
