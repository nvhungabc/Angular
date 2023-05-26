import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss']
})
export class ResgisterComponent {
  use = {
    name: '',
    password:  "",
    email: "",
    diachi:"",
  };
  constructor(private productService: ProductService,private router: Router) {
  }
  onHandleAdd() {
    this.productService.resgister(this.use).subscribe((data) => {
      console.log(data)
      alert("Đăng ký thành công");
      this.router.navigate(['login']);
    }, error => console.log(error.message))
  }
}
