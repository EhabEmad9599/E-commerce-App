import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  
  ProductId:string | null = '';
  ProductDetails: Product | null = null;
  
  //Get id valeu
  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService, private cartService:CartService){}

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(params) => {
        this.ProductId = params.get('id');

        if(this.ProductId != null) {
          this.productService.getProductDetails(this.ProductId).subscribe({
            next: (response) => {
              this.ProductDetails = response.data;
              
            }
          })
        }
      }
    })

    // snapshot activatedRoute
    // this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.ProductDetails);
  }

    // Adds the selected product to the shopping cart
  addToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        // Updates the number of items in the cart after successful addition
        this.cartService.numberOfCartItem.next(response.numOfCartItems);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  
}
