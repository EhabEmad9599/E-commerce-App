import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../interfaces/register-request';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('applicationToken')? true : false);
  currentUserNameSubject = new BehaviorSubject<string|null>(this.getUserName());

  
  constructor(private httpClient:HttpClient, private router: Router) { }

  signUp(registerObj: RegisterRequest): Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", registerObj )
  }

  login(loginObj: LoginRequest): Observable<any>{
    
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", loginObj )
  }

  // Logout function
  logOut() {
    // remove token from local storge
    localStorage.removeItem('applicationToken');
    this.isLoggedIn.next(false);
    this.currentUserNameSubject.next(null);// Notify subject wuth null value
    this.router.navigate(["/login"]) // navigate to login page
  }

  forgotPassword(form:any): Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", form )
  }

  verifyResetPasswordCode(form:any): Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", form)
  }


  restPassword(form:any): Observable<any> {
    return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", form)
  }

  getUserName() {
    let token = localStorage.getItem("applicationToken");
    if(token) {
      let decodedToken:any = jwtDecode(token);
      return decodedToken.name;
    } else {
      return null
    }
  }

  
}
