// src/app/components/login/login.validation.ts

import { LoginFormTypes } from './login.types';

export function validateLoginForm(form: LoginFormTypes): boolean {
  return (
    form.userName.trim().length > 0 &&
    form.password.trim().length > 0
  );
}
