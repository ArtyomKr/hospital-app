import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import Header from '../Header/Header.js';
import Table from '../../components/Table/Table.js';
import TextField from '../../components/Forms/TextField.js';
import DateField from '../../components/Forms/DateField.js';
import Checkbox from '../../components/Forms/Checkbox.js';
import SelectorField from '../../components/Forms/SelectorField.js';
import Button from '../../components/Button/Button.js'
import { ReactComponent as Calendar } from '../../images/Icons/calendar.svg';

import './Appointments.scss';

import * as AppointmentsActions  from '../../redux/Appointments/actions/AppointmentsActions.js';
import * as AppointmentsListStatusesActions from '../../redux/Directory/AppointmentsStatuses/actions/AppointmentsListStatusesActions';

const TITLE = 'Приёмы';

function mapStateToProps(state){
    return{
        error: state.appointments.list.error,
        isFetching: state.appointments.list.isFetching || state.directory.statuses.isFetching,
        dataSource: state.appointments.list.dataSource,
        shouldReload: state.appointments.list.shouldReload,

        username: state.authentication.user.name,

        directory: state.directory
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: {
            ...bindActionCreators(AppointmentsActions, dispatch),
            statuses: {
                ...bindActionCreators(AppointmentsListStatusesActions, dispatch)
            }
        }
    }
}

class Appointments extends React.Component {

    load(){
        const {
            actions,
            dataSource,
            username
        } = this.props;

        actions.load({
            ...dataSource.filter.toJS(),
            username
        })
    }

    loadStatuses(){
        this.props.actions.statuses.load()
    }

    componentDidMount(){
        this.load();
        this.loadStatuses();
    }

    componentWillUnmount() {
        this.props.actions.clean();
    };

    onSearch = () => {
        this.load()
    };

    handleChange = (name, value) => {
        this.props.actions.changeFilterField(name, value, true);
    };

    render(){

        const {
            isFetching,
            dataSource,
            directory
        } = this.props;

        const {
            startDate,
            endDate,
            patientName,
            onlyMe,
            status
        } = dataSource.filter;

        const statusData = directory.statuses.dataSource.data.map(
            o => ({value: o.id, text: o.title}));
        statusData.unshift({value: -1, text: ''});

        const columns = [{
            dataField: 'date',
            text: 'Дата',
            headerStyle:{
                width: '100px'
            },
            formatter(cell){
                return(
                    moment(cell).format('DD.MM.YYYY')
                )
            }
        },{
            dataField: 'time',
            text: 'Время',
            headerStyle:{
                width: '75px'
            },
            formatter(cell){
                return(
                    moment(cell).format('HH:MM')
                )
            }
        },{
            dataField: 'client',
            text: 'Клиент',
            headerStyle:{
                width: '280px'
            }
        },{
            dataField: 'status',
            text: 'Статус',
            headerStyle:{
                width: '100px'
            },
            formatter(cell){
                return directory.statuses.dataSource.data[cell].title
            }
        },{
            dataField: 'doctor',
            text: 'Принимающий',
            headerStyle:{
                width: '200px'
            }
        },{
            dataField: 'complaints',
            text: 'Жалобы',
            headerStyle:{
                width: '150px'
            },
        },{
            dataField: 'diagnosis',
            text: 'Диагноз',
            headerStyle:{
                width: '210px'
            }
        }];

        return (
            <div className='appointments'>
                <Header
                    title={TITLE}
                    Icon={Calendar}
                    className='appointments'
                />
                <div className='appointments-body'>
                    <div className='forms'>
                        <DateField
                            className='appointments-body__dateField'
                            placeholder='С'
                            name='startDate'
                            value={startDate}
                            showTimeSelect={false}
                            onChange={this.handleChange}
                        />
                        <DateField
                            className='appointments-body__dateField'
                            placeholder='По'
                            name='endDate'
                            value={endDate}
                            showTimeSelect={false}
                            onChange={this.handleChange}
                        />
                        <TextField
                            className='appointments-body__textField'
                            placeholder='Клиент'
                            name='patientName'
                            value={patientName}
                            onChange={this.handleChange}
                        />
                        <SelectorField
                            className='appointments-body__textField'
                            name='status'
                            value={status}
                            options={statusData}
                            onChange={this.handleChange}
                        />
                        <Checkbox
                            className='appointments-body__checkBox'
                            label='Только я'
                            name='onlyMe'
                            value={onlyMe}
                            onChange={this.handleChange}
                        />
                        <Button
                            onClick={this.onSearch}
                            className='appointments-body__searchButton'
                            text='Найти'
                        />
                    </div>
                    {isFetching?
                        <div className="spinner-border text-secondary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> : dataSource.data?
                            <Table
                                className='appointments-body__table'
                                keyField='date'
                                data={dataSource.data}
                                columns={columns}
                            /> : "Нет данных"}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);