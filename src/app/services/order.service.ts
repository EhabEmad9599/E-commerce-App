import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }


  checkoutSession(form: any, cardId:string):Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}v1/orders/checkout-session/${cardId}?url=http://localhost:4200`, 
      {shippingAddress: form}
    )
  }

  cashOrder(form: any, cardId:string):Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}v1/orders/${cardId}`, 
      {shippingAddress: form}
    )
  }
}
