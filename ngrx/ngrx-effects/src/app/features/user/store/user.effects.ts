import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.actions';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  private actions$= inject(Actions); 
  private userService= inject(UserService);
  private router = inject(Router);

  // LOGIN
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      switchMap(({ email, password }) =>
        this.userService.login(email, password).pipe(
          map((user) => UserActions.loginSuccess({ user })),
          catchError((error) =>
            of(UserActions.loginFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // SIGNUP
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signup),
      switchMap(({ email, password }) =>
        this.userService.signup(email, password).pipe(
          map((user) => UserActions.signupSuccess({ user })),
          catchError((error) =>
            of(UserActions.signupFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Store user in localStorage on login/signup success
  saveUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess, UserActions.signupSuccess),
        tap(({ user }) => {
          localStorage.setItem('user', JSON.stringify(user));
        })
      ),
    { dispatch: false } // No new action is dispatched
  );


  // Clear localStorage on logout
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          localStorage.removeItem('cart_items');
        })
      ),
    { dispatch: false } // No new action is dispatched
  );
}
