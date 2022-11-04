import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}items`;

const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'storeheaders' },
];

const viewWeaponTable: TableState = {
  id: 'View Weapon table',
  title: 'inventory.inventoryList',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  actions: actions,
  excludedColumns: ['id', 'storeHeaderId', 'storeHeader'],
  links: {
    getPath: dataSourceUrl,
  },
};

export const viewWeaponDetailTable: TableState = {
  id: 'View Weapon Detail table',
  title: 'inventory.inventoryList.detail',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'storeHeaderId', 'storeHeader'],
  links: {
    getPath: dataSourceUrl,
  },
};

export default viewWeaponTable;
