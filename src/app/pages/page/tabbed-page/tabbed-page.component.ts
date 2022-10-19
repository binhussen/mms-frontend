import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../Auths/service/authentication.service';

@Component({
  selector: 'app-tabbed-page',
  templateUrl: './tabbed-page.component.html',
  styleUrls: ['./tabbed-page.component.scss'],
})
export class TabbedPageComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    private auth: AuthenticationService
  ) {}
  role!: string;

  ngOnInit(): void {
    this.role = this.auth.getRole();
  }
}
