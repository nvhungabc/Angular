import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  myForm: FormGroup;
  product = {
    name: '',
    price:  0,
    imgurl: "",
    description:"",
  };
  constructor(private productService: ProductService,private router: Router,private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required,Validators.min(0)]],
      imgurl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onHandleAdd() {
    if (this.myForm.valid) {
    this.productService.addProduct(this.product).subscribe((data) => {
      console.log(data)
      alert("Thêm sản phẩm thành công");
      this.router.navigate(['admin/products']);
    }, error => console.log(error.message))
  }
}
}