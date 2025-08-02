import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numberOfCartItem = new BehaviorSubject<number>(0)

  constructor(private httpClient:HttpClient) { }

  // Adds a product to the cart by product ID
  addProductToCart(id:string):Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}api/v1/cart`, {productId: id}, 
      )
  }

  getLoggedUserCart():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/cart`)
  }

  // Removes a specific item from the cart by its ID
  removeCartItem(id:string):Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}api/v1/cart/${id}`, )
  }

  // Updates the quantity of a specific product in the cart
  updateCartProductQuantity(id:string, count:number):Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}api/v1/cart/${id}`, {count:count}, );
  }

  // Clears all items from the user's cart
  clearShoppingCart():Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}api/v1/cart`)
  }

  // Update item number in navbar
  getUpdatedCartItemsNumber() {
    this.getLoggedUserCart().subscribe({
      next: (respnse) => {
        this.numberOfCartItem.next(respnse.numOfCartItems);
      }
    })
  }

}
