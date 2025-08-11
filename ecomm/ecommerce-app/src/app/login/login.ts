import { Component } from '@angular/core';
import { INITIAL_LOGIN_FORM, LOGIN_ERROR_MESSAGES } from '../constant/constants';
import { LoginFormTypes } from './login.types';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../service/auth/auth.service'
import { validateLoginForm } from './validation.utils';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
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
      this.router.navigate(['/product']);
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

  const result = this.loginService.validateCredentials(
    this.loginForm.email,
    this.loginForm.password
  );

  if (result.isValid && result.role) {
    console.log('Login successful');
    this.authService.login('dummy-token', { role: result.role });
    if (result.role === 'admin') {
      this.router.navigate(['/admin/dashboard']);  // Admin landing page
    } else {
      this.router.navigate(['/product']);          // User landing page
    }
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
