import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // inject route
  let router = inject(Router);

  if(localStorage.getItem('applicationToken')) {
    return true;
  }
  router.navigate(['/login'])
  return false;
};
