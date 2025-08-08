import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// Update the path below to the correct location of AuthService
import { AuthService } from '../../service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}