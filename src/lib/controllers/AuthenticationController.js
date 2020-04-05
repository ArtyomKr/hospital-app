import { login } from '../MockData';
import BaseController from './BaseController';

class AuthenticationController extends BaseController {
    getPath(){
        return ('/authentication')
    }

    getHandlers(){
        return [
            {
                path: '',
                handler: ({pathSegment, params}) => {
                    return login(params)
                }
            }
        ]
    }
}

export default new AuthenticationController();