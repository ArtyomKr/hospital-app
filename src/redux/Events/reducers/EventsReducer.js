import InitialState from '../state/EventsInitialState';

import { ACTION_TYPES } from '../actions/Constants';

const {
    CLEAN_EVENT_LIST_ERROR,
    CLEAN_EVENT_LIST,

    LOAD_EVENT_LIST_REQUEST,
    LOAD_EVENT_LIST_SUCCESS,
    LOAD_EVENT_LIST_FAILURE
} = ACTION_TYPES;

const initialState = new InitialState();

export default function (state = initialState, action) {

    switch (action.type) {

        case CLEAN_EVENT_LIST:
            return state.clear()

        case CLEAN_EVENT_LIST_ERROR:
            return state.removeIn(['list', 'error']);

        case LOAD_EVENT_LIST_REQUEST:
            return state
                .setIn(['list', 'error'], null)
                .setIn(['list', 'isFetching'], true)

        case LOAD_EVENT_LIST_SUCCESS: {
            return state
                .setIn(['list', 'isFetching'], false)
                .setIn(['list', 'dataSource', 'data'], action.payload)
        }

        case LOAD_EVENT_LIST_FAILURE:
            return state
                .setIn(['list', 'isFetching'], false)
                .setIn(['list', 'error'], action.payload)
    }

    return state
}
