import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProduct() {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }
}
