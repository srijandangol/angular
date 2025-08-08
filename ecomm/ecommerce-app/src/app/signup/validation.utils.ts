import { PasswordStrength, PASSWORD_STRENGTH } from '../constant/constants';
import { SignupFormTypes } from './signup.types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateSignupForm = (form: SignupFormTypes): boolean =>
  form.fullName.length > 0 &&
  form.email.length > 0 &&
  form.password.length >= 8 &&
  form.password === form.confirmPassword &&
  EMAIL_REGEX.test(form.email) &&
  form.agreeTerms;

export const checkPasswordStrength = (password: string): PasswordStrength => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  return strength < 2
    ? PASSWORD_STRENGTH.WEAK
    : strength < 4
    ? PASSWORD_STRENGTH.MEDIUM
    : PASSWORD_STRENGTH.STRONG;
};
