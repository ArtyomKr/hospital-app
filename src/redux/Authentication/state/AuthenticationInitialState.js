import { Record } from 'immutable';

export default Record({
    error: Record({
        type: null,
        message: null
        })(),
    isFetching: false,
    form: Record({
        loginField: '123',
        passwordField: '123',
        })(),
    user: Record({
        login: null,
        name: null,
        logDate: null,
        })()
})