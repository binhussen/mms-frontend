import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models';
import { AuthenticationService } from '../../../Auths/service/authentication.service';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
  @Input() menu!: Menu;
  @Input() secondaryMenu = false;
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
