import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProductByCatId(catId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/GetAllProductsByCategoryId?id=${catId}`
    );
  }

  getProductById(prodId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetProductById?id=${prodId}`);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllProducts`);
  }
}
