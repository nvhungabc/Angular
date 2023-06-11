import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  status: boolean = false;
  products: IProduct[] = []
  product!: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
    this.loadItems();
  }
  sortProductsByPrice() {
    this.products.sort((a, b) => a.price - b.price);
  }
  sortProductsByPricee() {
    this.products.sort((a, b) => b.price - a.price);
  }
  //search
  searchControl = new FormControl();
  items: string[] = []; 
  loadItems() {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.items = products.map((product: any) => product.name);
    });
  }
  filteredItems$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    map(value => this.filterItems(value))
    
  );
  filterItems(value: string): string[] {
    return this.items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
  }
  //thông tin người đăng nhập
  // ngOnInit() {
  //   // Lấy thông tin đăng nhập từ authService
  //   this.name = this.productService.getUsers();
  // }
  
}
