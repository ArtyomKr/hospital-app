import { getEvents } from '../MockData';
import BaseController from './BaseController';

class AuthenticationController extends BaseController {
    getPath(){
        return ('/events')
    }

    getHandlers(){
        return [
            {
                path: '',
                handler: () => {
                    return getEvents()
                }
            }
        ]
    }
}

export default new AuthenticationController();