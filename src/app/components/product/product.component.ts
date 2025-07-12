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
  constructor(private cartService:CartService){}

  addToCart(id:string) {
    console.log(id);
    
    this.cartService.addProductToCart(id).subscribe({
      next:(response) => {console.log(response)},
      error: (error) => {console.log(error);}
    })
    }
  }

