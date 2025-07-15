import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  // Adds a product to the cart by product ID
  addProductToCart(id:string):Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart", {productId: id}, 
      )
  }

  getLoggedUserCart():Observable<any> {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart")
  }

  // Removes a specific item from the cart by its ID
  removeCartItem(id:string):Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, )
  }

  // Updates the quantity of a specific product in the cart
  updateCartProductQuantity(id:string, count:number):Observable<any> {
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {count:count}, );
  }

  // Clears all items from the user's cart
  clearShoppingCart():Observable<any> {
    return this.httpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")
  }

}
