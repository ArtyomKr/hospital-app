import { getAppointments } from '../MockData';
import BaseController from './BaseController';

class AppointmentsController extends BaseController {
    getPath(){
        return ('/appointments')
    }

    getHandlers(){
        return [
            {
                path: '',
                handler: ({pathSegment, params}) => {
                    return getAppointments(params)
                }
            }
        ]
    }
}

export default new AppointmentsController();