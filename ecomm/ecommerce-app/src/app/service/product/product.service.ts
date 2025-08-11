import { Injectable } from '@angular/core';
import { Product } from '../../models/product-model';
import productsData from '../../../assets/products.json';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private localStorageKey = 'products';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor() {
    this.loadProducts();
  }

  private loadProducts(): void {
    const storedProducts = localStorage.getItem(this.localStorageKey);
    const products = storedProducts ? JSON.parse(storedProducts) : this.getDefaultProducts();
    this.productsSubject.next(products);
    this.saveProducts(products);
  }

  private saveProducts(products: Product[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(products));
    this.productsSubject.next(products);
  }

  private getDefaultProducts(): Product[] {
  return productsData as Product[];
}

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProduct(id: number): Product | undefined {
    const products = this.productsSubject.value;
    return products.find(product => product.id === id);
  }

  addProduct(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
    const products = this.productsSubject.value;
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    
    const newProduct: Product = {
      ...productData,
      id: newId,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const updatedProducts = [...products, newProduct];
    this.saveProducts(updatedProducts);
    return newProduct;
  }

  updateProduct(id: number, productData: Partial<Omit<Product, 'id' | 'createdAt'>>): Product | null {
    const products = this.productsSubject.value;
    const index = products.findIndex(product => product.id === id);
    
    if (index === -1) {
      return null;
    }

    const updatedProduct: Product = {
      ...products[index],
      ...productData,
      updatedAt: new Date()
    };

    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    this.saveProducts(updatedProducts);
    return updatedProduct;
  }

  deleteProduct(id: number): boolean {
    const products = this.productsSubject.value;
    const filteredProducts = products.filter(product => product.id !== id);
    
    if (filteredProducts.length === products.length) {
      return false; // Product not found
    }

    this.saveProducts(filteredProducts);
    return true;
  }
}
