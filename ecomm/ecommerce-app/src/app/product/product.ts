import { Component } from '@angular/core';
import { Product } from '../models/product-model';
import { HttpClient } from '@angular/common/http';
import { AppRoutes } from '../constant/route.constant';
import { Router } from '@angular/router';
import { CartService } from '../service/cart/cart.service'; // ✅ Correct import

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class ProductComponent {
  products: Product[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService // ✅ Proper injection
  ) {}

  ngOnInit(): void {
    this.http.get<Product[]>('assets/products.json').subscribe(data => {
      this.products = data;
    });
  }

  viewProductDetail(id: number) {
    console.log('Navigating to product detail for ID');
    this.router.navigate([AppRoutes.PRODUCT_DETAIL(id)]);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
