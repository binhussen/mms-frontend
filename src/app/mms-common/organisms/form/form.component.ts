import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ErrorHandler } from '../../services/error.handler';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  skip,
  switchMap,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
  zipAll,
} from 'rxjs/operators';
import {
  combineLatest,
  concat,
  merge,
  Observable,
  of,
  Subscription,
  zip,
} from 'rxjs';
import {
  Form as FormBase,
  FormElement,
  Validation,
  Option,
} from '../../models/form';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.state';
import formActions from '../../../store/actions/form.actions';
import { HttpClient } from '@angular/common/http';
import { ActionType } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  @Input()
  form!: FormBase;
  @Input()
  actionTitle = 'save';
  @Input()
  asDialog = false;

  @Input()
  actionType!: ActionType;

  @Input()
  submittedToUrl!: string;

  mmsForm!: UntypedFormGroup;
  errors: any = {};
  data: any = {};

  quantityEl: any;
  serialEl: any;
  totalPriceEl: any;

  subscriptions: Array<Subscription> = [];

  @Output()
  onFormSubmit = new EventEmitter();
  constructor(
    private fb: UntypedFormBuilder,
    private errorHandler: ErrorHandler,
    private store$: Store<AppState>
  ) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // TODO: file input, checkbox
  // TODO: get form info from url,
  // TODO: populate fields from data
  // TODO: submit the form?

  ngOnInit(): void {
    this.actionTitle =
      this.actionTitle[0].toUpperCase() + this.actionTitle.substring(1);
    this.initForm().then(() => {
      this.errorHandler.handleErrors(this.mmsForm, this.errors);
    });
    this.serialEl = {
      name: 'serialNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponSerialNo',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    };
    this.quantityEl = {
      name: 'quantity',
      type: 'number',
      placeholder: 'inventory.insertWeapon.form.weaponQuantity',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    };
    this.totalPriceEl = {
      name: 'totalPrice',
      type: 'number',
      placeholder: 'inventory.insertWeapon.form.weaponTotalPrice',
      defaultValue: '',
      computeValueFrom: {
        elements: ['quantity', 'unitPrice'],
        operator: '*',
      },
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    };
  }

  async initForm() {
    this.mmsForm = this.getNewFormGroup(this.form.elements);
    await this.getForm(this.form.elements).toPromise();
    this.computeValues(this.form.elements);
  }

  getForm(elements: Array<FormElement>) {
    return this.store$
      .select((state) => state.form.updating)
      .pipe(
        takeWhile(
          (value) => this.actionType === 'edit' || this.actionType === 'approve'
        ),
        distinctUntilChanged(),
        tap((updating) => {
          elements.forEach((element) => {
            if (element.type === 'formArray' && updating) {
              const elementPath = this.someInformalShit(
                this.submittedToUrl ?? '',
                element.name
              );
              const items = updating[elementPath]?.map((item: any) =>
                this.getNewFormItem(element.formArrayItems ?? [])
              );
              items?.forEach((control: AbstractControl, index: number) => {
                const elementPath = this.someInformalShit(
                  this.submittedToUrl ?? '',
                  element.name
                );
                if (control instanceof UntypedFormGroup) {
                  for (let con in control.controls) {
                    control.controls[con].patchValue(
                      updating[elementPath][index][con] ?? element.defaultValue
                    );
                  }
                }

                if (control instanceof UntypedFormControl) {
                  control.patchValue(
                    updating[elementPath][index] ?? element.defaultValue
                  );
                }
              });
              const formArray = this.mmsForm.get(
                element.name
              ) as UntypedFormArray;
              this.mmsForm.setControl(
                element.name,
                items ? this.fb.array(items) : formArray
              );
            } else if (updating) {
              // TODO: change this shitty code
              const elementPath =
                element.name == 'requestWeaponsId' ? 'id' : element.name;
              this.mmsForm
                .get(element.name)
                ?.patchValue(updating[elementPath] ?? element.defaultValue);
            }
          });
        })
      );
  }

  someInformalShit(submittedToUrl: string, elementName: string) {
    if (submittedToUrl.includes('requestWeaponApprovals')) {
      return 'requestWeaponItems';
    }

    return elementName;
  }

  dateChanged(e: any, control: string) {}

  submit() {
    if (this.mmsForm.invalid) {
      this.mmsForm.markAllAsTouched();
      return;
    }
    this.onFormSubmit.emit(this.mmsForm.value);
  }

  //category
  category(event) {
    const model = event.serializable ?? -1;

    if (model != -1) {
      this.mmsForm.value.storeItems.map((item) => {
        if (event.serializable) {
          this.form.elements[3].formArrayItems.map((x, i) => {
            if (x.name == 'quantity') {
              this.form.elements[3].formArrayItems.splice(i, 2);
            }
            if (x.name == 'serialNo') {
              this.form.elements[3].formArrayItems.splice(i, 1);
            }
          });
          this.form.elements[3].formArrayItems.splice(3, 0, this.serialEl);
        } else {
          this.form.elements[3].formArrayItems.map((x, i) => {
            if (x.name == 'serialNo') {
              this.form.elements[3].formArrayItems.splice(i, 1);
            }
            if (x.name == 'quantity') {
              this.form.elements[3].formArrayItems.splice(i, 2);
            }
          });
          this.form.elements[3].formArrayItems.splice(
            5,
            0,
            this.quantityEl,
            this.totalPriceEl
          );
        }
      });
    }

    this.form.elements.map((x) => {
      if (x.name == 'storeItems') {
        x.formArrayItems.map((y) => {
          if (y.name == 'type' && model != -1) {
            y.defaultValue = event.value;
          } else if (y.name == 'model') {
            y.defaultValue = event.value;
          }
        });
      }
    });

    this.mmsForm = this.getNewFormGroup(this.form.elements);
  }

  filterByValue(
    formElement: FormElement,
    formArray?: string,
    index?: string
  ): Observable<Array<Option>> {
    const formControl = this.mmsForm.get(
      `${formArray}.${index}.${formElement.name}` ?? ''
    );
    const pathOfRefer = formArray
      ? `${formArray}.${index || '0'}.${formElement.refer}`
      : formElement.refer;
    const elementPath = formArray
      ? `${formArray}.${index || '0'}.${formElement.name}`
      : formElement.name;
    const result =
      pathOfRefer && this.mmsForm.get(pathOfRefer)
        ? this.mmsForm.get(pathOfRefer)?.valueChanges.pipe(
            map((value) => {
              const d = formElement.options?.filter(
                (opt) => opt.referredValue == value
              );
              return d ? d : [];
            }),
            tap((value) => {
              // this.data[elementPath] = value;
              this.data[formElement.name] = value;
            })
          )
        : of(formElement.options ?? []);

    return result ?? of(formElement.options ?? []);
  }

  getValidator(validations?: Array<Validation>) {
    let temp: any = [];
    if (validations) {
      for (let validation of validations) {
        switch (validation.type) {
          case 'required':
            temp = [...temp, Validators.required];
            break;
          case 'maxLength':
            temp = [...temp, Validators.maxLength(validation.value)];
            break;
          case 'minLength':
            temp = [...temp, Validators.minLength(validation.value)];
            break;
          case 'email':
            temp = [...temp, Validators.email];
            break;
          case 'min':
            temp = [...temp, Validators.min(validation.value)];
            break;
          case 'max':
            temp = [...temp, Validators.max(validation.value)];
            break;
          case 'phone':
            temp = [...temp, Validators.pattern('[0][9][0-9]{8}')];
            break;
          case 'pattern':
            temp = [...temp, Validators.pattern(validation.value)];
            break;
          case 'fp':
            // temp = [...temp, Validators.pattern('/^FP/i')];
            break;
        }
      }
    }
    return temp;
  }

  getSizeDefault(size: number | undefined) {
    const s = (size ?? 12) * 8.3333;
    return size ? `0 1 calc(${s}% - 16px)` : `${s}%`;
  }

  getNewFormGroup(elements: Array<FormElement>): UntypedFormGroup {
    const temp: any = {};
    // AbstractControl base -> FormGroup / FormControl / FormArray
    elements.forEach((element) => {
      if (!element.formArrayItems) {
        temp[element.name] = [
          element.defaultValue,
          this.getValidator(element.validations),
        ];
      } else {
        temp[element.name] = this.getNewFormArray(element.formArrayItems);
      }
    });
    return this.fb.group(temp);
  }

  computeValues(elements: Array<FormElement>) {
    elements.forEach((element) => {
      if (element.type === 'formArray') {
        element.formArrayItems?.forEach((item) => {});
        const items = (this.mmsForm.get(element.name) as UntypedFormArray)
          .controls;
        items.forEach((control) => {
          if (control instanceof UntypedFormGroup) {
            const controls = control.controls;
            for (let con in controls) {
              const tempEl = element.formArrayItems?.find(
                (el) => el.name === con
              );
              if (tempEl && tempEl.computeValueFrom) {
                const sub1 = combineLatest(
                  tempEl.computeValueFrom.elements.map(
                    (el) => controls[el]?.valueChanges
                  )
                ).subscribe((values) => {
                  // @TODO for the time being only multiplication is implemented
                  controls[con].patchValue(
                    values.reduce((ac, cur) => ac * cur, 1),
                    { emitEvent: false }
                  );
                });
                this.subscriptions.push(sub1);
              }
            }
          }
        });
      } else {
        if (element.computeValueFrom) {
          const tempEl = this.mmsForm.get(element.name) as UntypedFormControl;
          const sub2 = combineLatest(
            element.computeValueFrom.elements.map(
              (el) => this.mmsForm.get(el)?.valueChanges
            )
          ).subscribe((values) => {
            // @TODO for the time being only multiplication is implemented
            if (values && values.length > 0) {
              tempEl.patchValue(
                values.reduce((ac, cur: any) => ac * cur, 1),
                { emitEvent: false }
              );
            }
          });

          this.subscriptions.push(sub2);
        }
      }
    });
  }

  getNewFormArray(elements: Array<FormElement>): UntypedFormArray {
    const item = this.getNewFormItem(elements);
    return this.fb.array([item]);
  }

  getNewFormItem(
    elements: Array<FormElement>
  ): UntypedFormGroup | UntypedFormControl {
    if (elements.length > 1) {
      return this.getNewFormGroup(elements);
    }
    return this.fb.control(
      elements[0].defaultValue,
      this.getValidator(elements[0].validations)
    );
  }

  addFormItemToFromArray(
    event: any,
    path: string,
    elements: Array<FormElement>
  ) {
    event.preventDefault();
    const formArray = this.mmsForm.get(path) as UntypedFormArray;
    const newItem = this.getNewFormItem(elements);
    formArray.push(newItem);
    this.computeValues(this.form.elements);
  }
  removeFormItemFromFormArray(event: any, path: string, index: number) {
    event.preventDefault();
    const formArray = this.mmsForm.get(path) as UntypedFormArray;
    formArray.removeAt(index);
  }
  getFormArrayItems(path: string) {
    return (this.mmsForm.get(path) as UntypedFormArray).controls;
  }
  setFileControl(results: Array<string>, controlName: string) {
    const fileControl = this.mmsForm.get(controlName) as UntypedFormControl;
    fileControl.patchValue(results.join(','));
  }
}
