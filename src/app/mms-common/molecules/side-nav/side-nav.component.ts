import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Auths/service/authentication.service';
import { menus } from '../../config';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  menus = menus;
  constructor(private auth: AuthenticationService) {}

  admin!: boolean;
  storeMan!: boolean;
  request!: boolean;
  approve!: boolean;
  view!: boolean;

  ngOnInit(): void {
    this.isAuthorized();
  }

  public isAuthorized() {
    this.admin = this.auth.getRole() === 'Admin';
    this.storeMan = this.auth.getRole() === 'StoreMan';
    this.request = this.auth.getRole() === 'Request';
    this.approve = this.auth.getRole() === 'Approve';
    this.view = this.auth.getRole() === 'View';
  }
}
