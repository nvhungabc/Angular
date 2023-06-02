import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;
  email: string = '';
  password: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: ProductService,) {
    this.myForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    const emailUser=this.userService.getUsers()
    console.log(emailUser);
    
    if (this.myForm.valid) {
     
    } else {

    }
  }
  // login() {

  //     const passwordInput = this.myForm.get('password').value;
  //   if (this.myForm.valid) {
      

  //     this.userService.getUsers().subscribe(users => {
  //       const emailUser = users.find(user => user.email === emailInput);

  //       if (emailUser) {
  //         console.log('Đăng nhập thành công');
  //         // Lưu thông tin người dùng vào localStorage hoặc session để sử dụng ở các trang khác
  //         localStorage.setItem('currentUser', JSON.stringify(emailUser));
  //         // Chuyển hướng đến trang home sau khi đăng nhập thành công
  //         this.router.navigate(['/home']);
  //       } else {
  //         console.log('Đăng nhập thất bại');
  //         // Hiển thị thông báo lỗi hoặc thực hiện các tác vụ
  //       }
  //     }, error => {
  //       console.log('Đăng nhập thất bại');
  //       // Xử lý lỗi, hiển thị thông báo lỗi hoặc thực hiện các tác vụ khác
  //     });
  //   } else {
  //     console.log('Vui lòng kiểm tra lại thông tin đăng nhập');
  //     // Hiển thị thông báo lỗi hoặc thực hiện các tác vụ khác khi form không hợp lệ
  //   }
  // }
  
}

