import { Form } from 'src/app/mms-common/models/form';
const customerForm: Form = {
  title: 'customer.form.registerWarranty',
  elements: [
    {
      name: 'hrId',
      type: 'select',
      placeholder: 'customer.form.fpNumber',
      defaultValue: '',
      size: 3,
      options: [],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'customer.form.name',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'picture',
      type: 'file',
      placeholder: 'customer.form.ProfilePicture',
      defaultValue: '',
    },
    {
      name: 'region',
      type: 'text',
      placeholder: 'customer.form.region',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'subCity',
      type: 'text',
      placeholder: 'customer.form.subCity',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'woreda',
      type: 'text',
      placeholder: 'customer.form.woreda',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'phoneNumber',
      type: 'text',
      placeholder: 'customer.form.phoneNumber',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'phone', value: true },
      ],
    },
    {
      name: 'birthPlace',
      type: 'text',
      placeholder: 'customer.form.birthPlace',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'homeNumber',
      type: 'text',
      placeholder: 'customer.form.homeNumber',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'timeLimit',
      type: 'date',
      placeholder: 'customer.form.timeLimit',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'customerWarranties',
      type: 'formArray',
      placeholder: 'customer.customerWarranties.warrantierInformation',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'customer.customerWarranties.warrantierName',
          defaultValue: '',
          size: 2,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'address',
          type: 'text',
          placeholder: 'customer.customerWarranties.warrantierAddress',
          defaultValue: '',
          size: 2,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'region',
          type: 'text',
          placeholder: 'customer.customerWarranties.warrantierRegion',
          defaultValue: '',
          size: 2,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'subCity',
          type: 'text',
          placeholder: 'customer.customerWarranties.warrantierSubCity',
          defaultValue: '',
          size: 2,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'woreda',
          type: 'text',
          placeholder: 'customer.customerWarranties.warrantierWoreda',
          defaultValue: '',
          size: 2,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
      ],
    },
  ],
};
const warrantyForm: Form = {
  title: 'customer.customerWarranties.warrantierInformation',
  elements: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierName',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'address',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierAddress',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'region',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierRegion',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'subCity',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierSubCity',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'woreda',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierWoreda',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
  ],
};

export default { customerForm, warrantyForm };
