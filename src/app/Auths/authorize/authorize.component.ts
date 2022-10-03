import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
})
export class AuthorizeComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  @Input() role!: string;

  public isAuthorized() {
    if (this.role) {
      console.log(this.authenticationService.getRole() === this.role);
      return this.authenticationService.getRole() === this.role;
    } else {
      return this.authenticationService.isAuthenticated();
    }
  }
}
