import { CartService } from '../../services/cart.service';
import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  wishlistProducts: any[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  // Called when the component initializes; it triggers fetching wishlist data.
  ngOnInit(): void {
    this.getWishlistData();
  }

  // Fetches the wishlist data for the logged-in user from the WishlistService.
  getWishlistData() {
    this.wishlistService.getLoggedUserWishlist().subscribe({
      next: (response) => {
        console.log(response);
        this.wishlistProducts = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Adds a product to the cart using its ID and updates the cart item count.
  addToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this.cartService.numberOfCartItem.next(response.numOfCartItems);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Removes a product from the wishlist using its ID, refreshes the wishlist data, and updates the wishlist item count.
  deleteProductFromWishlist(id: string) {
    this.wishlistService.removeWishlistProcut(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getWishlistData();
        this.wishlistService.numberOfWishlistItem.next(response.data.length);
        this.wishlistService.wishlistProductsId.next(response.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
