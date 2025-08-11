// src/app/components/login/login.service.ts

import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private localStorageKey = 'user';
  private Admin_username: string = 'adminadmin';
  private readonly Admin_password: string = 'adminpassword';

  constructor(private authService: AuthService) {}

  getUser(): { email: string; password: string; fullName: string } | null {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : null;
  }

  validateCredentials(userName: string, password: string): { isValid: boolean; role?: string; userName?: string } {
  if (userName === this.Admin_username && password === this.Admin_password) {
    return {
      isValid: true,
      role: 'admin',
      userName: this.Admin_username
    };
  }

  if (this.authService.validateUserLogin(userName, password)) {
    return { isValid: true, role: 'user', userName };
  }

  return { isValid: false };
}

  // Admin-specific validation method
  validateAdminLogin(userName: string, password: string): boolean {
    if (userName === this.Admin_username && password === this.Admin_password) {
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  }
}
