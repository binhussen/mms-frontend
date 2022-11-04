import { Form } from 'src/app/mms-common/models/form';

const inventoryForm: Form = {
  title: 'inventory.insertWeapon.form.inventory',
  elements: [
    {
      name: 'itemNoInExpenditureRegister',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.itemNoInExpenditureRegister',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'noOfEntryInTheRegisterOfIncomingGoods',
      type: 'text',
      placeholder:
        'inventory.insertWeapon.form.noOfEntryInTheRegisterOfIncomingGoods',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },

    // {
    //   name: 'date',
    //   type: 'date',
    //   placeholder: 'Date',
    //   defaultValue: '',
    //   size: 4,
    //   validations: [{ type: 'required', value: true }],
    // },
    {
      name: 'donor',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.donor',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'storeItems',
      type: 'formArray',
      placeholder: 'inventory.insertWeapon.form.weaponItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'inventory.insertWeapon.form.weaponType',
          defaultValue: '',
          size: 3,
          options: [
            { value: 'ሽጉጥ', label: 'ሽጉጥ', serializable: true },
            { value: 'ጠብመንጃ', label: 'ጠብመንጃ', serializable: true },
            { value: 'ጥይት', label: 'ጥይት', serializable: false },
            { value: 'ቦንብ', label: 'ቦንብ', serializable: false },
            { value: 'መተረየስ', label: 'መተረየስ', serializable: true },
            { value: 'ካርታ', label: 'ካርታ', serializable: false },
            { value: 'ሌሎች', label: 'ሌሎች', serializable: false },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'itemDescription',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.weaponItemDescription',
          defaultValue: '',
          size: 9,
        },
        {
          name: 'model',
          type: 'select',
          placeholder: 'inventory.insertWeapon.form.weaponModel',
          defaultValue: '',
          refer: 'type',
          size: 3,
          options: [
            { value: 'ክላሽ ጠብመንጃ', label: 'ክላሽ ጠብመንጃ', referredValue: 'ጠብመንጃ' },
            {
              value: 'Ppch ጠብመንጃ',
              label: 'Ppch ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            { value: 'Pps ጠብመንጃ', label: 'Pps ጠብመንጃ', referredValue: 'ጠብመንጃ' },
            { value: 'ችኮዝ ጠብመንጃ', label: 'ችኮዝ ጠብመንጃ', referredValue: 'ጠብመንጃ' },
            {
              value: 'ጣሊያን አውቶማቲክ ጠብመንጃ',
              label: 'ጣሊያን አውቶማቲክ ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            {
              value: 'ቶምሶን ጠብመንጃ',
              label: 'ቶምሶን ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            {
              value: 'መስኮቭ ሹልኪት ጠብመንጃ',
              label: 'መስኮቭ ሹልኪት ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            {
              value: 'ኤስ ኬ ኤስ ጠብመንጃ',
              label: 'ኤስ ኬ ኤስ ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            { value: 'ኡዚ ጠብመንጃ', label: 'ኡዚ ጠብመንጃ', referredValue: 'ጠብመንጃ' },
            {
              value: 'ዊንችስተር ጠብመንጃ',
              label: 'ዊንችስትር ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            {
              value: 'ስናይፐር ጠብመንጃ',
              label: 'ስናይፐር ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },
            {
              value: 'ካርባይን ጠብመንጃ',
              label: 'ካርባይን ጠብመንጃ',
              referredValue: 'ጠብመንጃ',
            },

            {
              value: 'ክላሽ ጠብመንጃ ጥይት',
              label: 'ክላሽ ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የካኑኒ ኤስ ሽጉጥ ጥይት',
              label: 'የካኑኒ ኤስ ሽጉጥ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የቶካሮቭ ሽጉጥ ጥይት',
              label: 'የቶካሮቭ ሽጉጥ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'ማካሮቭ ሽጉጥ ጥይት',
              label: 'ማካሮቭ ሽጉጥ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የችኮዝ ጠብመንጃ ጥይት',
              label: 'የችኮዝ ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የማስ መተረየስ ጥይት',
              label: 'የማስ መተረየስ ጥይት',
              referredValue: 'ጥይት',
            },
            { value: 'የላውንቸር ጥይት', label: 'የላውንቸር ጥይት', referredValue: 'ጥይት' },
            {
              value: 'የM57 ላውንቸር ጥይት',
              label: 'የM57 ላውንቸር ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የብሬን መሳርያ  ጥይት',
              label: 'የብሬን መሳርያ  ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የፋል ጠብመንጃ ጥይት',
              label: 'የፋል ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የምንሽር ጠብመንጃ ጥይት',
              label: 'የምንሽር ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            { value: 'የኡዚ ጥይት', label: 'የኡዚ ጥይት', referredValue: 'ጥይት' },
            {
              value: 'የማስ ጠብመንጃ ጥይት',
              label: 'የማስ ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ9 ሚ.ሜ ሽጉጥ ጥይት',
              label: 'የ9 ሚ.ሜ ሽጉጥ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ9 ሚ.ሜ ካሊቨር ሽጉጥ ጥይት',
              label: 'የ9 ሚ.ሜ ካሊቨር ሽጉጥ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ 22 ካሊቨር ፍሎቨር ጥይት',
              label: 'የ 22 ካሊቨር ፍሎቨር ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ6.35 ካሊቨር ሽጉጥ ጥይት',
              label: 'የ6.35 ካሊቨር ሽጉጥ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ9ሚ.ሜ ካሊቨር የውሸት ጥይት',
              label: 'የ9ሚ.ሜ ካሊቨር የውሸት ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: '38 ኮልት ሽጉጥ የውሸት ጥይት',
              label: '38 ኮልት ሽጉጥ የውሸት ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ7.65 ካሊቨር ጥይት',
              label: 'የ7.65 ካሊቨር ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የዊንችስተር ጠብመንጃ ጥይት',
              label: 'የዊንችስተር ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የጂ3 ጠብመንጃ ጥይት',
              label: 'የጂ3 ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የሆርኔት ጠብመንጃ ጥይት',
              label: 'የሆርኔት ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የፒኬኤም የብሸት ጥይት',
              label: 'የፒኬኤም የብሸት ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የሪሚንግተን ጠብመንጃ ጥይት',
              label: 'የሪሚንግተን ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የሮማ ጠብመንጃ ጥይት',
              label: 'የሮማ ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የሀኪም ጠብመንጃ ጥይት',
              label: 'የሀኪም ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የአርፒጂ ባዙቃ ጥይት',
              label: 'የአርፒጂ ባዙቃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የኤም 1 ጠብመንጃ ጥይት',
              label: 'የኤም 1 ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የ50 ካሊቨር ጠብመንጃ ጥይት',
              label: 'የ50 ካሊቨር ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የBAR መተረየስ ጥይት',
              label: 'የBAR መተረየስ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የአልቤን ጠብመንጃ ጥይት',
              label: 'የአልቤን ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'የA6 መተረየስ ጥይት',
              label: 'የA6 መተረየስ ጥይት',
              referredValue: 'ጥይት',
            },
            {
              value: 'ካርባይን ጠብመንጃ ጥይት',
              label: 'ካርባይን ጠብመንጃ ጥይት',
              referredValue: 'ጥይት',
            },

            { value: 'የጭስ ቦንብ', label: 'የጭስ ቦንብ', referredValue: 'ቦንብ' },
            { value: 'F1 ቦንብ', label: 'F1 ቦንብ', referredValue: 'ቦንብ' },
            {
              value: 'ስሙ የማይታወቅ ቦንብ',
              label: 'ስሙ የማይታወቅ ቦንብ',
              referredValue: 'ቦንብ',
            },
            { value: 'ፕላስቲክ ቦንብ', label: 'ፕላስቲክ ቦንብ', referredValue: 'ቦንብ' },

            { value: 'ክላሽ መተረየስ', label: 'ክላሽ መተረየስ', referredValue: 'መተረየስ' },
            { value: 'ማስ መተረየስ', label: 'ማስ መተረየስ', referredValue: 'መተረየስ' },
            {
              value: 'የተለያዩ አይነት መተረየስ',
              label: 'የተለያዩ አይነት መተረየስ',
              referredValue: 'መተረየስ',
            },
            {
              value: 'የፒኬአም መተረየስ ',
              label: 'የፒኬአም መተረየስ ',
              referredValue: 'መተረየስ',
            },

            {
              value: 'ክላሽ ጠብመንጃ ካርታ',
              label: 'ክላሽ ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የካኑኒ ኤስ ሽጉጥ ካርታ',
              label: 'የካኑኒ ኤስ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የቶካሮቭ ሽጉጥ ካርታ',
              label: 'የቶካሮቭ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'ማካሮቭ ሽጉጥ ካርታ',
              label: 'ማካሮቭ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የተለያዩ አይነት የሽጉጥ ካርታ',
              label: 'የተለያዩ አይነት የሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የሆርኔት ጠብመንጃ ካርታ',
              label: 'የሆርኔት ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የካርባይን ጠብመንጃ ካርታ',
              label: 'የካርባይን ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ45 ካ/ር ቶመሰን ጠብመንጃ ካርታ',
              label: 'የ45 ካ/ር ቶመሰን ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ7.62 አውቶማቲክ ጠብመንጃ ካርታ',
              label: 'የ7.62 አውቶማቲክ ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የፒፒሲ ኤች ጠብመንጃ ካርታ',
              label: 'የፒፒሲ ኤች ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ45ካ/ር ሽጉጥ ካርታ',
              label: 'የ45ካ/ር ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ7.65 ሚ/ሜ ሽጉጥ ካርታ',
              label: 'የ7.65 ሚ/ሜ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ9 ሚ.ሜ የብሬታ ሽጉጥ ካርታ',
              label: 'የ9 ሚ.ሜ የብሬታ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ7.62 ኤም 57 ሽጉጥ ካርታ',
              label: 'የ7.62 ኤም 57 ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ8 ሚ.ሜ ሽጉጥ ካርታ',
              label: 'የ8 ሚ.ሜ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ9 ሚ.ሜ ሽጉጥ ካርታ',
              label: 'የ9 ሚ.ሜ ሽጉጥ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የኡዚ ጠብመንጃ ካርታ',
              label: 'የኡዚ ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የ7.65 ጠብመንጃ ትንሽና ትልቁ ካርታ',
              label: 'የ7.65 ጠብመንጃ ትንሽና ትልቁ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የፉል ጠብመንጃ ካርታ',
              label: 'የፉል ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የችኮዝ ጠብመንጃ ካርታ',
              label: 'የችኮዝ ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የኤም 49 አውቶማቲክ ጠብመንጃ ካርታ',
              label: 'የኤም 49 አውቶማቲክ ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የማስ ጠብመንጃ ካርታ',
              label: 'የማስ ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የጂ 3 ጠብመንጃ ካርታ',
              label: 'የጂ 3 ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የቢኤአር BAR መተረየስ ካርታ',
              label: 'የቢኤአር BAR መተረየስ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የኤም 56 ጠብመንጃ ካርታ',
              label: 'የኤም 56 ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },
            {
              value: 'የኤም 14 ጠብመንጃ ካርታ',
              label: 'የኤም 14 ጠብመንጃ ካርታ',
              referredValue: 'ካርታ',
            },

            {
              value: 'አርፒጂ ላውንቸር',
              label: 'አርፒጂ ላውንቸር',
              referredValue: 'ላውንቸር',
            },

            { value: 'ካኑኒ ኤስ ሽጉጥ', label: 'ካኑኒ ኤስ ሽጉጥ', referredValue: 'ሽጉጥ' },
            { value: '7.65 ሽጉጥ', label: '7.65 ሽጉጥ', referredValue: 'ሽጉጥ' },
            { value: 'ብሬታ ሽጉጥ', label: 'ብሬታ ሽጉጥ', referredValue: 'ሽጉጥ' },
            { value: 'ስታር ሽጉጥ', label: 'ስታር ሽጉጥ', referredValue: 'ሽጉጥ' },
            { value: 'ኮልት ሽጉጥ', label: 'ኮልት ሽጉጥ', referredValue: 'ሽጉጥ' },
            { value: 'ስታርተር ሽጉጥ', label: 'ስታርተር ሽጉጥ', referredValue: 'ሽጉጥ' },
            { value: 'የእጅ ካቴና', label: 'የእጅ ካቴና', referredValue: 'ሌሎች' },
            { value: 'የውሃ ኮዳ', label: 'የውሃ ኮዳ', referredValue: 'ሌሎች' },
            {
              value: 'የላውንቸር ክብሪት',
              label: 'የላውንቸር ክብሪት',
              referredValue: 'ሌሎች',
            },
            { value: 'ሻሞላ', label: 'ሻሞላ', referredValue: 'ሌሎች' },
            { value: 'ማለሊት', label: 'ማለሊት', referredValue: 'ሌሎች' },
            { value: 'የፖሊስ ዱላ', label: 'የፖሊስ ዱላ', referredValue: 'ሌሎች' },
            { value: 'የትጥቅ ቀበቶ', label: 'የትጥቅ ቀበቶ', referredValue: 'ሌሎች' },
            { value: 'ሄልመንት', label: 'ሄልመንት', referredValue: 'ሌሎች' },
            {
              value: 'ሜጋፎን /ማክራፎን',
              label: 'ሜጋፎን /ማክራፎን',
              referredValue: 'ሌሎች',
            },
          ],
        },
        {
          name: 'unitPrice',
          type: 'number',
          placeholder: 'inventory.insertWeapon.form.weaponUnitPrice',
          defaultValue: '',
          size: 3,
          validations: [
            { type: 'required', value: true },
            { type: 'min', value: 1 },
          ],
        },

        // {
        //   name: 'availability',
        //   type: 'hidden',
        //   placeholder: 'Weapon Availability',
        //   defaultValue: '1',
        //   size: 0,
        // },
        {
          name: 'storeNo',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.storeNo',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'shelfNo',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.shelfNo',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
      ],
    },
  ],
};

const distributeForm: Form = {
  title: 'distributeWeapon.distributeWeapon',
  elements: [],
};

const inventoryItemForm: Form = {
  title: 'inventory.insertWeapon.form.weaponItems',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'inventory.insertWeapon.form.weaponType',
      defaultValue: '',
      size: 3,
      options: [
        { value: 'ሽጉጥ', label: 'ሽጉጥ', serializable: true },
        { value: 'ጠብመንጃ', label: 'ጠብመንጃ', serializable: true },
        { value: 'ጥይት', label: 'ጥይት', serializable: false },
        { value: 'ቦንብ', label: 'ቦንብ', serializable: false },
        { value: 'መተረየስ', label: 'መተረየስ', serializable: true },
        { value: 'ካርታ', label: 'ካርታ', serializable: false },
        { value: 'ሌሎች', label: 'ሌሎች', serializable: false },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponItemDescription',
      defaultValue: '',
      size: 8,
      validations: [
        { type: 'required', value: true },
        { type: 'maxLength', value: 50 },
      ],
    },

    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponItemDescription',
      defaultValue: '',
      size: 9,
    },
    {
      name: 'model',
      type: 'select',
      placeholder: 'inventory.insertWeapon.form.weaponModel',
      defaultValue: '',
      refer: 'type',
      size: 3,
      options: [
        { value: 'ክላሽ ጠብመንጃ', label: 'ክላሽ ጠብመንጃ', referredValue: 'ጠብመንጃ' },
        {
          value: 'Ppch ጠብመንጃ',
          label: 'Ppch ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        { value: 'Pps ጠብመንጃ', label: 'Pps ጠብመንጃ', referredValue: 'ጠብመንጃ' },
        { value: 'ችኮዝ ጠብመንጃ', label: 'ችኮዝ ጠብመንጃ', referredValue: 'ጠብመንጃ' },
        {
          value: 'ጣሊያን አውቶማቲክ ጠብመንጃ',
          label: 'ጣሊያን አውቶማቲክ ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        {
          value: 'ቶምሶን ጠብመንጃ',
          label: 'ቶምሶን ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        {
          value: 'መስኮቭ ሹልኪት ጠብመንጃ',
          label: 'መስኮቭ ሹልኪት ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        {
          value: 'ኤስ ኬ ኤስ ጠብመንጃ',
          label: 'ኤስ ኬ ኤስ ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        { value: 'ኡዚ ጠብመንጃ', label: 'ኡዚ ጠብመንጃ', referredValue: 'ጠብመንጃ' },
        {
          value: 'ዊንችስተር ጠብመንጃ',
          label: 'ዊንችስትር ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        {
          value: 'ስናይፐር ጠብመንጃ',
          label: 'ስናይፐር ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },
        {
          value: 'ካርባይን ጠብመንጃ',
          label: 'ካርባይን ጠብመንጃ',
          referredValue: 'ጠብመንጃ',
        },

        {
          value: 'ክላሽ ጠብመንጃ ጥይት',
          label: 'ክላሽ ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የካኑኒ ኤስ ሽጉጥ ጥይት',
          label: 'የካኑኒ ኤስ ሽጉጥ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የቶካሮቭ ሽጉጥ ጥይት',
          label: 'የቶካሮቭ ሽጉጥ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'ማካሮቭ ሽጉጥ ጥይት',
          label: 'ማካሮቭ ሽጉጥ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የችኮዝ ጠብመንጃ ጥይት',
          label: 'የችኮዝ ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የማስ መተረየስ ጥይት',
          label: 'የማስ መተረየስ ጥይት',
          referredValue: 'ጥይት',
        },
        { value: 'የላውንቸር ጥይት', label: 'የላውንቸር ጥይት', referredValue: 'ጥይት' },
        {
          value: 'የM57 ላውንቸር ጥይት',
          label: 'የM57 ላውንቸር ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የብሬን መሳርያ  ጥይት',
          label: 'የብሬን መሳርያ  ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የፋል ጠብመንጃ ጥይት',
          label: 'የፋል ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የምንሽር ጠብመንጃ ጥይት',
          label: 'የምንሽር ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        { value: 'የኡዚ ጥይት', label: 'የኡዚ ጥይት', referredValue: 'ጥይት' },
        {
          value: 'የማስ ጠብመንጃ ጥይት',
          label: 'የማስ ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ9 ሚ.ሜ ሽጉጥ ጥይት',
          label: 'የ9 ሚ.ሜ ሽጉጥ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ9 ሚ.ሜ ካሊቨር ሽጉጥ ጥይት',
          label: 'የ9 ሚ.ሜ ካሊቨር ሽጉጥ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ 22 ካሊቨር ፍሎቨር ጥይት',
          label: 'የ 22 ካሊቨር ፍሎቨር ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ6.35 ካሊቨር ሽጉጥ ጥይት',
          label: 'የ6.35 ካሊቨር ሽጉጥ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ9ሚ.ሜ ካሊቨር የውሸት ጥይት',
          label: 'የ9ሚ.ሜ ካሊቨር የውሸት ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: '38 ኮልት ሽጉጥ የውሸት ጥይት',
          label: '38 ኮልት ሽጉጥ የውሸት ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ7.65 ካሊቨር ጥይት',
          label: 'የ7.65 ካሊቨር ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የዊንችስተር ጠብመንጃ ጥይት',
          label: 'የዊንችስተር ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የጂ3 ጠብመንጃ ጥይት',
          label: 'የጂ3 ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የሆርኔት ጠብመንጃ ጥይት',
          label: 'የሆርኔት ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የፒኬኤም የብሸት ጥይት',
          label: 'የፒኬኤም የብሸት ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የሪሚንግተን ጠብመንጃ ጥይት',
          label: 'የሪሚንግተን ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የሮማ ጠብመንጃ ጥይት',
          label: 'የሮማ ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የሀኪም ጠብመንጃ ጥይት',
          label: 'የሀኪም ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የአርፒጂ ባዙቃ ጥይት',
          label: 'የአርፒጂ ባዙቃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የኤም 1 ጠብመንጃ ጥይት',
          label: 'የኤም 1 ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የ50 ካሊቨር ጠብመንጃ ጥይት',
          label: 'የ50 ካሊቨር ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የBAR መተረየስ ጥይት',
          label: 'የBAR መተረየስ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የአልቤን ጠብመንጃ ጥይት',
          label: 'የአልቤን ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'የA6 መተረየስ ጥይት',
          label: 'የA6 መተረየስ ጥይት',
          referredValue: 'ጥይት',
        },
        {
          value: 'ካርባይን ጠብመንጃ ጥይት',
          label: 'ካርባይን ጠብመንጃ ጥይት',
          referredValue: 'ጥይት',
        },

        { value: 'የጭስ ቦንብ', label: 'የጭስ ቦንብ', referredValue: 'ቦንብ' },
        { value: 'F1 ቦንብ', label: 'F1 ቦንብ', referredValue: 'ቦንብ' },
        {
          value: 'ስሙ የማይታወቅ ቦንብ',
          label: 'ስሙ የማይታወቅ ቦንብ',
          referredValue: 'ቦንብ',
        },
        { value: 'ፕላስቲክ ቦንብ', label: 'ፕላስቲክ ቦንብ', referredValue: 'ቦንብ' },

        { value: 'ክላሽ መተረየስ', label: 'ክላሽ መተረየስ', referredValue: 'መተረየስ' },
        { value: 'ማስ መተረየስ', label: 'ማስ መተረየስ', referredValue: 'መተረየስ' },
        {
          value: 'የተለያዩ አይነት መተረየስ',
          label: 'የተለያዩ አይነት መተረየስ',
          referredValue: 'መተረየስ',
        },
        {
          value: 'የፒኬአም መተረየስ ',
          label: 'የፒኬአም መተረየስ ',
          referredValue: 'መተረየስ',
        },

        {
          value: 'ክላሽ ጠብመንጃ ካርታ',
          label: 'ክላሽ ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የካኑኒ ኤስ ሽጉጥ ካርታ',
          label: 'የካኑኒ ኤስ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የቶካሮቭ ሽጉጥ ካርታ',
          label: 'የቶካሮቭ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'ማካሮቭ ሽጉጥ ካርታ',
          label: 'ማካሮቭ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የተለያዩ አይነት የሽጉጥ ካርታ',
          label: 'የተለያዩ አይነት የሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የሆርኔት ጠብመንጃ ካርታ',
          label: 'የሆርኔት ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የካርባይን ጠብመንጃ ካርታ',
          label: 'የካርባይን ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ45 ካ/ር ቶመሰን ጠብመንጃ ካርታ',
          label: 'የ45 ካ/ር ቶመሰን ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ7.62 አውቶማቲክ ጠብመንጃ ካርታ',
          label: 'የ7.62 አውቶማቲክ ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የፒፒሲ ኤች ጠብመንጃ ካርታ',
          label: 'የፒፒሲ ኤች ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ45ካ/ር ሽጉጥ ካርታ',
          label: 'የ45ካ/ር ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ7.65 ሚ/ሜ ሽጉጥ ካርታ',
          label: 'የ7.65 ሚ/ሜ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ9 ሚ.ሜ የብሬታ ሽጉጥ ካርታ',
          label: 'የ9 ሚ.ሜ የብሬታ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ7.62 ኤም 57 ሽጉጥ ካርታ',
          label: 'የ7.62 ኤም 57 ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ8 ሚ.ሜ ሽጉጥ ካርታ',
          label: 'የ8 ሚ.ሜ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ9 ሚ.ሜ ሽጉጥ ካርታ',
          label: 'የ9 ሚ.ሜ ሽጉጥ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የኡዚ ጠብመንጃ ካርታ',
          label: 'የኡዚ ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የ7.65 ጠብመንጃ ትንሽና ትልቁ ካርታ',
          label: 'የ7.65 ጠብመንጃ ትንሽና ትልቁ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የፉል ጠብመንጃ ካርታ',
          label: 'የፉል ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የችኮዝ ጠብመንጃ ካርታ',
          label: 'የችኮዝ ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የኤም 49 አውቶማቲክ ጠብመንጃ ካርታ',
          label: 'የኤም 49 አውቶማቲክ ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የማስ ጠብመንጃ ካርታ',
          label: 'የማስ ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የጂ 3 ጠብመንጃ ካርታ',
          label: 'የጂ 3 ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የቢኤአር BAR መተረየስ ካርታ',
          label: 'የቢኤአር BAR መተረየስ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የኤም 56 ጠብመንጃ ካርታ',
          label: 'የኤም 56 ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },
        {
          value: 'የኤም 14 ጠብመንጃ ካርታ',
          label: 'የኤም 14 ጠብመንጃ ካርታ',
          referredValue: 'ካርታ',
        },

        {
          value: 'አርፒጂ ላውንቸር',
          label: 'አርፒጂ ላውንቸር',
          referredValue: 'ላውንቸር',
        },

        { value: 'ካኑኒ ኤስ ሽጉጥ', label: 'ካኑኒ ኤስ ሽጉጥ', referredValue: 'ሽጉጥ' },
        { value: '7.65 ሽጉጥ', label: '7.65 ሽጉጥ', referredValue: 'ሽጉጥ' },
        { value: 'ብሬታ ሽጉጥ', label: 'ብሬታ ሽጉጥ', referredValue: 'ሽጉጥ' },
        { value: 'ስታር ሽጉጥ', label: 'ስታር ሽጉጥ', referredValue: 'ሽጉጥ' },
        { value: 'ኮልት ሽጉጥ', label: 'ኮልት ሽጉጥ', referredValue: 'ሽጉጥ' },
        { value: 'ስታርተር ሽጉጥ', label: 'ስታርተር ሽጉጥ', referredValue: 'ሽጉጥ' },
        { value: 'የእጅ ካቴና', label: 'የእጅ ካቴና', referredValue: 'ሌሎች' },
        { value: 'የውሃ ኮዳ', label: 'የውሃ ኮዳ', referredValue: 'ሌሎች' },
        {
          value: 'የላውንቸር ክብሪት',
          label: 'የላውንቸር ክብሪት',
          referredValue: 'ሌሎች',
        },
        { value: 'ሻሞላ', label: 'ሻሞላ', referredValue: 'ሌሎች' },
        { value: 'ማለሊት', label: 'ማለሊት', referredValue: 'ሌሎች' },
        { value: 'የፖሊስ ዱላ', label: 'የፖሊስ ዱላ', referredValue: 'ሌሎች' },
        { value: 'የትጥቅ ቀበቶ', label: 'የትጥቅ ቀበቶ', referredValue: 'ሌሎች' },
        { value: 'ሄልመንት', label: 'ሄልመንት', referredValue: 'ሌሎች' },
        {
          value: 'ሜጋፎን /ማክራፎን',
          label: 'ሜጋፎን /ማክራፎን',
          referredValue: 'ሌሎች',
        },
      ],
    },
    // {
    //   name: 'serialNo',
    //   type: 'text',
    //   placeholder: 'inventory.insertWeapon.form.weaponSerialNo',
    //   defaultValue: '',
    //   size: 2,
    // },
    // {
    //   name: 'quantity',
    //   type: 'number',
    //   placeholder: 'inventory.insertWeapon.form.weaponQuantity',
    //   defaultValue: '',
    //   size: 2,
    // },
    {
      name: 'unitPrice',
      type: 'number',
      placeholder: 'inventory.insertWeapon.form.weaponUnitPrice',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    // {
    //   name: 'totalPrice',
    //   type: 'text',
    //   placeholder: 'inventory.insertWeapon.form.weaponTotalPrice',
    //   defaultValue: '',
    //   computeValueFrom: {
    //     elements: ['quantity', 'unitPrice'],
    //     operator: '*',
    //   },
    //   size: 2,
    // },
    // {
    //   name: 'availability',
    //   type: 'text',
    //   placeholder: 'Weapon Availability',
    //   defaultValue: '1',
    //   size: 0,
    // },
    {
      name: 'storeNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.storeNo',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'shelfNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.shelfNo',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
  ],
};
export default { inventoryForm, inventoryItemForm, distributeForm };
