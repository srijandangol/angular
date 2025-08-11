import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'user'; // ✅ Added this
  private tokenKey = 'authToken';   // ✅ Keep a separate key for token

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  getUserRole(): string | null {
    const userData = localStorage.getItem(this.localStorageKey);
    if (userData) {
      return JSON.parse(userData).role || null;
    }
    return null;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  login(token: string, user: { role: string }): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.localStorageKey);
    this.isLoggedInSubject.next(false);
  }
}
