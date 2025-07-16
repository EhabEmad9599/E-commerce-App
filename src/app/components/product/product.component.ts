import { WishlistService } from './../../services/wishlist.service';
import { CartService } from './../../services/cart.service';
import { CartComponent } from './../cart/cart.component';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  addedToWishlist: boolean = false;

  constructor(private cartService:CartService, private wishlistService:WishlistService){}

  addToCart(id:string) {
    this.cartService.addProductToCart(id).subscribe({
      next:(response) => {console.log(response)},
      error: (error) => {console.log(error);}
    })
    }

    toggleWishlist(id:string) {
      this.addedToWishlist = !this.addedToWishlist;
    }

    

    //add Product To Wishlist
    addProductToWishlist(id:string) {
      this.wishlistService.addProductToWishlist(id).subscribe({
        next:(response) => {
          console.log(response);
          this.addedToWishlist = true;
          
        },
        error: (error) => {console.log(error);}
      })
    }

    deleteProductFromWishlist(id:string) {
      this.wishlistService.removeWishlistProcut(id).subscribe({
        next: (response) => {
          console.log(response);
          
        },
        error: (error) => {
          console.log(error);
          
        }
      })
    }

  }

