import { CartResponse } from '../../interfaces/cart-response';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartDetalis: CartResponse | null = null;

  
  constructor(private cartService:CartService){}
  
  ngOnInit(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next:(response) => {
        this.cartDetalis = response;
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  removeCartItem(id:string) {
    this.cartService.removeCartItem(id).subscribe({
      next: (response) => {
        this.cartDetalis =  response;
        this.cartService.numberOfCartItem.next(response.numOfCartItems);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  updateProductQuantity(id:string, count:number) {
    this.cartService.updateCartProductQuantity(id, count).subscribe({
      next: (response) => {
        this.cartDetalis = response;
        this.cartService.numberOfCartItem.next(response.numOfCartItems);
        
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  clearCart() {
    this.cartService.clearShoppingCart().subscribe({
      next:(response) => {
        this.cartService.numberOfCartItem.next(0);
        this.cartDetalis = null;
      },
      error:(error) => {
        console.log(error);
        
      }
    })
  }
}
