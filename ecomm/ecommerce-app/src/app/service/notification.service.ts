import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  success(message: string): void {
    console.log('Success:', message);
    // You can implement toast notifications here
    alert(`Success: ${message}`);
  }

  warning(message: string): void {
    console.warn('Warning:', message);
    // You can implement toast notifications here
    alert(`Warning: ${message}`);
  }

  error(message: string): void {
    console.error('Error:', message);
    // You can implement toast notifications here
    alert(`Error: ${message}`);
  }

  info(message: string): void {
    console.log('Info:', message);
    // You can implement toast notifications here
    alert(`Info: ${message}`);
  }
}
