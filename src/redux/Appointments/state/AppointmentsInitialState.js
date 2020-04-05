import { Record } from 'immutable';

export default Record({
    list: Record({
        error: null,
        isFetching: false,
        shouldReload: false,
        dataSource: Record({
            data: [],
            filter: Record({
                startDate: null,
                endDate: null,
                patientName: '',
                status: '',
                onlyMe: false
            })(),
            pagination: Record({
                page: 1,
                size: 15,
                totalCount: 0
            })()
        })()
    })()
})


