import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'request-for-weapon' },
  {
    name: 'createNew.distribute',
    type: 'distribute',
  },
];
const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}approves`;
const approvedTable: TableState = {
  id: 'approved requests table',
  title: 'requestForWeapon.listofApprovedforDistribution',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id'],
  actions: actions.slice(1),
  links: {
    getPath: `${dataSourceUrl}`,
    updatePath: `${baseApiUrl}distributes`,
  },
};

export default approvedTable;
