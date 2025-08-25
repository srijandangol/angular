import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import * as UserActions from '../../store/user.actions';
import { selectLoading, selectError, selectCurrentUser } from '../../store/user.selectors';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'], // use array here
  standalone: false
})
export class SignupComponent {
  loading$;
  error$;
  signupForm;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Navigate to login after successful signup
    this.store.select(selectCurrentUser)
      .pipe(filter(user => !!user))
      .subscribe(() => {
        // Clear the user from store after signup to force login
        this.store.dispatch(UserActions.logout());
        this.router.navigate(['/user/login']);
      });
  }

  

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password, confirmPassword } = this.signupForm.value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      if (email && password) {
        // Dispatch signup action
        this.store.dispatch(UserActions.signup({ email, password }));
      }
    }
  }
}
