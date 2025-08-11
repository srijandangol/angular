import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'user'; // ✅ Added this
  private tokenKey = 'authToken';   // ✅ Keep a separate key for token
  private userDataKey = 'registeredUser'; // For storing user registration data

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

  // User registration and management methods
  saveUserData(userData: User): void {
    localStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }

  getUserData(): User | undefined {
    const data = localStorage.getItem(this.userDataKey);
    return data ? JSON.parse(data) : undefined;
  }

  validateUserLogin(userName: string, password: string): boolean {
    const storedUser = this.getUserData();
    if (!storedUser) {
      return false;
    }

    if (userName === storedUser.userName && password === storedUser.password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  login(token: string, user: { role: string }): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.localStorageKey);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    this.isLoggedInSubject.next(false);
  }
}
