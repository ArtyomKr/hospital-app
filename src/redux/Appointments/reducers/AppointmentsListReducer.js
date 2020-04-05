import InitialState from '../state/AppointmentsInitialState'

import { ACTION_TYPES } from '../actions/Constants'

const {
    CLEAN_APPOINTMENT_LIST_ERROR,

    CLEAN_APPOINTMENT_LIST,

    CLEAN_APPOINTMENT_LIST_FILTER,
    CHANGE_APPOINTMENT_LIST_FILTER,
    CHANGE_APPOINTMENT_LIST_FILTER_FIELD,

    LOAD_APPOINTMENT_LIST_REQUEST,
    LOAD_APPOINTMENT_LIST_SUCCESS,
    LOAD_APPOINTMENT_LIST_FAILURE
} = ACTION_TYPES;

const initialState = new InitialState();
const listInitialState = initialState.list;

export default function (state = listInitialState, action) {

    switch (action.type) {

        case CLEAN_APPOINTMENT_LIST:
            return state.clear()
                .setIn(['shouldReload'], action.payload || false);

        case CLEAN_APPOINTMENT_LIST_ERROR:
            return state.removeIn(['error']);

        case CLEAN_APPOINTMENT_LIST_FILTER:
            return state.getIn(['dataSource', 'filter']).clear()
                .setIn(['shouldReload'], true);

        case CHANGE_APPOINTMENT_LIST_FILTER: {
            const { changes, shouldReload } = action.payload;

            if (changes) {
                return state
                    .mergeIn(['dataSource', 'filter'], changes)
                    .setIn(['shouldReload'], shouldReload)
            }

            break
        }

        case CHANGE_APPOINTMENT_LIST_FILTER_FIELD: {
            const { name, value, shouldReload = true } = action.payload;
            return state
                .setIn(['dataSource', 'filter', name], value)
                .setIn(['shouldReload'], shouldReload)
        }

        case LOAD_APPOINTMENT_LIST_REQUEST:
            return state
                .setIn(['error'], null)
                .setIn(['shouldReload'], false)
                .setIn(['isFetching'], true)

        case LOAD_APPOINTMENT_LIST_SUCCESS: {
            return state
                .setIn(['isFetching'], false)
                .setIn(['shouldReload'], false)
                .setIn(['dataSource', 'data'], action.payload)
        }

        case LOAD_APPOINTMENT_LIST_FAILURE:
            return state
                .setIn(['isFetching'], false)
                .setIn(['shouldReload'], false)
                .setIn(['error'], action.payload)
    }

    return state
}


