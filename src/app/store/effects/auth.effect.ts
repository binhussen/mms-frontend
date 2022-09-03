import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import authAction from '../actions/auth.action';

@Injectable()
export class AuthEffect {
  $loginAuth = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.setLoginForm.type),
      switchMap((action: { value: any }) => {})
    )
  );

  constructor(private actions$: Actions) {}
}
