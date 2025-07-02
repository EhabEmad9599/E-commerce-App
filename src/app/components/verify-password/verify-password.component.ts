import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrl: './verify-password.component.css'
})
export class VerifyPasswordComponent {

  responseErrorMessage = "";
  isLoading = false;
  
  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl("", Validators.required)
  })

  constructor(private authService:AuthService, private router:Router){};


  handleVerifyCode() {
    if(this.verifyCodeForm.valid) {
      this.isLoading = true;
      this.authService.verifyResetPasswordCode(this.verifyCodeForm.value).subscribe({
        next:(response) => {
          console.log(response);
          this.router.navigate(['/restPassword'])
        },
        error: (error) => {
          this.isLoading = false;
          this.responseErrorMessage = error.error.message;
        }
      })
    }

  }
}
