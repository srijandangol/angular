import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { NotificationService } from '../../service/notification.service';
import { Product, ProductCategory } from '../../models/product-model';
import { DialogService } from '../../shared/services/dialog.service';

@Component({
  selector: 'app-update-product',
  standalone: false,
  templateUrl: './update-product.html',
  styleUrls: ['./update-product.scss']
})
export class UpdateProductComponent implements OnInit {
  productForm!: FormGroup;
  categories = Object.values(ProductCategory).map((cat) => cat.toLowerCase());
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProduct();
    } else {
      this.notificationService.error('Invalid product ID!');
      this.router.navigate(['/admin']);
    }
  }

  initForm() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      brand: ['', [Validators.required, Validators.minLength(2)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
      currency: ['USD', Validators.required],
      category: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  loadProduct() {
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe({
        next: (product) => {
          if (product) {
            this.patchProductValues(product);
          } else {
            this.notificationService.warning('Product not found!');
            this.router.navigate(['/admin']);
          }
        },
        error: (error) => {
          console.error('Error loading product:', error);
          this.notificationService.error('Error loading product!');
          this.router.navigate(['/admin']);
        }
      });
    }
  }

  patchProductValues(product: Product) {
    this.productForm.patchValue({
      productName: product.productName,
      productPrice: product.productPrice,
      brand: product.brand,
      stock: product.stock,
      description: product.description,
      image: product.image,
      currency: product.currency,
      category: product.category,
      rating: product.rating
    });
  }

  updateProduct(): void {
    if (this.productForm.valid && this.productId) {
      const updatedProduct: Product = {
        ...this.productForm.value,
        id: parseInt(this.productId, 10) // Convert string ID to number
      };

      const updateSuccess = this.productService.updateProduct(updatedProduct);
      if (updateSuccess) {
        this.dialogService.openSuccessDialog(
          'Success',
          'Product updated successfully!',
          'OK'
        ).subscribe(() => {
          this.router.navigate(['/admin']);
        });
      } else {
        this.dialogService.openWarningDialog(
          'Update Failed',
          'Failed to update product. Product not found!',
          'OK'
        );
      }
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
