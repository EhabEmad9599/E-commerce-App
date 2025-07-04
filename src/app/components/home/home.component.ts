import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ProductService } from '../../services/product.service';

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

    this.productService.getAllProduct().subscribe({
      next: (response) => {console.log(response);
      },
      error: (error) => {console.log(error);
      }
    })
    
  }
}
