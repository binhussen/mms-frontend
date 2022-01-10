import {Form} from "../../mms-common/models/form";

const notifyDetailForm: Form = {
  title: "Notify Weapon Item",
  elements: [
    {
      name: "type",
      type: "select",
      placeholder: "type",
      defaultValue: "",
      size: 12,
      options: [
        {value: "Weapon", label: "Weapon"},
        {value: "Bullet", label: "Bullet"},
        {value: "Other", label: "Other"}
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: "name",
      type: "select",
      placeholder: "name",
      defaultValue: "",
      size: 12,
      refer: "type",
      options: [
        {value: "ክላሽ ጠብመንጃ", label: "ክላሽ ጠብመንጃ", referredValue: "Weapon"},
        {value: "ካኑኒ ኤስ ሽጉጥ", label: "ካኑኒ ኤስ ሽጉጥ", referredValue: "Weapon"},
        {value: "ቶካሮቭ", label: "ቶካሮቭ", referredValue: "Weapon"},
        {value: "ማካሮቭ", label: "ማካሮቭ", referredValue: "Weapon"},
        {value: "ብሬታ ሽጉጥ", label: "ብሬታ ሽጉጥ", referredValue: "Weapon"},
        {value: "ስታር ሽጉጥ", label: "ስታር ሽጉጥ", referredValue: "Weapon"},
        {value: "ክላሽ ጠብመንጃ ካርታ", label: "ክላሽ ጠብመንጃ ካርታ", referredValue: "Bullet"},
        {value: "የቶካሮቭ ሽጉጥ ካርታ", label: "የቶካሮቭ ሽጉጥ ካርታ", referredValue: "Bullet"},
        {value: "ማካሮቭ ሽጉጥ ካርታ", label: "ማካሮቭ ሽጉጥ ካርታ", referredValue: "Bullet"},
        {value: "የእጅ ካቴና", label: "የእጅ ካቴና", referredValue: "Other"},
        {value: "የውሃ ኮዳ", label: "የውሃ ኮዳ", referredValue: "Other"}
      ],
      validations: [{ type: 'required', value: true }]
    },
    {
      name: "quantity",
      type: "number",
      size: 12,
      placeholder: "quantity",
      defaultValue: "",
      validations: [{ type: 'required', value: true }],
    }
  ]
}

export default notifyDetailForm;
