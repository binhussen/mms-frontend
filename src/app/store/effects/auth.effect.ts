import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import authAction from '../actions/auth.action';
import { AuthState } from '../models/auth.state';
import { AuthenticationService } from 'src/app/Auths/service/authentication.service';

@Injectable()
export class AuthEffect {
  $authSubmit = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.setLoginForm.type),
      switchMap((action: { value: Omit<AuthState, 'response'> }) =>
        this.authService
          .login(action.value.data, action.value.submittedToUrl ?? '')
          .pipe(
            mergeMap((response) => [
              authAction.authSuccess({ value: response }),
            ]),
            catchError((error) => of(authAction.authFailure({ value: error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}
}
