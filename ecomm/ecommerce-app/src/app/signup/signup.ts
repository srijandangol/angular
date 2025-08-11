import { Component } from '@angular/core';
import { ERROR_MESSAGES, INITIAL_SIGNUP_FORM, PASSWORD_STRENGTH, PasswordStrength } from '../constant/constants';
import { checkPasswordStrength, validateSignupForm } from './validation.utils';
import { SignupFormTypes } from './signup.types';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { AuthService } from '../service/auth/auth.service';
import { User } from '../models/user-model';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class SignupComponent {
  signupForm: SignupFormTypes = { ...INITIAL_SIGNUP_FORM };
  isFormValid = false;
  isLoading = false;
  errorMessage = '';
  passwordStrength: PasswordStrength | '' = '';

  constructor(
    private router: Router,
    private signupService: SignupService,
    private authService: AuthService
  ) {}

  onInputChange(): void {
    this.isFormValid = validateSignupForm(this.signupForm);
    this.passwordStrength = checkPasswordStrength(this.signupForm.password);
  }

  onSubmit(): void {
    if (!this.isFormValid) {
      this.errorMessage = ERROR_MESSAGES.formInvalid;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Create user object for storage
    const userData: User = {
      userName: this.signupForm.userName,
      password: this.signupForm.password,
      email: this.signupForm.email,
      fullName: this.signupForm.fullName,
      role: 'user'
    };

    // Save user data using auth service
    this.authService.saveUserData(userData);

    alert('Signup successful! You can now log in.');

    this.signupForm = { ...INITIAL_SIGNUP_FORM };
    this.passwordStrength = '';
    this.isFormValid = false;
    this.isLoading = false;

    this.router.navigate(['/login']);
  }

  getPasswordStrengthColor(): string {
    switch (this.passwordStrength) {
      case PASSWORD_STRENGTH.WEAK:
        return 'text-red-600';
      case PASSWORD_STRENGTH.MEDIUM:
        return 'text-yellow-600';
      case PASSWORD_STRENGTH.STRONG:
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  }

   // Add aliases for template event handlers to avoid errors
   onFullNameChange = () => {
    console.log('Full name changed:', this.signupForm.fullName);
    this.onInputChange();
  };

  onUserNameChange = () => {
    console.log('Username changed:', this.signupForm.userName);
    this.onInputChange();
  };

  onEmailChange = () => {
    console.log('Email changed:', this.signupForm.email);
    this.onInputChange();
  };

  onPasswordChange = () => {
    console.log('Password changed');
    this.onInputChange();
  };

  onConfirmPasswordChange = () => {
    console.log('Confirm password changed');
    this.onInputChange();
  };

  onAgreeTermsChange = () => {
    console.log('Agree terms changed:', this.signupForm.agreeTerms);
    this.onInputChange();
  };

  onTermsClick(): void {
    console.log('Terms clicked');
  }

  onPrivacyClick(): void {
    console.log('Privacy policy clicked');
  }
}
