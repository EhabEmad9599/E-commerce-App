import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  isLoading:boolean = false;
  responseErrorMessage: string = '';

  constructor(private authService:AuthService, private router:Router){}

  resetPasswordForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    newPassword: new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/)
    ]),
  })

  handleRestPassword() {
    if(this.resetPasswordForm.valid) {
      this.isLoading = true;
      this.authService.restPassword(this.resetPasswordForm.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.router.navigate(["/login"])
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.responseErrorMessage = error.error.message;
        }
      })
    }
  }

}
