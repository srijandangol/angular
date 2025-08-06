import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  // Form data
  loginForm = {
    email: '',
    password: '',
    rememberMe: false
  };

  // Form validation
  isFormValid = false;
  isLoading = false;
  errorMessage = '';

  // Methods
  onEmailChange(): void {
    this.validateForm();
  }

  onPasswordChange(): void {
    this.validateForm();
  }

  onRememberMeChange(): void {
    // Handle remember me checkbox
    console.log('Remember me:', this.loginForm.rememberMe);
  }

  validateForm(): void {
    this.isFormValid = this.loginForm.email.length > 0 &&
                      this.loginForm.password.length > 0 &&
                      this.isValidEmail(this.loginForm.email);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(): void {
    if (!this.isFormValid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // TODO: Implement actual login logic
    console.log('Login attempt:', this.loginForm);

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // TODO: Handle login response
      console.log('Login successful');
    }, 2000);
  }

  onForgotPassword(): void {
    // TODO: Implement forgot password functionality
    console.log('Forgot password clicked');
  }

  onTermsClick(): void {
    // TODO: Navigate to terms page
    console.log('Terms clicked');
  }

  onPrivacyClick(): void {
    // TODO: Navigate to privacy policy page
    console.log('Privacy policy clicked');
  }
}
