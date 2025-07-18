import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  numberOfWishlistItem = new BehaviorSubject<number>(0);

  constructor(private httpClient:HttpClient) { }

    getLoggedUserWishlist():Observable<any> {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist")
  }

  addProductToWishlist(id:string):Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist", {productId:id});
  }

  removeWishlistProcut(id:string):Observable<any> {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }

    // Update item number in navbar
  getUpdatedWishlisttemsNumber() {
    this.getLoggedUserWishlist().subscribe({
      next: (respnse) => {
        console.log(respnse.count);
        
        this.numberOfWishlistItem.next(respnse.count);
      }
    })
  }

}
