import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  status: boolean = false;
  productName = "";
  products: IProduct[] = []
  product!: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  getValue(e: any) {
    this.productName = e.target.value;
  }
  removeItem(id: any) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmDelete) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id);
        alert("Xóa sản phẩm thành công")
      }, (error) => {
        console.log(error.message);
      });
    }
  }
  sortProductsByPrice() {
    this.products.sort((a, b) => a.price - b.price);
  }
  sortProductsByPricee() {
    this.products.sort((a, b) => b.price - a.price);
  }
  
}