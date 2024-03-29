import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Form } from '../../models/form';
import formActions from '../../../store/actions/form.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.state';
import { filter } from 'rxjs/operators';
import { ActionType } from '../table/table.component';
import { MatSnackBar } from '@angular/material/snack-bar';
interface FormProps {
  form: Form;
  actionTitle: string;
  dataSourceUrl: string;
  actionType: ActionType;
  row?: any;
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  form!: Form;
  actionTitle = 'createNew.create';
  dataSourceUrl!: string;
  actionType!: ActionType;
  loading$ = this.store$.select((state) => state.form.status === 'PENDING');
  row = {};
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: FormProps,
    private store$: Store<AppState>,
    private sanckbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const { form, actionTitle, dataSourceUrl, actionType, row } =
      this.inputData;
    this.form = form;
    this.actionTitle = actionTitle;
    this.dataSourceUrl = dataSourceUrl;
    this.actionType = actionType;
    this.row = row;
  }
  onSubmit(formData: any) {
    let f;
    if (formData['roles']) {
      f = {
        value: {
          id: this.form.title,
          data: { ...formData, roles: [formData['roles']] },
          submittedToUrl: this.dataSourceUrl,
          action: this.actionType,
        },
      };
    } else {
      f = {
        value: {
          id: this.form.title,
          data: formData,
          submittedToUrl: this.dataSourceUrl,
          action: this.actionType,
        },
      };
    }

    if (this.actionType == 'create') {
      this.store$.dispatch(formActions.setSubmittingForm(f));
      this.store$
        .select((state) => state.form)
        .pipe(filter((f) => f.id === this.form.title))
        .subscribe((f) => {
          if (f.status == 'FAILED') {
            this.sanckbar.open(f.response.error, 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          } else if (f.status == 'SUCCESS') {
            this.dialogRef.close();
            this.sanckbar.open('Created Successfully', 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          }
        });
    } else if (this.actionType == 'edit') {
      const f = {
        value: {
          id: this.form.title,
          data: { ...this.row, ...formData },
          submittedToUrl: this.dataSourceUrl,
          action: this.actionType,
        },
      };
      this.store$.dispatch(formActions.submitUpdatingForm(f));
      this.store$
        .select((state) => state.form)
        .pipe()
        .subscribe((f) => {
          if (f.status == 'FAILED') {
            this.sanckbar.open(f.response.error, 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          } else if (f.status == 'SUCCESS') {
            this.dialogRef.close();
            this.sanckbar.open('Updated Successfully', 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          }
        });
    } else if (formData.status == 'Approve') {
      const f = {
        value: {
          id: this.form.title,
          data: { ...this.row, ...formData },
          submittedToUrl: this.dataSourceUrl,
          action: formData.id,
        },
      };

      this.store$.dispatch(formActions.setApprovingForm(f));
      this.store$
        .select((state) => state.form)
        .pipe(filter((f) => f.id === this.form.title))
        .subscribe((f) => {
          if (f.status == 'FAILED') {
            this.sanckbar.open(f.response.error, 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          } else if (f.status == 'SUCCESS') {
            this.dialogRef.close();
            this.sanckbar.open('Approved Successfully', 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          }
        });
    } else if (formData.status == 'Reject') {
      const f = {
        value: {
          id: this.form.title,
          data: { ...this.row, ...formData },
          submittedToUrl: this.dataSourceUrl,
          action: formData.id,
        },
      };
      this.store$.dispatch(formActions.setRejectingForm(f));
      this.store$
        .select((state) => state.form)
        .pipe(filter((f) => f.id === this.form.title))
        .subscribe((f) => {
          if (f.status == 'FAILED') {
            this.sanckbar.open(f.response.error, 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          } else if (f.status == 'SUCCESS') {
            this.dialogRef.close();
            this.sanckbar.open('Rejected Successfully', 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          }
        });
    } else if (this.actionType == 'distribute') {
      const f = {
        value: {
          id: this.form.title,
          data: { ...this.row, ...formData },
          submittedToUrl: this.dataSourceUrl,
          action: formData.id,
        },
      };

      this.store$.dispatch(formActions.setDistributionForm(f));
      this.store$
        .select((state) => state.form)
        .pipe()
        .subscribe((f) => {
          if (f.status == 'FAILED') {
            this.sanckbar.open(f.response.error, 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          } else if (f.status == 'SUCCESS') {
            this.dialogRef.close();
            this.sanckbar.open('Distributed Successfully', 'close', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'notif-success',
            });
          }
        });
    }
  }
}
