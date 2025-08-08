import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.html',
  standalone: false,
  styleUrls: ['./productdetail.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ProductDetailComponent initialized');
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<any[]>('assets/products.json').subscribe((products) => {
      this.product = products.find((p) => p.id == id);
    });
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
