import { CartResponse } from '../../interfaces/cart-response';
import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {

  wishlistProducts: any[] = [];
  

  constructor(private wishlistService:WishlistService){}

  ngOnInit(): void {
    this.wishlistService.getLoggedUserWishlist().subscribe({
      next: (response) => {
        console.log(response);
        this.wishlistProducts = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  addToWishlist() {

  }
}
