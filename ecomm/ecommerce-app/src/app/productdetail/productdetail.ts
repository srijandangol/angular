import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../service/cart/cart.service';
import { Product } from '../models/product-model';

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
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    this.http.get<Product[]>('assets/products.json').subscribe((products) => {
      const foundProduct = products.find((p) => p.id === id);
      if (foundProduct) {
        this.product = foundProduct;
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}