import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from "src/app/store/models/table.state";
import { environment } from "src/environments/environment";

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}customers`;
const actions: Array<Action> = [{ name: 'Edit', type: 'edit' }];

const warrantiesDetailTableState: TableState = {
  id: 'Warrantier detail table',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id','customerid'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  relations: [],
  childOf: {
    customerid: 0,
  },
};


export default warrantiesDetailTableState;