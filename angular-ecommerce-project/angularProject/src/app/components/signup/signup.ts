import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  // Form data
  signupForm = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };

  // Form validation
  isFormValid = false;
  isLoading = false;
  errorMessage = '';
  passwordStrength = '';

  // Methods
  onFullNameChange(): void {
    this.validateForm();
  }

  onEmailChange(): void {
    this.validateForm();
  }

  onPasswordChange(): void {
    this.validateForm();
    this.checkPasswordStrength();
  }

  onConfirmPasswordChange(): void {
    this.validateForm();
  }

  onAgreeTermsChange(): void {
    this.validateForm();
  }

  validateForm(): void {
    this.isFormValid =
      this.signupForm.fullName.length > 0 &&
      this.signupForm.email.length > 0 &&
      this.signupForm.password.length >= 8 &&
      this.signupForm.password === this.signupForm.confirmPassword &&
      this.isValidEmail(this.signupForm.email) &&
      this.signupForm.agreeTerms;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  checkPasswordStrength(): void {
    const password = this.signupForm.password;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength < 2) this.passwordStrength = 'Weak';
    else if (strength < 4) this.passwordStrength = 'Medium';
    else this.passwordStrength = 'Strong';
  }

  onSubmit(): void {
    if (!this.isFormValid) {
      this.errorMessage = 'Please fill in all required fields correctly and ensure passwords match.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // TODO: Implement actual signup logic
    console.log('Signup attempt:', this.signupForm);

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      // TODO: Handle signup response
      console.log('Signup successful');
    }, 2000);
  }

  onTermsClick(): void {
    // TODO: Navigate to terms page
    console.log('Terms clicked');
  }

  onPrivacyClick(): void {
    // TODO: Navigate to privacy policy page
    console.log('Privacy policy clicked');
  }

  getPasswordStrengthColor(): string {
    switch (this.passwordStrength) {
      case 'Weak': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Strong': return 'text-green-600';
      default: return 'text-gray-600';
    }
  }
}
