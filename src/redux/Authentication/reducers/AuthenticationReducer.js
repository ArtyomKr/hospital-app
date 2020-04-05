import InitialState from '../state/AuthenticationInitialState';

import { ACTION_TYPES } from '../actions/Constants';

const {
    CLEAR_AUTHENTICATION_ERROR,
    CLEAR_AUTHENTICATION_USER,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,

    CHANGE_FORM_FIELD,
    CLEAR_FORM_FIELD,

    VALIDATION_ERROR,
} = ACTION_TYPES;

const initialState = new InitialState();

export default function (state =  initialState, action) {

    switch (action.type) {

        case CLEAR_AUTHENTICATION_ERROR:
            return state.removeIn(['error']);

        case CLEAR_AUTHENTICATION_USER:
            return state.removeIn(['user']);

        case LOAD_USER_REQUEST:
            return state
                .removeIn(['error'])
                .setIn(['isFetching'], true);

        case LOAD_USER_SUCCESS: {
            return state
                .setIn(['isFetching'], false)
                .setIn(['user', 'login'], action.payload.login)
                .setIn(['user', 'name'], action.payload.name)
        }

        case LOAD_USER_FAILURE:
            return state
                .setIn(['isFetching'], false)
                .setIn(['error', 'type'], action.payload.type)
                .setIn(['error', 'message'], action.payload.message)

        case CHANGE_FORM_FIELD:
            const { name, value } = action.payload;
            return state
                .setIn(['form', name], value)

        case CLEAR_FORM_FIELD:
            return state.removeIn(['form'])

        case VALIDATION_ERROR:
            return state
                .setIn(['error', 'type'], action.payload.type)
                .setIn(['error', 'message'], action.payload.message)


    }

    return state
}