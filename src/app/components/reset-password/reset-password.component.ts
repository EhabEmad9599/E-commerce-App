import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  isLoading:boolean = false;
  responseErrorMessage: string = '';

  verifyCodeForm = new FormGroup({
    
  })

  handleVerifyCode() {

  }

}
