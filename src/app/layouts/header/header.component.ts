import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchControl = new FormControl();
  items: string[] = []; 
  constructor(private productService: ProductService) {
    this.loadItems(); // Gọi phương thức để tải danh sách sản phẩm khi component được khởi tạo
  }
  loadItems() {
    this.productService.getProducts().subscribe((products: any[]) => {
      // Lấy tất cả dữ liệu từ trường name của danh sách sản phẩm
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
}
