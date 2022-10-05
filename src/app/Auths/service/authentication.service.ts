import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import authAction from 'src/app/store/actions/auth.action';
import { AppState } from 'src/app/store/models/app.state';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly tokenKey = 'mmsToken';
  private role = 'Not Found';
  private userName = 'Not Found';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store$: Store<AppState>
  ) {}

  isAuthenticated(): boolean {
    let expirationDate, token;
    this.store$
      .select((state) => state.auth)
      .pipe()
      .subscribe((f) => {
        if (f.action === 'login' && f.status === 'SUCCESS') {
          expirationDate = new Date(f.response.wellCome.expiration);
          this.role = f.response.wellCome.role;
          this.userName = f.response.wellCome.name;
        } else {
          token = JSON.parse(localStorage.getItem(this.tokenKey) ?? '');
          expirationDate = new Date(token.expiration!);
        }
      });
    if (!expirationDate) {
      authAction.authFailure({
        value: {
          response: {
            error: { status: 401, title: 'Your are not Authorized' },
          },
        },
      });
      return false;
    } else if (expirationDate <= new Date()) {
      this.logout();
      return false;
    } else if (expirationDate > new Date()) {
      this.store$.dispatch(
        authAction.authSuccess({ value: { wellCome: token } })
      );
      return true;
    }
    return true;
  }

  logout() {
    authAction.authFailure({
      value: {
        response: { error: { status: 401, title: 'Your Token is Expired' } },
      },
    });
    localStorage.removeItem(this.tokenKey);
    this.router.navigateByUrl('/login');
  }

  getUserName(): string {
    this.isAuthenticated();
    return this.userName;
  }

  login(data: userCredentials, url: string): Observable<any> {
    return this.http
      .post(url, data)
      .pipe(tap((response) => this.saveToken(response)));
  }

  saveToken({ wellCome }: any) {
    localStorage.setItem(this.tokenKey, JSON.stringify(wellCome));
    this.router.navigate(['admin/dashboard']);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getRole(): string {
    this.isAuthenticated();
    return this.role;
  }
}
