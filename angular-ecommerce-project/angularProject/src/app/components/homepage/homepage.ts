import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, Header],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  // Featured categories data
  categories = [
    {
      id: 1,
      name: 'Fashion',
      icon: '👕',
      description: 'Latest trends in clothing and accessories',
      link: '/category/fashion'
    },
    {
      id: 2,
      name: 'Electronics',
      icon: '📱',
      description: 'Cutting-edge technology and gadgets',
      link: '/category/electronics'
    },
    {
      id: 3,
      name: 'Home & Living',
      icon: '🏠',
      description: 'Everything to make your home beautiful',
      link: '/category/home-living'
    }
  ];

  // Hero section data
  heroData = {
    title: 'Welcome to ShopHub',
    subtitle: 'Discover amazing products at unbeatable prices. Shop the latest trends and find everything you need in one place.',
    buttonText: 'Shop Now',
    buttonLink: '/products'
  };

  // Methods
  onShopNow(): void {
    // TODO: Navigate to products page
    console.log('Shop Now clicked');
  }

  onCategoryClick(category: any): void {
    // TODO: Navigate to category page
    console.log('Category clicked:', category.name);
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
