import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../interfaces/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  brandsList: Brand[] = [];

  constructor(private ProductService:ProductService ){}

  ngOnInit(): void {
    this.ProductService.getAllBrands().subscribe({
      next: (response) => {
        console.log(response);
        
        this.brandsList = response.data
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }
}
