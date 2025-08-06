import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  // Search functionality
  searchQuery: string = '';

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    // TODO: Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }

  // Navigation methods
  goToHome(): void {
    // Navigation is handled by routerLink
  }

  goToLogin(): void {
    // Navigation is handled by routerLink
  }

  goToSignup(): void {
    // Navigation is handled by routerLink
  }
}
