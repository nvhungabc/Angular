import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
  changeStatus() {
    this.status = !this.status;
  }
  searchProductsByName() {
    if (this.productName !== "") {
      this.products = this.products.filter(product => product.name.toLowerCase().includes(this.productName.toLowerCase()));
    }
  }
  
  
  
  
}
