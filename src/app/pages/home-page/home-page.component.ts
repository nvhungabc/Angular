import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
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
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    }, (error) => {
      console.log(error.message)
    })

  }
  
  sortProductsByPrice() {
    this.products.sort((a, b) => a.price - b.price);
  }
  sortProductsByPricee() {
    this.products.sort((a, b) => b.price - a.price);
  }
  searchProductsByName() {
    if (this.productName !== "") {
      this.products = this.products.filter(product => product.name.toLowerCase().includes(this.productName.toLowerCase()));
    }
  }
  
  
}
