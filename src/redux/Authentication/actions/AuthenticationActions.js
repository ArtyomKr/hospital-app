import service from '../../../services/AuthenticationService';

import { ACTION_TYPES } from './Constants';

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

export function cleanError(){
    return { type: CLEAR_AUTHENTICATION_ERROR }
}

export function logout(){
    return { type: CLEAR_AUTHENTICATION_USER }
}

export function changeFormField(name, value){
    return {
        type: CHANGE_FORM_FIELD,
        payload: { name, value }
    }
}

export function validate(login, password){
    if (!login) {
        return({
            type: VALIDATION_ERROR,
            payload: { type:'empty_login', message:'Логин не введён'}
        });
    }
    if (!password) {
        return({
            type: VALIDATION_ERROR,
            payload: { type:'empty_password', message:'Пароль не введён'}
        });
    }
    return {
        type: CLEAR_AUTHENTICATION_ERROR
    }
}

export function login(params){
    return (dispatch) => {
        dispatch({ type: LOAD_USER_REQUEST });
        return service.login(params).then((response) => {
            if (response.data.success){
                dispatch({
                    type: LOAD_USER_SUCCESS,
                    payload: response.data.result
                });
                dispatch({
                    type: CLEAR_FORM_FIELD,
                })
            }
            else {
                dispatch({
                    type: LOAD_USER_FAILURE,
                    payload: response.data.result
                });
            }

            return response
        }).catch((error) => {
            dispatch({
                type: LOAD_USER_FAILURE,
                payload: error
            });
        })
    }
}
