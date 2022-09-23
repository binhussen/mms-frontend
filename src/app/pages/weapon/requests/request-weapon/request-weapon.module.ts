import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { PageComponent } from 'src/app/pages/page/page.component';
import { PageModule } from 'src/app/pages/page/page.module';
import {
  requestIndividualWeaponPage,
  requestMassWeaponPage,
} from './request-weapon.page';
import { PageDetailComponent } from 'src/app/pages/page/page-detail/page-detail.component';
import requestWeaponDetailPage from './request-weapon-detail.page';
import approvePage from './approves.page';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MmsCommonModule,
    PageModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'individual', pathMatch: 'full' },
      {
        path: 'individual',
        component: PageComponent,
        data: requestIndividualWeaponPage,
      },
      { path: 'mass', component: PageComponent, data: requestMassWeaponPage },
      {
        path: 'individual/:id',
        component: PageDetailComponent,
        data: requestWeaponDetailPage,
      },
      {
        path: 'mass/:id',
        component: PageDetailComponent,
        data: requestWeaponDetailPage,
      },
      {
        path: ':id/approves/:id',
        component: PageComponent,
        data: approvePage,
      },
    ]),
  ],
})
export class RequestWeaponModule {}
