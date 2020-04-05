import { getEmployees } from '../MockData';
import BaseController from './BaseController';

class AuthenticationController extends BaseController {
    getPath(){
        return ('/employees')
    }

    getHandlers(){
        return [
            {
                path: '',
                handler: () => {
                    return getEmployees()
                }
            }
        ]
    }
}

export default new AuthenticationController();