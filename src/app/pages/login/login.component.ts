import { Component, OnInit } from '@angular/core';
import loginForm from './login.form';
import { Form } from '../../mms-common/models/form';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { environment } from 'src/environments/environment';
import authAction from 'src/app/store/actions/auth.action';
import { AppState } from 'src/app/store/models/app.state';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        '* => *',
        useAnimation(fadeIn, {
          params: { timing: 1000, delay: 2000 },
        })
      ),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  baseApiUrl = environment.baseApiUrl;
  form!: Form;
  formComponent: any;
  constructor(private store$: Store<AppState>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = loginForm;
  }

  onSubmit(data: any) {
    const f = {
      value: {
        submittedToUrl: this.baseApiUrl + 'authentications/login',
        action: 'login',
        data: data,
      },
    };
    this.store$.dispatch(authAction.setLoginForm(f));
    this.store$
      .select((state) => state.auth)
      .pipe()
      .subscribe((f) => {
        f.action === 'login' &&
          f.status === 'FAILED' &&
          this.snackBar.open(
            f.response.error.status + ' ' + f.response.error.title,
            'close',
            {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            }
          );
      });
  }
}
