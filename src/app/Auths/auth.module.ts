import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthorizeRoleComponent } from './authorize-role/authorize-role.component';

@NgModule({
  declarations: [AuthorizeRoleComponent],
  exports: [AuthorizeRoleComponent],
})
export class AuthModule {}
