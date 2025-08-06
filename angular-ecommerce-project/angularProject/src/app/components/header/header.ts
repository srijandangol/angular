import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Update the path below to the correct location of auth.service.ts
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnDestroy {
  searchQuery = '';
  isLoggedIn = false;
  private sub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.sub = this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    console.log('Searching for:', this.searchQuery);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
