import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  // headers:any = {token: localStorage.getItem('applicationToken')};

  addProductToCart(id:string):Observable<any> {
    // console.log(this.headers);
    console.log(id);
    
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart", {productId: id}, 
      )
  }

  getLoggedUserCart():Observable<any> {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart")
  }

  removeCartItem(id:string):Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, )
  }

  updateCartProductQuantity(id:string, count:number):Observable<any> {
    console.log(id);
    
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {count:count}, );
  }

  clearShoppingCart():Observable<any> {
    return this.httpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")
  }

}
