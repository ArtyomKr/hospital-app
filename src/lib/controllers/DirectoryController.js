import { getAppointmentsStatuses } from '../MockData'
import BaseController from './BaseController'

class DirectoryController extends BaseController {
    getPath(){
        return '/directory'
    }

    getHandlers(){
        return [
            {
                path: '/appointment-statuses',
                handler: () => {
                    return getAppointmentsStatuses()
                }
            }
        ]
    }
}

export default new DirectoryController ()