import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  carts: Cart[] = []
  cart!: Cart;
  isLoggedIn = true; 
  productName = "";
  constructor(private productService: ProductService) {
    this.productService.getcart().subscribe(data => {
      this.carts = data
    })
  }
  getValue(e: any) {
    this.productName = e.target.value;
  }
  removeItem(id: any) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmDelete) {
      this.productService.deletecart(id).subscribe(() => {
        this.carts = this.carts.filter(item => item.id !== id);
        alert("Xóa sản phẩm thành công")
      }, (error) => {
        console.log(error.message);
      });
    }
  }
  updateQuantity(quantity: any, cart: Cart) {
    const newQuantity = parseInt(quantity, 10);
    if (!isNaN(newQuantity)) {
      cart.quantity = newQuantity;
    }
  }
  
  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const cart of this.carts) {
      totalPrice += cart.price * cart.quantity;
    }
    return totalPrice;
  }
  getTotalItems(): number {
    return this.carts.length;
  }
checkout(): void {
  if (this.isLoggedIn) {
    // Perform the order placement process
    this.isLoggedIn = false;
    alert("ok")
  } else {
    alert("cần đăng")
    // Redirect the user to the login page or display a login form
    // Example: router.navigate() or display a login form directly
  }
}
}
