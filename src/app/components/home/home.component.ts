import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productsList: any[] = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    let token = localStorage.getItem("applicationToken");
    
    let decodedToken: string | null;
    if(token) {
      decodedToken = jwtDecode(token);
    } else {
      decodedToken = null;
    }
    
    console.log(decodedToken);

    // call products from API
    this.productService.getAllProduct().subscribe({
      next:(response: any) => {
        console.log(response);
        this.productsList = response.data
      },
      error:(error) => {
        console.log(error);
        
      }
    })
    
  }
}
