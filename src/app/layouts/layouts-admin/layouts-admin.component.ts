import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layouts-admin',
  templateUrl: './layouts-admin.component.html',
  styleUrls: ['./layouts-admin.component.scss']
})
export class LayoutsAdminComponent {
  admin = {
    email: "1",
    password: "1"
  }
  loggedIn: boolean = false;
  showLoginForm: boolean = true;
  constructor(private router: Router) { }
  onSubmit(emailInput: string, passwordInput: string) {
    if (emailInput === this.admin.email && passwordInput === this.admin.password) {
      this.loggedIn = true;
      this.showLoginForm = false;
      this.router.navigate(['admin/']);
    } else { 
      alert("Đăng nhập không thành công ")
    }
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
