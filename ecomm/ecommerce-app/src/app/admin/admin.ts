import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent {
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Check if user is logged in as admin
    if (!this.authService.isLoggedIn() || !this.authService.isAdmin()) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
