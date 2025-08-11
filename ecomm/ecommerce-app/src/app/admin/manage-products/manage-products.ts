import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product-model';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-manage-products',
  standalone: false,
  templateUrl: './manage-products.html',
  styleUrls: ['./manage-products.scss']
})
export class ManageProductsComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  isEditing = false;
  editingProductId: number | null = null;
  showForm = false;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      stock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  showAddForm(): void {
    this.showForm = true;
    this.isEditing = false;
    this.editingProductId = null;
    this.productForm.reset();
  }

  showEditForm(product: Product): void {
    this.showForm = true;
    this.isEditing = true;
    this.editingProductId = product.id;
    this.productForm.patchValue({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
      stock: product.stock
    });
  }

  hideForm(): void {
    this.showForm = false;
    this.isEditing = false;
    this.editingProductId = null;
    this.productForm.reset();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      
      if (this.isEditing && this.editingProductId) {
        this.productService.updateProduct(this.editingProductId, formData);
      } else {
        this.productService.addProduct(formData);
      }
      
      this.hideForm();
    }
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.productForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['min']) return `${fieldName} must be greater than 0`;
      if (field.errors['pattern']) return `${fieldName} must be a valid URL`;
    }
    return '';
  }
}
