import { WishlistService } from './../../services/wishlist.service';
import { CartService } from './../../services/cart.service';
import { CartComponent } from './../cart/cart.component';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input({ required: true }) product!: Product; // Receives a single product object from the parent component
  wishlistProducts: string[] = []; // Stores the IDs of products in the wishlist

  constructor(
    private cartService: CartService, // Injects CartService for cart-related operations
    private wishlistService: WishlistService // Injects WishlistService for wishlist-related operations
  ) {}

  ngOnInit(): void {
    // Subscribes to the observable of wishlist product IDs and updates the local array
    this.wishlistService.wishlistProductsId.subscribe((idList) => {
      this.wishlistProducts = idList;
    });
  }

  // Adds the selected product to the shopping cart
  addToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (response) => {
        // console.log(response);
        // Updates the number of items in the cart after successful addition
        this.cartService.numberOfCartItem.next(response.numOfCartItems);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Adds the selected product to the wishlist
  addProductToWishlist(id: string) {
    this.wishlistService.addProductToWishlist(id).subscribe({
      next: (response) => {
        console.log(response);
        // Updates the number of items in the wishlist
        this.wishlistService.numberOfWishlistItem.next(response.data.length);
        // Updates the list of product IDs in the wishlist
        this.wishlistService.wishlistProductsId.next(response.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Checks if a product is already in the wishlist
  isWishListProduct(id: string) {
    return this.wishlistProducts.includes(id);
  }
}
