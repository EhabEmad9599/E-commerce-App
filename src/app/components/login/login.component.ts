import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    isLoading:boolean = false;
    responseErrorMessage: string = "";

    constructor(private authService: AuthService, private router: Router ){}

    logInFormObj:FormGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/)
      ]),
    });

    submitLogInForm() {
      if(this.logInFormObj.valid) {
        this.authService.login(this.logInFormObj.value).subscribe({
          next: (response) => {
            
            this.isLoading = false;
            localStorage.setItem("applicationToken", JSON.stringify(response.token));
            this.authService.isLoggedIn.next(true);
            this.authService.currentUserNameSubject.next(response.user.name);
            this.router.navigate(['/home'])
          },
          error: (error) => {
            this.isLoading = false;
            this.responseErrorMessage = error.error.message;
          }
        })
      }
    }

}
