import { Form } from 'src/app/mms-common/models/form';

const hrmForm: Form = {
  title: 'customer.form.registerHrm',
  elements: [
    {
      name: 'fpId',
      type: 'text',
      placeholder: 'customer.form.fpNumber',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'fp', value: true },
      ],
    },
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'customer.form.name',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'middleName',
      type: 'text',
      placeholder: 'customer.form.middleName',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'customer.form.lastName',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'gender',
      type: 'select',
      placeholder: 'customer.form.sex',
      defaultValue: '',
      size: 3,
      options: [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'birthDate',
      type: 'date',
      placeholder: 'customer.form.birthDate',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'higherDate',
      type: 'date',
      placeholder: 'customer.form.hiredDate',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'occpation',
      type: 'text',
      placeholder: 'customer.form.occupation',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'rank',
      type: 'text',
      placeholder: 'customer.form.rank',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'reponsibilty',
      type: 'text',
      placeholder: 'customer.form.reponsibilty',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
  ],
};

export default { hrmForm };
