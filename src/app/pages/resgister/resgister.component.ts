import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss']
})

export class ResgisterComponent {
  myForm: FormGroup;
  use = {
    name: '',
    password:  "",
    email: "",
    diachi:"",
    id:"",
  };
  constructor(private productService: ProductService,private router: Router,private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      diachi: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    },{ validators: this.checkPassword });
  }
  checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null
    }
    return { mismatch: true }
  }
  onHandleAdd() {
    if (this.myForm.valid) {
      this.productService.resgister(this.use).subscribe((data) => {
        console.log(data)
        alert("Đăng ký thành công");
        this.router.navigate(['login']);
      }, error => console.log(error.message))
      // Xử lý logic khi form hợp lệ
    }else{
      alert("Đăng nhập không thành công ")
    }
   
  }
}
