import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService){}

  productsList: any[] = [];

  ngOnInit(): void {
        // call products from API
    this.productService.getAllProduct().subscribe({
      next:(response: any) => {
        this.productsList = response.data
      },
      error:(error) => {
        console.log(error);
        
      }
    })
  }

}
