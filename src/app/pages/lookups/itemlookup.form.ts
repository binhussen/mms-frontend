import { Form } from 'src/app/mms-common/models/form';

const itemLookupsForm: Form = {
  title: 'Add Item Look Up ',
  elements: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Item Type',
      defaultValue: '',
      size: 8,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'subCategories',
      type: 'formArray',
      placeholder: 'Sub Category',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'modelName',
          type: 'text',
          placeholder: 'Item Model',
          defaultValue: '',
          size: 8,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
      ]
    },
  ],
};

const itemLookupsDetailForm: Form = {
  title: 'Add Item Look Up ',
  elements: [
    {
      name: 'subCategories',
      type: 'formArray',
      placeholder: 'Sub Category',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'modelName',
          type: 'text',
          placeholder: 'Item Model',
          defaultValue: '',
          size: 8,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
      ]
    },
  ],
};

export default { itemLookupsForm, itemLookupsDetailForm};