import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProduct() {
    return this.httpClient.get(`${environment.baseUrl}api/v1/products`)
  }

  getProductDetails(id:string | null):Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/products/${id}`)
  }

  getAllCategories():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/categories`)
  }


  getAllBrands():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}api/v1/brands`)
  }
}
