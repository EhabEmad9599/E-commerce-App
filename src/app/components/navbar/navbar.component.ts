import { WishlistService } from './../../services/wishlist.service';
import { CartService } from './../../services/cart.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedInUser: boolean = false;
  userName: string | null = null;  // Holds the current user's name
  numberOfCartItem:number = 0  // Stores total items in the cart
  numberOfWishlistItem:number = 0  // Stores total items in the wishlist

  constructor(private authService:AuthService, private cartService:CartService, private wishlistService:WishlistService){}

  ngOnInit(): void {

    // Subscribe to cart items count updates
    this.cartService.numberOfCartItem.subscribe({
      next:(value) => {
        this.numberOfCartItem = value; // Update cart item count
      }
    })

    // Subscribe to wishlist items count updates
    this.wishlistService.numberOfWishlistItem.subscribe({
      next: (value) => {
        this.numberOfWishlistItem = value // Update wishlist item count
      }
    })

    // Fetch the latest cart and wishlist counts from the server
    this.cartService.getUpdatedCartItemsNumber();
    this.wishlistService.getUpdatedWishlisttemsNumber();


    
    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isLoggedInUser = value;
      }
    });
    this.authService.currentUserNameSubject.subscribe({
      next:(value) => {
        this.userName = value;
      }
    })
  }

  logoutUser() {
    this.authService.logOut()
  }
}
