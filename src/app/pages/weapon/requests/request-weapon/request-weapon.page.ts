import requestWeaponForm from './request-weapon.form';
import requestForWeaponTable from './request-weapon.table';

export const requestIndividualWeaponPage = {
  title: 'Request For Weapon',
  type: 'default page',
  form: requestWeaponForm.requestForWeaponForm,
  table: requestForWeaponTable.requestWeaponForIndividualTable,
};
export const requestMassWeaponPage = {
  title: 'Request For Weapon',
  type: 'default page',
  form: requestWeaponForm.requestForWeaponForm,
  table: requestForWeaponTable.requestWeaponForMassTable,
};
