import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Form } from '../../models/form';
import formActions from '../../../store/actions/form.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.state';
import { filter } from 'rxjs/operators';
import { ActionType } from '../table/table.component';
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
  actionTitle = 'save';
  dataSourceUrl!: string;
  actionType!: ActionType;
  loading$ = this.store$.select((state) => state.form.status === 'PENDING');
  row = {};
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: FormProps,
    private store$: Store<AppState>
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
    console.log(formData);
    const f = {
      value: {
        id: this.form.title,
        data: formData,
        submittedToUrl: this.dataSourceUrl,
        action: this.actionType,
      },
    };

    if(this.actionType=='create')
    {
      this.store$.dispatch(formActions.setSubmittingForm(f));
    }
    else if(formData.id=='Approve'){
      const f = {
        value: {
          id: this.form.title,
          data: {...formData,id:this.row},
          submittedToUrl: this.dataSourceUrl,
          action: formData.id,
        },
      };
      this.store$.dispatch(formActions.setApprovingForm(f));
    }
    else if(formData.id=='Reject'){
      const f = {
        value: {
          id: this.form.title,
          data: {id:this.row},
          submittedToUrl: this.dataSourceUrl,
          action: formData.type,
        },
      };
      this.store$.dispatch(formActions.setRejectingForm(f));
    }
    
    this.store$
      .select((state) => state.form)
      .pipe(filter((f) => f.id === this.form.title))
      .subscribe((f) => {
        console.log(f);
        if (f.status !== 'PENDING') {
          setTimeout(() => {
            this.dialogRef.close();
          }, 1000);
        }
      });
  }
}
