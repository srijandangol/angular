import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = '../../assets/products.json';
  private localStorageKey = 'products';
  constructor(private httpClient: HttpClient) {}
  private getLocalProducts(): Product[] {
    const localData = localStorage.getItem(this.localStorageKey);
    return localData ? JSON.parse(localData) : [];
  }

  getProductList(): Observable<Product[]> {
    // return this.httpClient.get<Product[]>(this.productsUrl);
    return of(this.getLocalProducts());
  }
  getProductById(id: string): Observable<Product | undefined> {
    // return this.httpClient
    //   .get<Product[]>(this.productsUrl)
    //   .pipe(
    //     map((products: Product[]) =>
    //       products.find((p) => p.id.toString() === id)
    //     )
    //   );
    const localProducts = this.getLocalProducts();
    const product = localProducts.find((p) => p.id.toString() === id);
    return of(product);
  }

  addProduct(product: Product) {
    const localProducts = this.getLocalProducts();
    product.id = Date.now();
    localProducts.push(product);
    localStorage.setItem(this.localStorageKey, JSON.stringify(localProducts));
  }
  deleteProduct(id: string): void {
    const localProducts = this.getLocalProducts();
    const updatedProducts = localProducts.filter((p) => p.id.toString() !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedProducts));
  }

   updateProduct(updatedProduct: Product): boolean {
    const localProducts = this.getLocalProducts();
    const index = localProducts.findIndex((p) => p.id === updatedProduct.id);

    if (index !== -1) {
      // Update existing product in place
      localProducts[index] = { ...updatedProduct, updatedAt: new Date() };
      localStorage.setItem(this.localStorageKey, JSON.stringify(localProducts));
      return true;
    } else {
      // Product not found - this should not happen during update
      console.error('Product not found for update:', updatedProduct.id);
      return false;
    }
  }



  loadProductsFromJsonToLocalStorage(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl).pipe(
      tap((products) => {
        localStorage.setItem('products', JSON.stringify(products));
      })
    );
  }
}
