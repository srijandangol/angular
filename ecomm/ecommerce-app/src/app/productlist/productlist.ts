import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.html',
  styleUrl: './productlist.scss'
})
export class ProductlistComponent {
 products = ['Product 1', 'Product 2', 'Product 3'];
}
