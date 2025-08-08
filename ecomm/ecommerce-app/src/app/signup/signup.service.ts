// src/app/signup/signup.service.ts
import { Injectable } from '@angular/core';
import { SignupFormTypes } from './signup.types';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private localStorageKey = 'user';

  saveUser(form: SignupFormTypes): void {
    const user = {
      fullName: form.fullName,
      email: form.email,
      password: form.password
    };
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  getUser(): { fullName: string; email: string; password: string } | null {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : null;
  }

  clearUser(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  userExists(email: string): boolean {
    const user = this.getUser();
    return user?.email === email;
  }
}
