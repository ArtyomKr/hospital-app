import BaseService from './BaseService';

export class EventsService extends BaseService {
    find( params ){
        return super.request({
            url: '/events',
            params
        })
    }
}
export default new EventsService();