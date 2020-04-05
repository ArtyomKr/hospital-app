import service from '../../../services/EmployeesService';

import { ACTION_TYPES } from './Constants';

const {
    CLEAN_EMPLOYEES_LIST_ERROR,
    CLEAN_EMPLOYEES_LIST,

    LOAD_EMPLOYEES_LIST_REQUEST,
    LOAD_EMPLOYEES_LIST_SUCCESS,
    LOAD_EMPLOYEES_LIST_FAILURE
} = ACTION_TYPES;

export function clean(){
    return { type: CLEAN_EMPLOYEES_LIST }
}

export function cleanError(){
    return { type: CLEAN_EMPLOYEES_LIST_ERROR }
}

export function load(params){
    return (dispatch) => {
        dispatch({ type: LOAD_EMPLOYEES_LIST_REQUEST });
        return service.find(params).then((response) => {
            dispatch({
                type: LOAD_EMPLOYEES_LIST_SUCCESS,
                payload: response.data
            });

            return response
        }).catch((error) => {
            dispatch({
                type: LOAD_EMPLOYEES_LIST_FAILURE,
                payload: error
            });
        })
    }
}
