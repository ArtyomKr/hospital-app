import BaseService from './BaseService';

export class AuthenticationService extends BaseService {
    login( params ){
        return super.request({
            url: '/authentication',
            params
        })
    }
}
export default new AuthenticationService();
