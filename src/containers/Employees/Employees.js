import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { ReactComponent as Doctor } from '../../images/Icons/doctor.svg';

import Header from '../Header/Header.js';
import Employe from '../../components/Employe/Employe.js'
import './Employees.scss'
import * as EmployeesActions from "../../redux/Employees/actions/EmployeesActions";

const TITLE = 'Сотрудники';

function mapStateToProps(state){
    return{
        error: state.employees.list.error,
        isFetching: state.employees.list.isFetching,
        dataSource: state.employees.list.dataSource
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: {
            ...bindActionCreators(EmployeesActions, dispatch),
        }
    }
}

 class Employees extends React.Component {
     load = () => {
         this.props.actions.load();
     };

     componentDidMount(){
         this.load();
     }

    render(){
        const {
            isFetching,
            dataSource,
        } = this.props;

        const EMPLOYEES_LIST = dataSource.data.map(employe => {
            return(
                <Employe
                    name={employe.name}
                    image={employe.image}
                    birth={employe.birth}
                    position={employe.position}
                    tel={employe.tel}
                    email={employe.email}
                    adress={employe.adress}
                />
            )
        });

        return(
            <div className='employees'>
                <Header
                    title={TITLE}
                    Icon={Doctor}
                    className='employees'
                />
                <div className='employees-body'>

                    {isFetching?
                        <div className="spinner-border text-secondary margin-top-40" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        <div className='employees-list'>
                            {EMPLOYEES_LIST}
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);