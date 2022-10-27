import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../page/page.component';
import itemLookupsPage from './itemlookup.page';
import notifyDetailPage from '../weapon/notify/notify-detail.page';
import { PageDetailComponent } from '../page/page-detail/page-detail.component';
import itemLookupsDetailPage from './itemLookupsDetail.page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component:PageComponent, data:itemLookupsPage},
      {path:':id', component:PageDetailComponent, data:itemLookupsDetailPage}
    ])
  ]
})
export class LookupsModule { }
