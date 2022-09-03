import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseApiUrl = environment.baseApiUrl;

  private readonly tokenKey = 'mmsToken';
  private readonly expirationTokenKey = 'token-expiration';
  private readonly roleField = 'role';
  private readonly userName = 'name';
  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration!);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return 'invalid token';
    }
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    const role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/';
    const name = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/';
    if (field == 'role') {
      return dataToken[role + field];
    } else if (field == 'name') {
      return dataToken[name + field];
    }
    return token;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
    this.router.navigateByUrl('/login');
  }

  getUserName(): string {
    return this.getFieldFromJWT(this.userName);
  }

  login(data: userCredentials, url: string): Observable<any> {
    return this.http
      .post(url, data)
      .pipe(map((response) => this.saveToken(response)));
  }

  saveToken({ wellCome }: any) {
    localStorage.setItem(this.tokenKey, JSON.stringify(wellCome));
    this.router.navigate(['admin/dashboard']);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
