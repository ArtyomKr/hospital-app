import React from 'react';

import cn from 'classnames';

import BootstrapTable from 'react-bootstrap-table-next';

import './Table.scss';

export default class Table extends React.Component{
    render(){
        const {
            className = '',
            keyField = 'id',
            data = [],
            columns = [],
            noDataIndication = 'Нет данных'
        } = this.props;

        return (
            <div className={cn('table-container', className)}>
                <BootstrapTable
                    keyField={keyField}
                    data={data}
                    columns={columns}
                    noDataIndication={noDataIndication}
                />
            </div>
        )
    }
}