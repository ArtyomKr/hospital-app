import { Record } from 'immutable';

export default Record({
    statuses: Record({
        error: null,
        shouldReload: false,
        isFetching: false,
        dataSource: Record({
            data: []
        })()
    })()
})