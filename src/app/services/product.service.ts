import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   URL = environment.host;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL + '/products');
  }

  getProductByID(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL + '/products/' + id );
  }

  SaveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL + '/products', product);
  }

  EditProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.URL + '/products/' + product.id, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(this.URL + '/products/' + id);
  }

  searchProductByName(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.http + '/products/?ProductName_like=' + keyword);
  }

}
