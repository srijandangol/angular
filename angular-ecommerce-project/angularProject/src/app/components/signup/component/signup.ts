import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  INITIAL_SIGNUP_FORM,
  PASSWORD_STRENGTH,
  PasswordStrength,
  ERROR_MESSAGES
} from '../../constant/constants';
import { SignupFormTypes } from '../signup.types';
import { validateSignupForm, checkPasswordStrength } from '../validation.utils';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupForm: SignupFormTypes = { ...INITIAL_SIGNUP_FORM };
  isFormValid = false;
  isLoading = false;
  errorMessage = '';
  passwordStrength: PasswordStrength | '' = '';

  constructor(private router: Router, private signupService: SignupService) {}

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

    this.signupService.saveUser(this.signupForm);

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
