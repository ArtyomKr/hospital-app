import React from 'react';
import {
    Switch,
    withRouter,
    Route,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/Home/Home.js';
import Appointments from './containers/Appointments/Appointments.js';
import Authentication from './containers/Authentication/Authentication.js';
import Events from './containers/Events/Events.js';
import Employees from './containers/Employees/Employees.js';

import './App.scss';

import config from './config.js';

function mapStateToProps(state){
    return{
        login: state.authentication.user.login
    }
}

class App extends React.Component {
    render(){
        const loggedUser = this.props.login;

        return (
            <div className="App">

                <Switch>

                    <Route path='/authentication' component={Authentication}/>
                    {loggedUser ?
                        <>
                            <Route path='/employees' component={Employees}/>
                            <Route path='/events' component={Events}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/appointments' component={Appointments}/>
                            <Route path='/authentication' component={Authentication}/>
                            <Redirect from='/' to='/home'/>
                        </> :
                        <Redirect to='/authentication'/>

                    }

                </Switch>

            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(App));
