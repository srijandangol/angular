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

  validateCredentials(email: string, password: string): boolean {
    const user = this.getUser();
    return user?.email === email && user?.password === password;
  }
}
