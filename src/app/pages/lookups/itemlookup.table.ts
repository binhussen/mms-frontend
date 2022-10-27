import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}categories`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'categories' },
  { name: 'createNew.edit', type: 'edit' },
];

const itemLookupsTableState: TableState = {
  title: 'List of Item lookups',
  id: 'Item Lookups table',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  path:"items",
  relations: [],
  childOf: {
    notifiesId: 0,
  },
};
export default itemLookupsTableState;
