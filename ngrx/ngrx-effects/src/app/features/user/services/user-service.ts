import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private localStorageKey = 'app_users';

  signup(email: string, password: string): Observable<User> {
    const users = this.getUsers();

    if (users.find((u) => u.email === email)) {
      return throwError(() => new Error('User already exists'));
    }

    // Generate id and token
    const newUser: User = {
      id: Date.now(), // simple numeric id
      email,
      password,       // include if your User model has it
      token: Math.random().toString(36).substring(2) // dummy token
    };

    users.push(newUser);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));

    return of(newUser);
  }

  login(email: string, password: string): Observable<User> {
    const users = this.getUsers();
    console.log('Available users:', users);
    console.log('Login attempt for:', email);
    
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log('Login successful for user:', user);
      return of(user);
    } else {
      console.log('Login failed - user not found or password incorrect');
      return throwError(() => new Error('Invalid email or password'));
    }
  }

  private getUsers(): User[] {
    const data = localStorage.getItem(this.localStorageKey);
    let users = data ? JSON.parse(data) : [];
    
    // Add a test user if no users exist
    if (users.length === 0) {
      const testUser: User = {
        id: 1,
        email: 'test@example.com',
        password: 'test123',
        token: 'test-token-123'
      };
      users = [testUser];
      localStorage.setItem(this.localStorageKey, JSON.stringify(users));
      console.log('Created test user: test@example.com / test123');
    }
    
    return users;
  }
}
