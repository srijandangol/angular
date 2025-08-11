// src/app/components/login/login.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private localStorageKey = 'user';

  getUser(): { email: string; password: string; fullName: string } | null {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : null;
  }

  validateCredentials(email: string, password: string): { isValid: boolean; role?: string } {
  // Example hardcoded users:
  if (email === 'admin@example.com' && password === 'adminpass') {
    return { isValid: true, role: 'admin' };
  }
  if (email === 'user@example.com' && password === 'userpass') {
    return { isValid: true, role: 'user' };
  }
  return { isValid: false };
}
}
