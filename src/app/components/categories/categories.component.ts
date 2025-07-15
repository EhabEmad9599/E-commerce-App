import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {


  categoriesList: Category[] = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe({
      next: (response) => {
        this.categoriesList = response.data
        console.log(response);
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

}
