import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Form } from '../../models/form';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import tableSelectors from 'src/app/store/selectors/table.selectors';
import { TableService } from './table.service';
import { debounce, filter, map, mergeMap, takeLast, tap } from 'rxjs/operators';
import { concat, Observable, of } from 'rxjs';
import { TableState } from 'src/app/store/models/table.state';
import tableActions from 'src/app/store/actions/table.actions';
import formActions from 'src/app/store/actions/form.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { idCardDocument } from './idcard';

export type ActionType =
  | 'create'
  | 'expand'
  | 'edit'
  | 'delete'
  | 'approve'
  | 'approvedList'
  | 'reject'
  | 'view'
  | 'distribute'
  | null;

export interface Action {
  name: string;
  type: ActionType;
  path?: string; // if expand we redirect the user to detail page. For example: if path = 'post' and item id = 2 => /post/2
  urlToPopulateForm?: string; // if we need to populate the form with data from the server
  form?: Form;
  submittedUrl?: string; // if we need to submit the form to the server
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  idCardPrint: boolean = false;
  data!: Array<any>; // or url
  displayedColumns!: Array<any>;
  columns!: Array<any>;
  filters = []; // TODO
  isColumnClickable: boolean = true;
  routeForDetailPage!: string;
  loading = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() form!: Form;
  pageSize = 5;
  dataSource = new MatTableDataSource<any>(this.data);

  actionTitle = 'Create';

  tableState$!: Observable<TableState>;
  links!: any;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private store$: Store<AppState>,
    public tableService: TableService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.tableState$ = this.store$.select(tableSelectors.getTableState);
    await this.initTable(this.tableState$).toPromise();
  }

  searchData(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }
  openDialog(
    actionTitle: string,
    form: Form,
    dataSourceUrl: string,
    actionType: ActionType,
    row?: any
  ) {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: form.elements.length >= 6 ? '95%' : '75%',
      maxWidth: '100vw',
      disableClose: true,
      data: {
        actionTitle: actionTitle,
        form: form,
        dataSourceUrl: dataSourceUrl,
        actionType: actionType,
        row: row,
      },
    });
    dialogRef.afterClosed().subscribe(async (result) => {
      this.store$.dispatch(formActions.clearData());
    });
  }
  command(action: Action, row: any, link?: string) {
    switch (action.type) {
      case 'create':
        this.openDialog(
          'createNew.create',
          this.form,
          this.links.createPath,
          action.type
        );
        break;
      case 'expand':
        console.log(`${this.router.url}/${row['id']}`);
        this.router.navigate([`${this.router.url}/${row['id']}`]);
        break;
      case 'edit':
        // fill the form with the current row
        this.store$.dispatch(formActions.setUpdatingForm({ value: row }));
        this.openDialog(
          'createNew.update',
          this.form,
          this.links.updatePath,
          action.type,
          row
        );
        break;
      case 'delete':
        // delete the row
        break;
      // case 'approve':
      //   // fetch data from the server using actionType.urlToPopulateForm by replacing [id] with the current row id
      //   this.httpClient
      //     .get(action?.urlToPopulateForm?.replace('[id]', row.id) ?? '')
      //     .subscribe((r) => {
      //       console.log(r);
      //       this.store$.dispatch(
      //         formActions.setUpdatingForm({
      //           value: { ...r },
      //         })
      //       );
      //       this.openDialog(
      //         'Approve',
      //         action.form ?? this.form,
      //         action.submittedUrl ?? '',
      //         action.type,
      //         row
      //       );
      //     });
      //   break;
      case 'approve':
        // approve
        this.openDialog(
          'Save',
          action.form ?? this.form,
          action.submittedUrl ?? '',
          action.type,
          row
        );
        break;
      case 'reject':
        // reject
        const f = {
          value: {
            id: row.id,
            submittedToUrl: action.path,
            action: action.type,
            row,
          },
        };
        this.store$.dispatch(formActions.setRejectingForm(f));
        break;
      case 'approvedList':
        this.router.navigate([`${this.router.url}/approves/${row['id']}`]);
        break;
      case 'distribute':
        this.openDialog(
          'Save',
          action.form ?? this.form,
          action.submittedUrl ?? '',
          action.type,
          row
        );
        break;
    }
  }
  //////////////////
  generateReport() {
    let reportLogo = document.getElementById('logo')!.innerHTML;
    let reportTitle = document.getElementById('tableTitle')!.innerHTML;
    let reportedTable = document.getElementById('tableid')!.innerHTML;
    let originalContents = document.body.innerHTML;
    if (reportLogo != null && reportedTable != null && reportTitle != null) {
      let contents = reportLogo + reportTitle + reportedTable;
      document.body.innerHTML = contents;
    }
    window.print();
    document.body.innerHTML = originalContents;
  }
  generateIdCard() {
    let printContents, popupWin;
    printContents = document.getElementById('print-section')!.innerHTML;
    popupWin = window.open(
      '',
      '_blank',
      'top=100px,left=300px,height=600px,width=600px'
    );
    popupWin!.document.open();
    popupWin!.document.write(idCardDocument);
    ///prev

    // popupWin!.document.close();
  }
  ////////////////////////////////

  initTable(state$: Observable<TableState>, currentSize?: number) {
    return this.store$.select(tableSelectors.getTableState).pipe(
      //  filter((state) => Boolean(state?.data && state?.data?.length)),
      tap(({ data, totalItems, excludedColumns, links }) => {
        this.links = links;
        if (!currentSize && data) {
          this.data = [...data];
          this.columns = this.tableService.getColumns(
            this.data,
            excludedColumns ?? []
          );
          data.map((item) => {
            console.log(item);
            const currentUrl = this.router.url.split('/')[5];
            if (item.status === 'distribute' && currentUrl == 'individual')
              this.idCardPrint = true;
          });
          this.displayedColumns = this.tableService.getDisplayedColumns(
            this.columns
          );
        }
        if (currentSize && data) {
          this.data.length = currentSize;
          this.data.push(...data);
        }

        // deep copy
        const temp = JSON.parse(JSON.stringify(this.data));
        temp.length = totalItems;
        this.data = temp;

        this.dataSource = new MatTableDataSource<any>(data);
        this.changeDetectorRefs.detectChanges();
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
      })
    );
  }

  async pageChange(value: any) {
    const _page = value.pageIndex;
    const _limit = value.pageSize;
    let previousSize = _page * _limit;

    // update page number and page size
    this.store$.dispatch(
      tableActions.updatePageNumber({
        value: {
          pageNumber: _page,
          pageSize: _limit,
          getPath: this.links.getPath,
        },
      })
    );

    await this.initTable(this.tableState$, previousSize).toPromise();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
