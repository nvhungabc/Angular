import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { User } from '../interfaces/user';
import { Cart } from '../interfaces/cart';
@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private apiUrl = 'http://localhost:3000/cartItems';
  constructor(private http: HttpClient) { }


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:3000/products/' + id);
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:3000/products/' + id);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/products', product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }
  resgister(use: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/user', use);
  }
  getProductsUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
  }
  deleteProductUser(id: number | string): Observable<User> {
    return this.http.delete<User>('http://localhost:3000/user/' + id);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
  }
  addToCart(product: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/cartItems', product);
  }
  getcart(): Observable<Cart[]> {
    return this.http.get<Cart[]>('http://localhost:3000/cartItems');
  }
  deletecart(id: number | string): Observable<Cart> {
    return this.http.delete<Cart>('http://localhost:3000/cartItems/' + id);
  }
  
}