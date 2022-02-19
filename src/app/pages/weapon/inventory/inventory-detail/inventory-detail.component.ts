import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Form } from 'src/app/mms-common/models/form';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import tableActions from 'src/app/store/actions/table.actions';
import { AppState } from 'src/app/store/models/app.state';
import inventoryForm from '../inventory.form';
import inventoryItemsTableState from './inventory.table';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.scss']
})
export class InventoryDetailComponent implements OnInit {

  form: Form = inventoryForm.inventoryItemForm;
  dataSourceUrl = 'http://localhost:3000/weaponItems';
  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'inventories' },
    { name: 'Edit', type: 'edit' },
  ];
  table = inventoryItemsTableState;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<AppState>
  ) {
    this.dataSourceUrl =
      this.dataSourceUrl +
      '?weaponInventoriesId=' +
      this.activatedRoute.snapshot.params.id;

    if (this.table.links) {
      this.table.links.getPath = this.dataSourceUrl;
    }

    this.store$.dispatch(tableActions.setTableState({ value: this.table }));
  }

  ngOnInit(): void {}
}