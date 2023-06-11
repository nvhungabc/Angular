import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from 'src/app/interfaces/cart';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input('data') product!: IProduct;
  productId: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    // Gọi service để lấy dữ liệu sản phẩm theo id
    this.productService.getProduct(this.productId).subscribe(
      (product: IProduct) => {
        this.product = product;
      },
    );
  }
  //cart
  addToCart() {
    this.productService.addToCart(this.product).subscribe(
      (response) => {
        console.log('Product added to cart:', response);
      },
      (error) => {
        console.error('Error adding product to cart:', error);
      }
    );
} 
}
