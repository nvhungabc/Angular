import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {
  User
} from 'src/app/interfaces/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  currentUser: User | null = null;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: ProductService,) {
    this.myForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    const emailInput = this.myForm.value.email;
    const passwordInput = this.myForm.value.password;
    if (this.myForm.valid) {
      this.userService.getUsers().subscribe(users => {
        const emailUser = users.find(user => user.email === emailInput);

        if (emailUser) {
          alert("Đăng nhập thành công")
          console.log('Đăng nhập thành công');
          // Lưu thông tin người dùng vào localStorage hoặc session để sử dụng ở các trang khác
          localStorage.setItem('currentUser', JSON.stringify(emailUser));
          // Chuyển hướng đến trang home sau khi đăng nhập thành công
          this.router.navigate(['']);
          this.isLoggedIn = true;
        } else {
          alert("Đăng nhập thất bại")
          console.log('Đăng nhập thất bại');
          this.isLoggedIn = false;
          // Hiển thị thông báo lỗi hoặc thực hiện các tác vụ
        }
      }, error => {
        console.log('Đăng nhập thất bại');
        this.isLoggedIn = false;
        // Xử lý lỗi, hiển thị thông báo lỗi hoặc thực hiện các tác vụ khác
      });
    } else {
      this.isLoggedIn = false;
      console.log('Vui lòng kiểm tra lại thông tin đăng nhập');
      // Hiển thị thông báo lỗi hoặc thực hiện các tác vụ khác khi form không hợp lệ
    }
  }
  // logout(): void {
  //   // Xử lý đăng xuất
  //   // Đặt isLoggedIn thành false
  //   this.isLoggedIn = false;
  // }

}

