import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthorizeComponent } from './authorize/authorize.component';

@NgModule({
  declarations: [AuthorizeComponent],
  exports: [AuthorizeComponent],
})
export class AuthModule {}
