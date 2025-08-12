import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../service/cart/cart.service';
import { Product } from '../models/product-model';
import { ProductService } from '../service/product/product.service';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.html',
  standalone: false,
  styleUrls: ['./productdetail.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    private productService: ProductService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    this.productService.getProductById(id.toString()).subscribe((foundProduct) => {
      if (foundProduct) {
        this.product = foundProduct;
        console.log('Product detail loaded:', this.product);
      } else {
        console.error('Product not found with ID:', id);
      }
    });
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