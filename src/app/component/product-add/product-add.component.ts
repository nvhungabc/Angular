import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product = {
    name: '',
    price:  0,
    imgurl: "",
    description:"",
  };
  constructor(private productService: ProductService,private router: Router) {
  }
  onHandleAdd() {
    this.productService.addProduct(this.product).subscribe((data) => {
      console.log(data)
      alert("Thêm sản phẩm thành công");
      this.router.navigate(['admin/products']);
    }, error => console.log(error.message))
  }
}