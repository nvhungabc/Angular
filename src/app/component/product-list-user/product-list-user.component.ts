import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list-user',
  templateUrl: './product-list-user.component.html',
  styleUrls: ['./product-list-user.component.scss']
})
export class ProductListUserComponent {
  status: boolean = false;
  name = "";
  users: User[] = []
  user!: User;

  constructor(private productService: ProductService) {
    this.productService.getProductsUser().subscribe(data => {
      this.users = data
    })
  }
  getValue(e: any) {
    this.name = e.target.value;
  }
  removeItem(id: any) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa user này?');
    if (confirmDelete) {
      this.productService.deleteProductUser(id).subscribe(() => {
        this.users = this.users.filter(item => item.id !== id);
        alert("Xóa người dùng thành công")
      }, (error) => {
        console.log(error.message);
      });
    }
  }
}
