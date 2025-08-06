// src/app/components/login/login.validation.ts

import { EMAIL_REGEX } from '../constant/constants';
import { LoginFormTypes } from './login.types';

export function validateLoginForm(form: LoginFormTypes): boolean {
  return (
    form.email.trim().length > 0 &&
    form.password.trim().length > 0 &&
    EMAIL_REGEX.test(form.email)
  );
}
