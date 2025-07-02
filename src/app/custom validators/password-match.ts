import { AbstractControl, ValidationErrors } from "@angular/forms";


export function passwordMatch(signUpForm: AbstractControl): null | ValidationErrors {
  let password = signUpForm.value.password;
  let rePassword = signUpForm.value.rePassword;

    if (password == rePassword) {
    return null
  }
  
  return {passwordMisMatch: true};
}
