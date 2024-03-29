import { createAction, props } from '@ngrx/store';
import { FormData, FormState } from '../models/form.state';

const setSubmittingForm = createAction(
  '[Form] submit form',
  props<{ value: Partial<FormState> }>()
);

const formSubmittingSuccess = createAction(
  '[Form] form submitting success',
  props<{ value: any }>()
);

const formSubmittingFailure = createAction(
  '[Form] form submitting failure',
  props<{ value: any }>()
);

const setUpdatingForm = createAction(
  '[Form] update form',
  props<{ value: Partial<FormState> }>()
);

const submitUpdatingForm = createAction(
  '[Form] submit update form',
  props<{ value: any }>()
);

const setApprovingForm = createAction(
  '[Form] approve form',
  props<{ value: Partial<FormState> }>()
);

const setRejectingForm = createAction(
  '[Form] reject form',
  props<{ value: FormData }>()
);

const setDistributionForm = createAction(
  '[Form] distribute form',
  props<{ value: Partial<FormState> }>()
);

// const setUpdatingFormWithRelations = createAction(
//   '[Form] update form with relations',
//   props<{ value: FormData }>()
// );

const clearData = createAction('[Form] clear data');

export default {
  setSubmittingForm,
  formSubmittingSuccess,
  formSubmittingFailure,
  setUpdatingForm,
  submitUpdatingForm,
  setApprovingForm,
  setRejectingForm,
  setDistributionForm,
  // setUpdatingFormWithRelations,
  clearData,
};
