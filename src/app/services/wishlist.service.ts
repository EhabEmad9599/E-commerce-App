import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  numberOfWishlistItem = new BehaviorSubject<number>(0);
  wishlistProductsId = new BehaviorSubject<string[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getLoggedUserWishlist().subscribe({
      next: (response) => {
        console.log(response);
        // this.wishlistProducts = response.data;
        const productIds = (response.data as Product[]).map(product => product._id);
        this.wishlistProductsId.next(productIds);

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getLoggedUserWishlist(): Observable<any> {
    return this.httpClient.get(
      'https://ecommerce.routemisr.com/api/v1/wishlist'
    );
  }

  addProductToWishlist(id: string): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/wishlist',
      { productId: id }
    );
  }

  removeWishlistProcut(id: string): Observable<any> {
    return this.httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`
    );
  }

  // Update item number in navbar
  getUpdatedWishlisttemsNumber() {
    this.getLoggedUserWishlist().subscribe({
      next: (respnse) => {
        console.log(respnse.count);

        this.numberOfWishlistItem.next(respnse.count);
      },
    });
  }
}
