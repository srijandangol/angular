export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const INITIAL_SIGNUP_FORM = {
  fullName: '',
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
};

export type PasswordStrength = 'Weak' | 'Medium' | 'Strong';

export const PASSWORD_STRENGTH = {
  WEAK: 'Weak' as PasswordStrength,
  MEDIUM: 'Medium' as PasswordStrength,
  STRONG: 'Strong' as PasswordStrength
};

export const ERROR_MESSAGES = {
  formInvalid: 'Please fill in all required fields correctly and ensure passwords match.'
};


// src/app/components/login/login.constants.ts

export const INITIAL_LOGIN_FORM = {
  userName: '',
  password: '',
  rememberMe: false
};

export const LOGIN_ERROR_MESSAGES = {
  invalidForm: 'Please fill in all required fields correctly.',
  invalidCredentials: 'Invalid username or password'
};

