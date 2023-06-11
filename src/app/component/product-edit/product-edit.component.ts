import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  myForm: FormGroup;
  product: IProduct = {
    name: "",
    price: 0,
    imgurl: "",
    description:""
  };
  constructor(private productService: ProductService,
    private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
      })
    });
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required,Validators.min(0)]],
      imgurl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onHandleEdit() {
    this.productService.updateProduct(this.product).subscribe(data => {
      console.log(data)
      alert("Update sản phẩm thành công");
      this.router.navigate(['admin/products']);
    })
  }
}