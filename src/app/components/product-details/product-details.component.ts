import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  
  ProductId:string | null = '';
  ProductDetails: Product | null = null;
  
  //Get id valeu
  constructor(private activatedRoute: ActivatedRoute, private productService:ProductService){}

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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

  
}
