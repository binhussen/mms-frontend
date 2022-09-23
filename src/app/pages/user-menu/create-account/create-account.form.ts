import { Form } from 'src/app/mms-common/models/form';
const userForm: Form = {
  title: 'createAccount.form.createuserAccount',
  elements: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'createAccount.form.firstName',
      defaultValue: '',
      size: 6,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'createAccount.form.lastName',
      defaultValue: '',
      size: 6,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'userName',
      type: 'text',
      placeholder: 'createAccount.form.userName',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'password',
      type: 'text',
      placeholder: 'createAccount.form.password',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 6 },
        {
          type: 'pattern',
          value: '^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+)$',
        },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      placeholder: 'requestForWeapon.form.role',
      defaultValue: '',
      size: 4,
      options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'storeman', label: 'StoreMan' },
        { value: 'mmd', label: 'General Service' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'picture',
      type: 'file',
      placeholder: 'createAccount.form.profilePicture',
      defaultValue: '',
      validations: [{ type: 'required', value: true }],
    },
  ],
};

export default { userForm };
