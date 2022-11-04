import viewWeaponTable, {
  viewWeaponDetailTable,
} from '../tables/view-weapon.table';

// const viewWeaponPage = {
//   title: 'View Weapon Inventories',
//   link: dataSourceUrl,
//   groupBy: 'weaponModel',
//   aggregate: 'weaponQuantity',
//   table: viewWeaponTable,
// };

const viewWeaponPage = {
  title: 'View Weapon Inventories',
  table: viewWeaponTable,
  type: 'default page',
};

export const viewWeaponDetailPage = {
  title: 'View Weapon Detail Inventories',
  table: viewWeaponDetailTable,
  type: 'default page',
};

export default viewWeaponPage;
