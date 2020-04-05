import BaseService from './BaseService';

export class EmployeesService extends BaseService {
    find( params ){
        return super.request({
            url: '/employees',
            params
        })
    }
}
export default new EmployeesService();