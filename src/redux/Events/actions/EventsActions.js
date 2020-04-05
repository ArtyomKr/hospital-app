import service from '../../../services/EventsService';

import { ACTION_TYPES } from './Constants';

const {
    CLEAN_EVENT_LIST_ERROR,
    CLEAN_EVENT_LIST,

    LOAD_EVENT_LIST_REQUEST,
    LOAD_EVENT_LIST_SUCCESS,
    LOAD_EVENT_LIST_FAILURE
} = ACTION_TYPES;

export function clean(){
    return { type: CLEAN_EVENT_LIST }
}

export function cleanError(){
    return { type: CLEAN_EVENT_LIST_ERROR }
}

export function load(params){
    return (dispatch) => {
        dispatch({ type: LOAD_EVENT_LIST_REQUEST });
        return service.find(params).then((response) => {
            dispatch({
                type: LOAD_EVENT_LIST_SUCCESS,
                payload: response.data
            });

            return response
        }).catch((error) => {
            dispatch({
                type: LOAD_EVENT_LIST_FAILURE,
                payload: error
            });
        })
    }
}
