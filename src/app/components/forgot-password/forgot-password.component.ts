import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
    isLoading:boolean = false;
    responseErrorMessage: string = "";

    constructor(private authService:AuthService, private router: Router){}

    forgotPasswordObj:FormGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email] )

    })

    handleForgotPassword() {
      if(this.forgotPasswordObj.valid) {
        this.isLoading = true;
        this.authService.forgotPassword(this.forgotPasswordObj.value).subscribe({
          next:(response) => {
            this.isLoading = false;
            this.router.navigate(['/verifyPassword'])
          },
          error:(error) => {
            this.isLoading = false;
            this.responseErrorMessage = error.error.message;
          }
        })
      }
      
    }

}
