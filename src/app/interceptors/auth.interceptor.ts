import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let token =  localStorage.getItem('applicationToken');
  if(token != null) {
    let cloneRequest = req.clone({
    headers: req.headers.set("token", token)
  })
  return next(cloneRequest)
  }
  
  return next(req);
};
