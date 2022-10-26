import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, Subscription } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, tap } from 'rxjs/operators';
import { TableService } from 'src/app/mms-common/organisms/table/table.service';
import tableActions from 'src/app/store/actions/table.actions';
import { AppState } from 'src/app/store/models/app.state';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    public activatedRoute: ActivatedRoute,
    private store$: Store<AppState>,
    private titleService: Title,
    private httpClient: HttpClient,
    private tableService: TableService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.data
      .pipe(
        distinctUntilChanged(),
        mergeMap((data) => {
          const currentUrl = this.router.url.split('/').slice(-1)[0];
          if (currentUrl == 'mass') data.form.elements[0].defaultValue = 'mass';
          else if (currentUrl == 'individual')
            data.form.elements[0].defaultValue = 'individual';
          console.log(data);
          this.tableService
            .fetchData(0, 5, 'http://localhost:5000/api/hrs')
            .pipe(
              map((response) => {
                data.form.elements.map((val: any) => {
                  if (val.name == 'hrId') {
                    response.data.map((opt) => {
                      val.options = [
                        ...val.options,
                        { value: opt.id, label: opt.fpId },
                      ];
                    });
                  }
                });
              })
            )
            .subscribe();

          this.tableService
            .fetchData(0, 5, 'http://localhost:5000/api/items')
            .pipe(
              map((response) => {
                if (data.title == 'Request For Weapon') {
                  data.form.elements.map((val: any) => {
                    if (val.name == 'requestItems') {
                      val.formArrayItems.map((item: any) => {
                        if (item.name == 'model') {
                          response.data.map((opt) => {
                            item.options = [
                              ...item.options,
                              { value: opt.model, label: opt.model },
                            ];
                          });
                        }
                      });
                    }
                  });
                }
              })
            )
            .subscribe();

          this.activatedRoute.snapshot.params.id
            ? (data.table.links.getPath = `${data.table.links.getPath}/${this.activatedRoute.snapshot.params.id}`)
            : data.table.links.getPath;
          this.titleService.setTitle(data.title ?? 'MMS - MMS');
          this.store$.dispatch(
            tableActions.setTableState({ value: data.table })
          );
          if ((data.link, data.groupBy, data.aggregate)) {
            return this.fetchData(data.link, data.groupBy, data.aggregate);
          }
          return of([]);
        }),
        map((data) => {
          this.store$.dispatch(
            tableActions.updateTableState({
              value: { data, totalItems: data.length },
            })
          );
        })
      )
      .subscribe();
  }

  fetchData(url: string, groupBy?: string, aggregate?: string) {
    return this.httpClient.get<Array<any>>(url).pipe(
      map((data) => {
        if (groupBy) {
          return data.reduce((acc, curr) => {
            const group = curr[groupBy];
            if (!acc[group]) {
              acc[group] = [];
            }
            acc[group].push(curr);
            return acc;
          }, {});
        }
        return data;
      }),
      map((data) => {
        if (aggregate && groupBy) {
          return Object.keys(data).map((key) => {
            return {
              [groupBy]: key,
              [aggregate]: data[key].reduce((acc: any, curr: any) => {
                acc += curr[aggregate];
                return acc;
              }, 0),
            };
          });
        }
        return data;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
