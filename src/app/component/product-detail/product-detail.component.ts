import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

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
}
