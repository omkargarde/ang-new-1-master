import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  error:string = null;
  
  loginFlag  = false;

  constructor( private authService: AuthService,private router:Router ){ }

  ngOnInit(): void {
  }

  onSwitchMode () {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
   

    let authObs:Observable<AuthResponseData>;

    if(this.isLoginMode){
      authObs = this.authService.login(email,password);
     
      
      console.log('login');
      
    }
    else{
      authObs = this.authService.signup(email,password);
      console.log('sign up');

    }
    
    authObs.subscribe(resData =>{
      if(resData.registered){
        
        console.log('display redirect');
        this.router.navigate(['/display']);

      }
      console.log(resData);
    },
    errorMessage => {
      this.error = errorMessage;
      console.log(errorMessage);
      
    })

    // if(this.isLoginMode){
    //   this.authService.login(,passworemaild).subscribe(resData =>{
    //     console.log(resData);
    //   },
    //   error => {
    //     this.error = 'sign up failed';
    //     console.log(error);
    //   });
    // }
    // else{
    //   this.authService.signup(email,password).subscribe(resData =>{
    //     console.log(resData);
    //   },
    //   error => {
    //     this.error = 'sign up failed';
    //     console.log(error);
    //   });
    // }

    
    form.reset();
  }

}
