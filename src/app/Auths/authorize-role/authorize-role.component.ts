import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-authorize-role',
  templateUrl: './authorize-role.component.html',
  styleUrls: ['./authorize-role.component.scss'],
})
export class AuthorizeRoleComponent implements OnInit {
  now: Date = new Date();
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  @Input() role!: string;

  public isAuthorized() {
    if (this.role) {
      return this.authenticationService.getRole() === this.role;
    } else {
      return this.authenticationService.isAuthenticated();
    }
  }
}
