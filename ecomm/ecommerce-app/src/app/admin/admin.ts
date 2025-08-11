import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-model';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { ProductService } from '../service/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  standalone: false,
  styleUrls: ['./admin.scss']
})
export class AdminComponent implements OnInit {
  products$!: Observable<Product[]>;

  // Observable properties for dashboard statistics
  totalProducts$!: Observable<number>;
  inStockProducts$!: Observable<number>;
  lowStockProducts$!: Observable<number>;
  outOfStockProducts$!: Observable<number>;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.setupDashboardStats();
  }

  loadProducts() {
    this.products$ = this.productService.getProductList();
  }

  setupDashboardStats() {
    this.totalProducts$ = this.products$.pipe(
      map(products => products.length)
    );

    this.inStockProducts$ = this.products$.pipe(
      map(products => products.filter(p => p.stock > 0).length)
    );

    this.lowStockProducts$ = this.products$.pipe(
      map(products => products.filter(p => p.stock <= 10).length)
    );

    this.outOfStockProducts$ = this.products$.pipe(
      map(products => products.filter(p => p.stock === 0).length)
    );
  }

  onUpdate(product: Product) {
    console.log('Update clicked for:', product);
    this.router.navigate(['/admin/update-product', product.id]);
  }

  onDelete(product: Product) {
    if (confirm(`Are you sure you want to delete this product?`)) {
      this.productService.deleteProduct(product.id);
      this.loadProducts();
      this.notificationService.success('Product deleted successfully!');
    }
  }

  addProduct() {
    this.router.navigate(['/admin/add-product']);
  }
}
