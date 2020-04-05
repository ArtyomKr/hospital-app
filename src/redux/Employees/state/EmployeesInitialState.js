import { Record } from 'immutable';

export default Record({
    list: Record({
        error: null,
        isFetching: false,
        dataSource: Record({
            data: []
        })()
    })()
})