import InitialState from '../state/AppointmentsListStatusesInitialState';

import AppointmentsListStatusesReducer from './AppointmentsListStatusesReducer'

const initialState = new InitialState();

export default function appointmentStatusReducer (state = initialState, action) {
    let nextState = state;

    const statuses = AppointmentsListStatusesReducer(state.statuses, action);
    if (statuses !== state.statuses) nextState = nextState.setIn(['statuses'], statuses);

    return nextState
}
