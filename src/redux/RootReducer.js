import { combineReducers } from 'redux';

import appointmentsReducer from './Appointments/reducers/AppointmentsReducer';
import directory from './Directory/AppointmentsStatuses/reducers/AppointmentsStatusesReducer';
import authentication from './Authentication/reducers/AuthenticationReducer';
import events from './Events/reducers/EventsReducer';
import employees from './Employees/reducers/EmployeesReducer';

export default combineReducers({
    appointments: appointmentsReducer,
    directory: directory,
    authentication : authentication,
    events: events,
    employees: employees
})


