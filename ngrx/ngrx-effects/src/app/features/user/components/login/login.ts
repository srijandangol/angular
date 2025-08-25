import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/user.actions';
import { selectLoading, selectError, selectCurrentUser } from '../../store/user.selectors';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  loading$;
  error$;
  loginForm;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Navigate after login success using selector
    this.store.select(selectCurrentUser)
      .pipe(filter(user => !!user))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login attempt:', { email, password });
      if (email && password) {
        this.store.dispatch(UserActions.login({ email, password }));
      }
    } else {
      console.log('Form is invalid:', this.loginForm.errors);
    }
  }
}
