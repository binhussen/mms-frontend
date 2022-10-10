import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { AuthenticationService } from 'src/app/Auths/service/authentication.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  @Input() user = { firstName: 'Mohammed', lastName: 'Hussen' };
  @Input() currentUser = null;
  isOpen = false;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }
    const clickedInsde = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInsde) {
      this.isOpen = false;
    }
  }
  role!: string;
  constructor(
    private elementRef: ElementRef,
    private authenticationService: AuthenticationService
  ) {
    //this.authenticationService.logout();
  }
  ngOnInit(): void {
    this.role = this.authenticationService.getRole();
    console.log('role', this.role);
    setTimeout(() => {
      this.role = this.authenticationService.getRole();
      console.log('role', this.role);
    }, 2000);
  }
}
