import BaseService from './BaseService';

export class AppointmentsService extends BaseService {
    find( params ){
        return super.request({
            url: '/appointments',
            params
        })
    }
}
export default new AppointmentsService();