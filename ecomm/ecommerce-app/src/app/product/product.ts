import { Component } from '@angular/core';
import { Product } from '../models/product-model';
import { HttpClient } from '@angular/common/http';
import { AppRoutes } from '../constant/route.constant';
import { Router } from '@angular/router';
import { CartService } from '../service/cart/cart.service';
import { ProductService } from '../service/product/product.service';
import { DialogService } from '../shared/services/dialog.service';

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
    private cartService: CartService,
    private productService: ProductService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log('Products loaded:', this.products);
    });
  }

  viewProductDetail(id: number) {
    console.log('Navigating to product detail for ID');
    this.router.navigate([AppRoutes.PRODUCT_DETAIL(id)]);
  }

  addToCart(product: Product) {
    const success = this.cartService.addToCart(product);
    
    if (success) {
      this.dialogService.openSuccessDialog(
        'Added to Cart',
        `"${product.productName}" has been added to your cart successfully!`,
        'OK'
      );
    } else {
      this.dialogService.openWarningDialog(
        'Login Required',
        'You need to be logged in to add items to your cart. Would you like to login now?',
        'Login',
        'Cancel'
      ).subscribe(result => {
        if (result) {
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
