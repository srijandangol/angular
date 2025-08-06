import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { INITIAL_LOGIN_FORM, LOGIN_ERROR_MESSAGES } from '../../constant/constants';
import { LoginFormTypes } from '../login.types';
import { validateLoginForm } from '../validation.utils';
import { LoginService } from '../service/login.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: LoginFormTypes = { ...INITIAL_LOGIN_FORM };
  isFormValid = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService // ✅ Inject AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onInputChange(): void {
    this.isFormValid = validateLoginForm(this.loginForm);
  }

  onSubmit(): void {
    if (!this.isFormValid) {
      this.errorMessage = LOGIN_ERROR_MESSAGES.invalidForm;
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    const isValidUser = this.loginService.validateCredentials(
      this.loginForm.email,
      this.loginForm.password
    );

    if (isValidUser) {
      console.log('Login successful');
      this.authService.login('dummy-token');
      this.router.navigate(['/navigation']);
    } else {
      this.errorMessage = LOGIN_ERROR_MESSAGES.invalidCredentials;
    }

    this.isLoading = false;
  }

  // Form change handlers
  onEmailChange = this.onInputChange;
  onPasswordChange = this.onInputChange;

  // Extra handlers (optional UI interactions)
  onRememberMeChange(): void {
    console.log('Remember me:', this.loginForm.rememberMe);
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
  }

  onTermsClick(): void {
    console.log('Terms clicked');
  }

  onPrivacyClick(): void {
    console.log('Privacy policy clicked');
  }
}
