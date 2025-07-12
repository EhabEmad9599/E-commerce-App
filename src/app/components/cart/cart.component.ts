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
        console.log(response);
      }, 
      error: (error) => {
        console.log(error);
        
      }
    })
  }
}
