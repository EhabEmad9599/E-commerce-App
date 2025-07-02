import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../interfaces/register-request';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('applicationToken')? true : false);

  
  constructor(private httpClient:HttpClient, private router: Router) { }

  signUp(registerObj: RegisterRequest): Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", registerObj )
  }

  login(loginObj: LoginRequest): Observable<any>{
    console.log(loginObj);
    
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", loginObj )
  }

  // Logout function
  logOut() {
    // remove token from local storge
    localStorage.removeItem('applicationToken');
    this.isLoggedIn.next(false);
    this.router.navigate(["/login"]) // navigate to login page
  }

  resetPassword(form:any): Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", form )
  }

  verifyResetPasswordCode(form:any): Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", form)
  }


  
}
