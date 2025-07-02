import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { passwordMatch } from '../../custom validators/password-match';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnDestroy {

  constructor(private authService:AuthService, private router: Router ){};

  isLoading:boolean = false;
  responseErrorMessage: string = "";
  signUpSubscription!: Subscription;

  signUpFormObj:FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/)
    ]),
    rePassword: new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/)
    ]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),

  }, {validators:passwordMatch});

  


  submitSignUpForm() {
    if(this.signUpFormObj.valid) { 

      this.isLoading = true;
      this.signUpSubscription = this.authService.signUp(this.signUpFormObj.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          // navigate to login page
          this.router.navigate(['/login'])
          
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.responseErrorMessage = error.error.message;
        }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.signUpSubscription) {
      this.signUpSubscription.unsubscribe();
    }
  }

}
