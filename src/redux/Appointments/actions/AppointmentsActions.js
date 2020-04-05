import service from '../../../services/AppointmentsService';

import { ACTION_TYPES } from './Constants';

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

export function clean(){
    return { type: CLEAN_APPOINTMENT_LIST }
}

export function cleanError(){
    return { type: CLEAN_APPOINTMENT_LIST_ERROR }
}

export function cleanFilter(){
    return { type: CLEAN_APPOINTMENT_LIST_FILTER }
}

export function changeFilter(changes, shouldReload){
    return {
        type: CHANGE_APPOINTMENT_LIST_FILTER,
        payload: { changes, shouldReload }
    }
}

export function changeFilterField(name, value, shouldReload){
    return {
        type: CHANGE_APPOINTMENT_LIST_FILTER_FIELD,
        payload: { name, value, shouldReload }
    }
}


export function load(params){
    return (dispatch) => {
        dispatch({ type: LOAD_APPOINTMENT_LIST_REQUEST });
        return service.find(params).then((response) => {
            dispatch({
                type: LOAD_APPOINTMENT_LIST_SUCCESS,
                payload: response.data
            });

            return response
        }).catch((error) => {
            dispatch({
                type: LOAD_APPOINTMENT_LIST_FAILURE,
                payload: error
            });
        })
    }
}
