import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/models/app.state';

interface MatTableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

@Injectable({ providedIn: 'root' })
export class TableService {
  public pageSize = 5;
  public loading$!: Observable<boolean>;
  constructor(private httpClient: HttpClient) {}
  getColumns(
    data: Array<any>,
    excludedColumns: Array<string>
  ): Array<MatTableColumn> {
    // extract columns from data
    let columns = data.length > 0 ? Object.keys(data[0]) : [];
    if (excludedColumns) {
      columns = columns.filter((c) => !excludedColumns.includes(c));
    }

    // add additional column for actions and position
    columns = ['no', ...columns, ' '];

    // Describe the columns for <mat-table>.
    //
    //
    // header: column.replace(/([^A-Z])([A-Z])/g, '$1 $2'),
    return columns.map((column: any, index: number) => {
      return {
        columnDef: column,
        header: column,
        cell: (element: any) =>
          `${
            column === 'no'
              ? ''
              : element && element[column]
              ? element[column]
              : ``
          }`,
      };
    });
  }

  getDisplayedColumns(columns: Array<MatTableColumn>): Array<string> {
    return columns.map((c) => c.columnDef);
  }

  fetchData(
    pageNumber: number,
    limit: number,
    dataSourceUrl: string
  ): Observable<{ count: number; data: Array<any> }> {
    let params = new HttpParams();
    params = params.set('PageNumber', pageNumber.toString());
    params = params.set('PageSize', limit.toString());
    const httpResponse = this.httpClient.get(dataSourceUrl, {
      observe: 'response',
      params,
    });

    // {"CurrentPage":1,"TotalPages":1,"PageSize":10,"TotalCount":7,"HasPrevious":false,"HasNext":false}
    //
    return httpResponse.pipe(
      map((data: HttpResponse<any>) => ({
        count: JSON.parse(data.headers.get('X-Pagination'))?.TotalCount ?? 20,
        data: data.body ?? [],
        check: data.headers,
      }))
    );
  }
}
