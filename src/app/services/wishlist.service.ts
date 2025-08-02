import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../environments/environment';

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
      `${environment.baseUrl}api/v1/wishlist`
    );
  }

  addProductToWishlist(id: string): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}api/v1/wishlist`,
      { productId: id }
    );
  }

  removeWishlistProcut(id: string): Observable<any> {
    return this.httpClient.delete(
      `${environment.baseUrl}api/v1/wishlist/${id}`
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
