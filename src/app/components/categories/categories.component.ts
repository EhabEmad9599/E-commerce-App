import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {


  categoriesList: Category[] = [];

  constructor(private productService:ProductService, private categoriesService:CategoriesService){}

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe({
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
